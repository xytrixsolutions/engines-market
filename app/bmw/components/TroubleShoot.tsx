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
    <Container className="my-16">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-royal-blue">
          Troubleshooting Guide for BMW Engines
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Troubleshooting Tips to Prevent Engine Faults and Prolong Engine Life
        </p>
        <p className="text-muted-foreground max-w-4xl mx-auto">
          Maintaining your BMW engine properly can help prevent faults and
          extend its lifespan. Here are some troubleshooting tips to keep your
          engine running smoothly:
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="check-engine-light"
        className="space-y-4"
      >
        {TROUBLESHOOTING_SECTIONS.map((section, idx) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="rounded-xl border border-border bg-card shadow-sm"
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
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-4 text-center">
            <Lightbulb className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-blue-800 mb-1">
              Regular Inspections
            </h4>
            <p className="text-sm text-blue-700">
              Check your engine monthly for early problem detection
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-4 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-green-800 mb-1">
              Preventive Maintenance
            </h4>
            <p className="text-sm text-green-700">
              Follow BMW&apos;s recommended service schedule
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-4 text-center">
            <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <h4 className="font-semibold text-orange-800 mb-1">Act Quickly</h4>
            <p className="text-sm text-orange-700">
              Address warning signs immediately to prevent damage
            </p>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default TroubleshootingGuide;
