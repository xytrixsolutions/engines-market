"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import { AlertTriangle, Wrench, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/Heading";
import Accent from "@/components/Accent";
import Paragraph from "@/components/Paragraph";
import GradientBorderWrapper from "@/components/GradientBorderWrapper";
import { data } from "../../../data/brands";
import { motion } from "framer-motion";

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

const EngineProblemsSection: React.FC<{ brand: string }> = ({ brand }) => {
  const { EngineProblems } = data[brand].section4;
  const { brandName } = data[brand];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Container dark className="my-12" id="engine-problems">
      <motion.div
        className="max-w-5xl mx-auto text-center text-charcoal-gray-muted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <Heading className="mb-6 text-charcoal-gray-muted">
          Common<Accent>{brandName} Engine Problems</Accent>& How to Fix Them
        </Heading>
        <Paragraph>
          {brandName} engines are renowned for their performance and engineering
          excellence, but like any complex machinery, they can encounter issues.
          Here are some of the most common problems found in{" "}
          <strong>{brandName} engines</strong>, along with solutions and
          preventive measures:
        </Paragraph>
      </motion.div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="space-y-4 mt-8"
      >
        {EngineProblems.map((item, idx) => (
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
          </GradientBorderWrapper>
        ))}
      </Accordion>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-blue-50 border-blue-200 mt-5">
          <CardContent>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-2">
                  Key Takeaway
                </h3>
                <p className="text-sm md:text-base text-blue-800">
                  By understanding these common issues and taking preventive
                  measures, you can ensure your {brandName} engine remains in
                  top condition, providing you with the performance and
                  reliability you expect from the brand.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default EngineProblemsSection;
