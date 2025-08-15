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
import { Settings } from "lucide-react";
import * as Lucide from "lucide-react";
import Heading from "@/components/Heading";
import Accent from "@/components/Accent";
import Paragraph from "@/components/Paragraph";
import GradientBorderWrapper from "@/components/GradientBorderWrapper";
import SummaryCard from "@/components/SummaryCard";
import { data } from "../../../data/brands";
import * as motion from "motion/react-client";
import { memo } from "react";

const TroubleshootingGuide: React.FC<{ brand: string }> = ({ brand }) => {
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

  // Calculate delays step by step
  const accordionBaseDelay = 0.2;
  const accordionStaggerDelay =
    troubleshootingSections.length > 0
      ? (troubleshootingSections.length - 1) * 0.1
      : 0;
  const accordionLastItemDelay = accordionBaseDelay + accordionStaggerDelay;
  const accordionAnimationDuration = 0.8;
  const accordionFinishTime =
    accordionLastItemDelay + accordionAnimationDuration;

  const summaryDelay = accordionFinishTime - 0.8;
  const summaryAnimationDuration = 0.8;
  const summaryFinishTime = summary
    ? summaryDelay + summaryAnimationDuration
    : accordionFinishTime;

  const tipsDelay = summaryFinishTime - 0.5; // 0.3s gap after summary

  return (
    <Container dark className="my-16" id="troubleshooting-guide">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-full mx-auto text-center mb-12 space-y-4 text-charcoal-gray-muted"
      >
        <Heading className="text-charcoal-gray-muted">
          Troubleshooting Guide for <Accent>{brandName} Engines</Accent>
        </Heading>
        <Paragraph className="mb-1">
          Learn how to identify <strong>early signs of engine trouble</strong>{" "}
          and take action before it becomes <strong>costly</strong>. Maintaining
          your <strong>{brandName} engine</strong> with proper care and early
          troubleshooting can <strong>prevent common faults</strong> and
          <strong> extend its lifespan</strong>. Here are actionable tips to
          keep your engine running smoothly:
        </Paragraph>
      </motion.div>

      {/* Accordion Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: accordionBaseDelay }}
      >
        <Accordion
          type="single"
          collapsible
          defaultValue={troubleshootingSections[0]?.id}
          className="space-y-4"
        >
          {troubleshootingSections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1, // Stagger each accordion item
              }}
            >
              <GradientBorderWrapper>
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
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Summary Card */}
      {summary && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: summaryDelay }}
        >
          <SummaryCard
            variant={
              summary.variant as "green" | "blue" | "card" | "performance"
            }
            title={summary.title}
            content={summary.content}
          />
        </motion.div>
      )}

      {/* Quick Reference Tips - Properly Sequential */}
      <div className="mt-8">
        <div className="grid gap-4 md:grid-cols-3">
          {tips.map((tip, idx) => {
            type IconName = keyof typeof Lucide;
            const iconName = tip.icon as IconName;
            const Icon =
              (Lucide[iconName] as React.ComponentType<
                React.SVGProps<SVGSVGElement>
              >) ?? Lucide.Settings;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: tipsDelay + idx * 0.25,
                }}
                className="flex flex-col h-full" // 👈 ADD THIS LINE
              >
                <Card
                  className={`flex flex-col h-full ${tip.border} ${tip.bg}`}
                >
                  <CardContent className="py-8 text-center flex-grow">
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${tip.iconColor}`} />
                    <h4 className={`font-semibold mb-1 ${tip.titleColor}`}>
                      {tip.title}
                    </h4>
                    <p className={`text-sm ${tip.textColor}`}>{tip.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default TroubleshootingGuide;
