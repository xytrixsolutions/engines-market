/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Wrench,
  Shield,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/Heading";
import Accent from "@/components/Accent";
import Paragraph from "@/components/Paragraph";
import { data } from "../../../data/brands";
import * as motion from "motion/react-client";
import { Fragment } from "react";

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

const motionProps = {
  initial: { opacity: 0, y: 25 },
  transition: { duration: 1, ease: "easeOut" as const },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const EngineProblemsSection: React.FC<{ brand: string }> = ({ brand }) => {
  const {
    EngineProblems,
    conclusion,
    engineReliabilityAndPerformance,
    mainParagraph,
  } = data[brand].section4;
  const brandName = data[brand].brandName;
  const keyTakeawayMotionProps = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: 1,
      ease: "easeOut" as const,
      delay: EngineProblems.length * 0.1 + 0.02,
    },
  };

  return (
    <>
      <motion.div
        {...motionProps}
        className="max-w-5xl mx-auto text-center text-charcoal-gray-muted"
      >
        <Heading
          className="mb-6 text-charcoal-gray-muted"
          useMotion
          {...motionProps}
        >
          Common<Accent>{brandName} Engine Problems</Accent>& How to Fix Them
        </Heading>
        <Paragraph useMotion {...motionProps}>
          {mainParagraph}
        </Paragraph>
      </motion.div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="space-y-4"
      >
        {EngineProblems.map((item, idx) => {
          const delay = idx * 0.1;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay,
              }}
            >
              <AccordionItem
                value={`item-${idx}`}
                className="rounded-xl shadow-sm bg-card gradient-border"
              >
                <AccordionTrigger className="px-6 py-4 font-semibold text-lg text-royal-blue flex items-center justify-between select-none rounded-t-xl transition-all duration-300 hover:no-underline">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <Badge
                    variant={getSeverityColor(item.severity || "Common")}
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
            </motion.div>
          );
        })}
      </Accordion>

      {engineReliabilityAndPerformance &&
        engineReliabilityAndPerformance.length > 0 && (
          <motion.div {...motionProps} className="mt-16">
            <Heading
              useMotion
              {...motionProps}
              className="mb-8 text-charcoal-gray-muted text-center"
            >
              <Accent>{brandName}</Accent> Engine Reliability & Performance
            </Heading>

            <div className="space-y-12 mt-8">
              {engineReliabilityAndPerformance.map(
                (section: any, idx: number) => (
                  <Fragment key={idx}>
                    {/* Enhanced Reliability & Performance Comparison Layout */}
                    {(section.reliability || section.performance) && (
                      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                        {/* Reliability Card - Enhanced */}
                        {section.reliability && (
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group h-full"
                          >
                            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 via-white to-blue-50 hover:from-blue-100 hover:to-blue-50 h-full">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              <CardContent className="relative pt-8 px-8 pb-8 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                  <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                                      <Shield className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                      <h3 className="text-2xl font-bold text-blue-900">
                                        Reliability
                                      </h3>
                                      <p className="text-blue-600 text-sm">
                                        Built to Last
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Award className="h-5 w-5 text-yellow-500" />
                                    <span className="text-sm font-semibold text-gray-600">
                                      Certified
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-6 flex-1">
                                  {section.reliability.map(
                                    (item: any, i: number) => (
                                      <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                          duration: 0.5,
                                          delay: i * 0.1,
                                        }}
                                        className="relative pl-6 border-l-2 border-blue-200 hover:border-blue-400 transition-colors duration-300"
                                      >
                                        <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-sm" />
                                        <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-900 transition-colors duration-300">
                                          {item.heading}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                          {item.paragraph}
                                        </p>
                                      </motion.div>
                                    )
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )}

                        {/* Performance Card - Enhanced */}
                        {section.performance && (
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="group h-full"
                          >
                            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 hover:from-emerald-100 hover:to-emerald-50 h-full">
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              <CardContent className="relative pt-8 px-8 pb-8 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                  <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors duration-300">
                                      <Zap className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                      <h3 className="text-2xl font-bold text-emerald-900">
                                        Performance
                                      </h3>
                                      <p className="text-emerald-600 text-sm">
                                        Maximum Power
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <TrendingUp className="h-5 w-5 text-green-500" />
                                    <span className="text-sm font-semibold text-gray-600">
                                      Optimized
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-6 flex-1">
                                  {section.performance.map(
                                    (item: any, i: number) => (
                                      <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                          duration: 0.5,
                                          delay: i * 0.1,
                                        }}
                                        className="relative pl-6 border-l-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300"
                                      >
                                        <div className="absolute -left-2 top-2 w-4 h-4 bg-emerald-500 rounded-full shadow-sm" />
                                        <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-emerald-900 transition-colors duration-300">
                                          {item.heading}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                          {item.paragraph}
                                        </p>
                                      </motion.div>
                                    )
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </Fragment>
                )
              )}
            </div>
          </motion.div>
        )}
      <motion.div {...keyTakeawayMotionProps}>
        <Card className="bg-blue-50 border-blue-200 mt-5">
          <CardContent>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-2">
                  Conclusion
                </h3>
                <p className="text-sm md:text-base text-blue-800">
                  {conclusion}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default EngineProblemsSection;
