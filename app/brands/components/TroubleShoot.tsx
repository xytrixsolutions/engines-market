import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import {
  CheckCircle,
  AlertTriangle,
  Gauge,
  AlarmSmokeIcon as Smoke,
  Lightbulb,
  Settings,
} from "lucide-react";
import Heading from "@/components/Heading";
import Accent from "@/components/Accent";
import Paragraph from "@/components/Paragraph";
import GradientBorderWrapper from "@/components/GradientBorderWrapper";

const TIPS = [
  {
    icon: Lightbulb,
    iconColor: "text-blue-600",
    border: "border-blue-200",
    bg: "bg-blue-50",
    title: "Regular Inspections",
    titleColor: "text-blue-800",
    text: "Check your engine monthly for early problem detection",
    textColor: "text-blue-700",
  },
  {
    icon: CheckCircle,
    iconColor: "text-green-600",
    border: "border-green-200",
    bg: "bg-green-50",
    title: "Preventive Maintenance",
    titleColor: "text-green-800",
    text: "Follow BMW's recommended service schedule",
    textColor: "text-green-700",
  },
  {
    icon: AlertTriangle,
    iconColor: "text-orange-600",
    border: "border-orange-200",
    bg: "bg-orange-50",
    title: "Act Quickly",
    titleColor: "text-orange-800",
    text: "Address warning signs immediately to prevent damage",
    textColor: "text-orange-700",
  },
];

const TROUBLESHOOTING_SECTIONS = [
  {
    id: "check-engine-light",
    title: "Check Engine Light Issues",
    icon: <AlertTriangle className="h-5 w-5" />,
    severity: "Common",
    tips: [
      {
        title: "Diagnose Promptly",
        description:
          "When the check engine light comes on, use an OBD-II scanner to diagnose the issue. Common causes include faulty sensors, emission control problems, or minor issues like a loose gas cap.",
      },
      {
        title: "Regular Maintenance",
        description:
          "Ensure regular maintenance checks to catch potential issues early. This includes checking and replacing faulty sensors and addressing any emission control system problems.",
      },
    ],
  },
  {
    id: "power-loss-turbo",
    title: "Power Loss & Turbo Failures",
    icon: <Gauge className="h-5 w-5" />,
    severity: "Critical",
    tips: [
      {
        title: "Inspect Turbocharger",
        description:
          "Regularly inspect the turbocharger for signs of wear or damage. Turbo failures can lead to significant power loss.",
      },
      {
        title: "Clean Air Filters",
        description:
          "Ensure air filters are clean and replaced regularly to prevent debris from damaging the turbocharger and affecting engine performance.",
      },
      {
        title: "Check Fuel System",
        description:
          "Regularly check the fuel system for blockages or leaks that could lead to power loss.",
      },
    ],
  },
  {
    id: "smoke-oil-leaks",
    title: "Excessive Smoke & Oil Leaks",
    icon: <Smoke className="h-5 w-5" />,
    severity: "Moderate",
    tips: [
      {
        title: "Monitor Oil Levels",
        description:
          "Keep an eye on oil levels and top up as necessary. Low oil levels can cause excessive smoke and indicate potential leaks.",
      },
      {
        title: "Inspect Gaskets and Seals",
        description:
          "Regularly inspect gaskets and seals for wear and tear. Common areas for oil leaks include the valve cover gasket, oil pan gasket, and timing cover.",
      },
      {
        title: "Address Leaks Promptly",
        description:
          "If you notice oil leaks, address them promptly to prevent further engine damage.",
      },
    ],
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "destructive";
    case "Moderate":
      return "default";
    case "Common":
      return "secondary";
    default:
      return "default";
  }
};

const TroubleshootingGuide: React.FC = () => {
  return (
    <Container dark className="my-16">
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4 text-charcoal-gray-muted">
        <Heading className="text-charcoal-gray-muted">
          Troubleshooting Guide for<Accent>BMW Engines</Accent>
        </Heading>
        <Paragraph className="mb-1">
          Learn how to identify <strong>early signs of engine trouble</strong>{" "}
          and take action before it becomes <strong>costly</strong>.
        </Paragraph>

        <Paragraph className="text-base">
          Maintaining your <strong>BMW engine</strong> with proper care and
          early troubleshooting can <strong>prevent common faults</strong> and
          <strong> extend its lifespan</strong>. Here are actionable tips to
          keep your engine running smoothly:
        </Paragraph>
      </div>
      <Accordion
        type="single"
        collapsible
        defaultValue="check-engine-light"
        className="space-y-4"
      >
        {TROUBLESHOOTING_SECTIONS.map((section, idx) => (
          <GradientBorderWrapper key={section.id}>
            <AccordionItem
              value={section.id}
              className="rounded-xl bg-card shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 font-semibold text-lg text-royal-blue flex items-center justify-between select-none rounded-t-xl transition-all duration-300 hover:no-underline">
                <div className="flex items-center gap-3">
                  {section.icon}
                  <span>{section.title}</span>
                </div>
                <Badge
                  variant={getSeverityColor(section.severity)}
                  className="ml-auto mr-4"
                >
                  {section.severity}
                </Badge>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-4 transition-all duration-300">
                <div className="space-y-4">
                  {section.tips.map((tip, tipIdx) => (
                    <div key={tipIdx} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-blue-600" />
                        <h4 className="font-bold text-blue-700">{tip.title}</h4>
                      </div>
                      <p className="text-foreground pl-6 text-sm leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </GradientBorderWrapper>
        ))}
      </Accordion>
      {/* Bottom Summary Card */}
      <Card className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-green-800">
                Key Takeaway
              </h3>
              <p className="text-green-700 leading-relaxed">
                By following these troubleshooting tips and maintaining regular
                engine checks, you can help ensure your BMW engine remains in
                top condition, prolonging its life and performance. Early
                detection and prompt action are crucial for preventing minor
                issues from becoming major repairs.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Quick Reference Tips */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {TIPS.map(
          (
            {
              icon: Icon,
              iconColor,
              border,
              bg,
              title,
              titleColor,
              text,
              textColor,
            },
            idx
          ) => (
            <Card key={idx} className={`${border} ${bg}`}>
              <CardContent className="py-16 text-center">
                <Icon className={`h-8 w-8 mx-auto mb-2 ${iconColor}`} />
                <h4 className={`font-semibold mb-1 ${titleColor}`}>{title}</h4>
                <p className={`text-sm ${textColor}`}>{text}</p>
              </CardContent>
            </Card>
          )
        )}
      </div>{" "}
    </Container>
  );
};

export default TroubleshootingGuide;
