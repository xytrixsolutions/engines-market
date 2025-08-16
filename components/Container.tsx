// eslint-disable @typescript-eslint/no-explicit-any
import { cn } from "@/lib/utils"; // adjust path as needed
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  dark?: boolean;
}

const Container = ({ children, className, dark, ...props }: WrapperProps) => {
  return (
    <div
      className={cn(
        "w-full overflow-x-hidden",
        dark &&
          "bg-[radial-gradient(ellipse_at_center,_#484848_0%,_#383838_40%,_#1a1a1a_100%)]",
      )}
    >
      <div
        className={cn("w-11/12 lg:w-10/12 mx-auto py-16", className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
// import { cn } from "@/lib/utils";
// import React from "react";
//
// interface WrapperProps<T extends React.ElementType = "div">
//   extends React.HTMLAttributes<HTMLDivElement> {
//   children: React.ReactNode;
//   dark?: boolean;
//   as?: T;
// }
//
// const Container = <T extends React.ElementType = "div">({
//   children,
//   className,
//   dark,
//   as,
//   ...props
// }: WrapperProps<T> &
//   Omit<React.ComponentPropsWithoutRef<T>, keyof WrapperProps>) => {
//   const As = as || "div";
//   return (
//     <div
//       className={cn(
//         "w-full overflow-x-hidden",
//         dark &&
//           "bg-[radial-gradient(ellipse_at_center,_#484848_0%,_#383838_40%,_#1a1a1a_100%)]",
//       )}
//     >
//       <As
//         className={cn("w-11/12 lg:w-10/12 mx-auto py-16", className)}
//         {...props}
//       >
//         {children}
//       </As>
//     </div>
//   );
// };
//
// export default Container;
