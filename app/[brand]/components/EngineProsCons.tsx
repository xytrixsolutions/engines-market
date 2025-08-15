//
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import { Check, X } from "lucide-react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Accent from "@/components/Accent";
import SummaryCard from "@/components/SummaryCard";
import { data } from "../../../data/brands";
import * as motion from "motion/react-client";
import { memo } from "react";

const EngineProsCons = ({ brand }: { brand: string }) => {
  const { section7, brandName } = data[brand];
  const firstSectionItemCount = section7.length; // Adjust based on actual EngineProblems count
  const firstSectionStaggerDelay = firstSectionItemCount * 0.05;

  return (
    <Container className="my-16" id="pros-cons">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: firstSectionStaggerDelay,
          ease: "easeOut",
        }}
      >
        <Heading>
          Pros & Cons of New, Used &
          <Accent>Reconditioned {brandName} Engines</Accent>
        </Heading>
        <Paragraph>
          Understanding the <strong>advantages and disadvantages</strong> of
          each engine type will help you make an{" "}
          <strong>informed decision</strong> based on your{" "}
          <strong>budget</strong>, <strong>vehicle age</strong>, and{" "}
          <strong>performance requirements</strong>.
        </Paragraph>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {section7.map((engineType, key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: firstSectionStaggerDelay + (key + 1) * 0.15,
            }}
          >
            <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-royal-blue">
                    <CardTitle className="text-lg">
                      {engineType.title}
                    </CardTitle>
                  </div>
                  <Badge variant={engineType.badgeVariant}>
                    {engineType.badge}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pros Section */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700 flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Advantages
                  </h4>
                  <ul className="space-y-2">
                    {engineType.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons Section */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-700 flex items-center gap-2">
                    <X className="h-4 w-4" />
                    Disadvantages
                  </h4>
                  <ul className="space-y-2">
                    {engineType.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-red/10 to-transparent rounded-bl-full" />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA/Info Section */}
      <motion.div
        id="summary-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2, // Fixed small delay for consistent experience
        }}
      >
        <SummaryCard
          variant="card"
          content="Consider your vehicle's age, mileage, intended use, and budget when selecting an engine type. For vehicles under 5 years old, new engines are often worth the investment. For older vehicles, reconditioned engines offer the best balance of reliability and cost."
        />
      </motion.div>
    </Container>
  );
};

export default EngineProsCons;
