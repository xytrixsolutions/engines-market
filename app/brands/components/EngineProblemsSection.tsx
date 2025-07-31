import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import {
  Droplets,
  Thermometer,
  Clock,
  Zap,
  Fuel,
  AlertTriangle,
  Wrench,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/Heading";
import Accent from "@/components/Accent";
import Paragraph from "@/components/Paragraph";
import GradientBorderWrapper from "@/components/GradientBorderWrapper";

const PROBLEMS = [
  {
    title: "Oil Leaks",
    icon: <Droplets className="h-5 w-5" />,
    severity: "Common",
    problem:
      "Oil leaks are a prevalent issue in many BMW models, often caused by worn or damaged gaskets and seals. Common areas for oil leaks include the valve cover gasket, oil filter housing gasket, and oil pan gasket.",
    solution:
      "Regularly inspect the engine for visible signs of oil leaks, such as puddles or stains underneath your vehicle. Replace any worn or damaged gaskets and seals promptly. Ensure that oil changes are performed regularly and check for leaks during routine maintenance.",
    prevention:
      "Use high-quality oil and gaskets, and adhere to the recommended oil change intervals to prevent leaks.",
  },
  {
    title: "Overheating Issues",
    icon: <Thermometer className="h-5 w-5" />,
    severity: "Critical",
    problem:
      "Engine overheating can cause significant damage to BMW engines. Common causes include a faulty thermostat, a failing water pump, or a leaking radiator.",
    solution:
      "Check the coolant level and inspect the cooling system for leaks. Ensure that the radiator and water pump are functioning correctly and replace any faulty components. If the engine consistently overheats, have a professional inspect the thermostat and cooling system.",
    prevention:
      "Regularly maintain the cooling system, including flushing the coolant and replacing the thermostat and water pump as needed.",
  },
  {
    title: "Timing Chain Problems",
    icon: <Clock className="h-5 w-5" />,
    severity: "Critical",
    problem:
      "Timing chain issues are common in some BMW engines, particularly the N20 and N26 models. A failing timing chain can lead to severe engine damage.",
    solution:
      "Listen for unusual noises from the engine, such as rattling or ticking sounds, which may indicate a timing chain issue. If detected, have the timing chain inspected and replaced by a professional.",
    prevention:
      "Follow the manufacturer's maintenance schedule and replace the timing chain and related components at the recommended intervals.",
  },
  {
    title: "Misfiring Engines",
    icon: <Zap className="h-5 w-5" />,
    severity: "Moderate",
    problem:
      "Engine misfires can result from faulty spark plugs, ignition coils, or fuel injectors. Misfires can lead to poor engine performance and increased emissions.",
    solution:
      "Diagnose the issue using an OBD-II scanner to identify the specific problem. Replace faulty spark plugs, ignition coils, or fuel injectors as needed.",
    prevention:
      "Regularly replace spark plugs and ignition coils according to the manufacturer's recommendations. Use high-quality fuel to prevent injector clogging.",
  },
  {
    title: "HPFP Failure (High-Pressure Fuel Pump)",
    icon: <Fuel className="h-5 w-5" />,
    severity: "Critical",
    problem:
      "The high-pressure fuel pump (HPFP) in some BMW models, particularly those with turbocharged engines like the N54, can fail, leading to poor engine performance and starting issues.",
    solution:
      "If you experience symptoms such as long cranking times or loss of power, have the HPFP inspected and replaced if necessary.",
    prevention:
      "Use high-quality fuel and follow the recommended maintenance schedule to reduce the risk of HPFP failure.",
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

const EngineProblemsSection: React.FC = () => {
  return (
    <Container dark className="my-12">
      <div className="max-w-5xl mx-auto text-center text-charcoal-gray-muted">
        <Heading className="mb-6 text-charcoal-gray-muted">
          Common<Accent>BMW Engine Problems</Accent>& How to Fix Them
        </Heading>
        <Paragraph>
          BMW engines are renowned for their performance and engineering
          excellence, but like any complex machinery, they can encounter issues.
          Here are some of the most common problems found in{" "}
          <strong>BMW engines</strong>, along with solutions and preventive
          measures:
        </Paragraph>
      </div>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="space-y-4"
      >
        {PROBLEMS.map((item, idx) => (
          <GradientBorderWrapper key={item.title} variant="conic">
            <AccordionItem
              value={`item-${idx}`}
              className="rounded-xl bg-card shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 font-semibold text-lg text-royal-blue flex items-center justify-between select-none rounded-t-xl transition-all duration-300 hover:no-underline">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <Badge
                  variant={getSeverityColor(item.severity)}
                  className="ml-auto mr-4"
                >
                  {item.severity}
                </Badge>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-4 transition-all duration-300">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-neon-red" />
                      <h4 className="font-bold text-neon-red">Problem</h4>
                    </div>
                    <p className="text-foreground pl-6">{item.problem}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-green-600" />
                      <h4 className="font-bold text-green-600">Solution</h4>
                    </div>
                    <p className="text-foreground pl-6">{item.solution}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-amber-500" />
                      <h4 className="font-bold text-amber-500">Prevention</h4>
                    </div>
                    <p className="text-foreground pl-6">{item.prevention}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </GradientBorderWrapper>
        ))}
      </Accordion>
      <Card className="bg-blue-50 border-blue-200 mt-5">
        <CardContent className="py-6">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Key Takeaway</h3>
              <p className="text-sm text-blue-800">
                By understanding these common issues and taking preventive
                measures, you can ensure your BMW engine remains in top
                condition, providing you with the performance and reliability
                you expect from the brand.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EngineProblemsSection;
