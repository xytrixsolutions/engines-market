"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  activeTriggerRef: React.RefObject<HTMLElement> | null;
  setActiveTriggerRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLElement> | null>
  > | null;
}

const AccordionContext = React.createContext<AccordionContextType>({
  activeTriggerRef: null,
  setActiveTriggerRef: null,
});

interface AccordionProps extends React.ComponentPropsWithoutRef<"div"> {
  type: "single" | "multiple";
  collapsible?: boolean;
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  defaultValue?: string | string[];
  orientation?: "vertical" | "horizontal";
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type,
      collapsible,
      value: controlledValue,
      onValueChange,
      defaultValue,
      orientation = "vertical",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [activeTriggerRef, setActiveTriggerRef] =
      React.useState<React.RefObject<HTMLElement> | null>(null);
    const [uncontrolledValue, setUncontrolledValue] = React.useState<
      string | string[]
    >(() => {
      if (defaultValue === undefined) {
        return type === "single" ? "" : [];
      }
      return defaultValue;
    });

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;

    const handleValueChange = React.useCallback(
      (newValue: string | string[]) => {
        if (!isControlled) {
          setUncontrolledValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [isControlled, onValueChange],
    );

    const contextValue = React.useMemo(
      () => ({ activeTriggerRef, setActiveTriggerRef }),
      [activeTriggerRef],
    );

    const handleItemOpen = React.useCallback(
      (itemId: string) => {
        if (type === "single") {
          const isOpen = Array.isArray(value)
            ? value.includes(itemId)
            : value === itemId;
          handleValueChange(isOpen && collapsible ? "" : itemId);
        } else {
          const isOpen = (value as string[]).includes(itemId);
          const newValue = isOpen
            ? (value as string[]).filter((id) => id !== itemId)
            : [...(value as string[]), itemId];
          handleValueChange(newValue);
        }
      },
      [type, value, collapsible, handleValueChange],
    );

    return (
      <AccordionContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-orientation={orientation}
          className={cn("space-y-2", className)}
          {...props}
        >
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return null;
            if (!child.props || typeof child.props !== "object") return child;
            return React.cloneElement(child, {
              ...child.props,
              onOpen: () => handleItemOpen((child.props as any).value),
            } as any);
          })}
        </div>
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.ComponentPropsWithoutRef<"div"> {
  value: string;
  disabled?: boolean;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, disabled, className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const [isOpen, setIsOpen] = React.useState(false);
    const itemRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const triggerElement = itemRef.current?.querySelector(
        '[data-state="open"], [data-state="closed"]',
      ) as HTMLElement | null;
      if (triggerElement && context.setActiveTriggerRef) {
        const handleClick = () => {
          context.setActiveTriggerRef?.({ current: triggerElement });
        };
        triggerElement.addEventListener("click", handleClick);
        return () => triggerElement.removeEventListener("click", handleClick);
      }
    }, [context]);

    return (
      <div
        ref={ref}
        data-state={isOpen ? "open" : "closed"}
        data-disabled={disabled ? "" : undefined}
        className={cn("border rounded-lg border-border", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          if (!child.props || typeof child.props !== "object") return child;
          return React.cloneElement(child, {
            ...child.props,
            value,
            disabled,
            isOpen,
            onOpen: () => {
              setIsOpen(!isOpen);
              (child.props as any).onOpen?.();
            },
            ref: (child.props as any).value === value ? itemRef : undefined,
          } as any);
        })}
      </div>
    );
  },
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  onOpen?: () => void;
  isOpen?: boolean;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, disabled, onOpen, className, isOpen, ...props }, ref) => {
  const context = React.useContext(AccordionContext);

  React.useEffect(() => {
    const element = (ref as React.RefObject<HTMLButtonElement>)?.current;
    if (element && context.activeTriggerRef?.current === element) {
      if (context.setActiveTriggerRef) {
        context.setActiveTriggerRef(null);
      }
    }
  }, [context, ref]);

  return (
    <button
      ref={ref}
      disabled={disabled}
      aria-expanded={isOpen}
      data-state={isOpen ? "open" : "closed"}
      onClick={() => {
        onOpen?.();
      }}
      className={cn(
        "flex flex-1 items-center justify-between w-full px-5 py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        "text-left text-sm font-medium",
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "rounded-md",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180",
        )}
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.ComponentPropsWithoutRef<"div"> {
  isOpen?: boolean;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, isOpen, ...props }, ref) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  // Remove custom props before passing to DOM element
  const { ...restProps } = props;

  return (
    <div
      ref={ref}
      data-state={isOpen ? "open" : "closed"}
      className="overflow-hidden transition-all duration-200 ease-in-out"
      style={{
        height: `${height}px`,
      }}
      {...restProps}
    >
      <div ref={contentRef} className={cn("pb-4 pt-0 text-sm", className)}>
        {children}
      </div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
