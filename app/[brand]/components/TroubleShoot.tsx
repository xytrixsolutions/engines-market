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
import { Settings } from "lucide-react"; // Only import what you need
import Heading from "@/components/Heading";
import Accent from "@/components/Accent";
import Paragraph from "@/components/Paragraph";
import GradientBorderWrapper from "@/components/GradientBorderWrapper";
import SummaryCard from "@/components/SummaryCard";
import { data } from "../../../data/brands";

const TroubleshootingGuide: React.FC<{ brand: string }> = ({
  brand: brand,
}) => {
  const { section8, brandName } = data[brand];
  const {
    EngineProblems: troubleshootingSections = [],
    maintenanceTips: tips = [],
    summary,
  } = section8 || {};

  const getSeverityColor = (severity?: string) => {
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

  return (
    <Container dark className="my-16" id="troubleshooting-guide">
      <div
        className="max-w-full mx-auto text-center mb-12 space-y-4 text-charcoal-gray-muted"
        data-aos="fade-up"
      >
        <Heading className="text-charcoal-gray-muted">
          Troubleshooting Guide for<Accent>{brandName} Engines</Accent>
        </Heading>
        <Paragraph className="mb-1">
          Learn how to identify <strong>early signs of engine trouble</strong>{" "}
          and take action before it becomes <strong>costly</strong>. Maintaining
          your <strong>{brandName} engine</strong> with proper care and early
          troubleshooting can <strong>prevent common faults</strong> and
          <strong> extend its lifespan</strong>. Here are actionable tips to
          keep your engine running smoothly:
        </Paragraph>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue={troubleshootingSections[0]?.id}
        className="space-y-4"
      >
        {troubleshootingSections.map((section) => (
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
                  {section.data?.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-blue-600" />
                        <h4 className="font-bold text-blue-700">
                          {item.heading}
                        </h4>
                      </div>
                      {item.paragraph && (
                        <p className="text-foreground pl-6 text-sm leading-relaxed">
                          {item.paragraph}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </GradientBorderWrapper>
        ))}
      </Accordion>

      {/* Bottom Summary Card */}
      {summary && (
        <SummaryCard
          variant={summary.variant as "green" | "blue" | "card" | "performance"} // Adjust based on your actual variants
          title={summary.title}
          content={summary.content}
        />
      )}

      {/* Quick Reference Tips */}
      {tips.length > 0 && (
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tips.map((tip, idx) => {
            // You'll need to dynamically import the icon component based on tip.icon
            // This is a placeholder - you'll need to implement actual icon mapping
            const Icon = Settings; // Replace with your icon mapping logic

            return (
              <Card key={idx} className={`${tip.border} ${tip.bg}`} data-aos="fade-up">
                <CardContent className="py-8 text-center">
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${tip.iconColor}`} />
                  <h4 className={`font-semibold mb-1 ${tip.titleColor}`}>
                    {tip.title}
                  </h4>
                  <p className={`text-sm ${tip.textColor}`}>{tip.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default TroubleshootingGuide;
