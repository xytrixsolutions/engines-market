import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import { Check, X, Sparkles, DollarSign, Wrench } from "lucide-react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Accent from "@/components/Accent";

const ENGINE_TYPES = [
  {
    title: "New BMW Engines",
    icon: <Sparkles className="h-6 w-6" />,
    badge: "Premium",
    badgeVariant: "default" as const,
    pros: [
      "100% reliability with a factory warranty",
      "Best performance & longevity",
      "Latest technology and improvements",
      "No hidden issues or wear",
    ],
    cons: [
      "Higher cost",
      "Limited availability for older models",
      "Longer delivery times",
      "May be overkill for older vehicles",
    ],
  },
  {
    title: "Used BMW Engines",
    icon: <DollarSign className="h-6 w-6" />,
    badge: "Budget-Friendly",
    badgeVariant: "secondary" as const,
    pros: [
      "Cost-effective & widely available",
      "Good for quick replacements",
      "Immediate availability",
      "Suitable for older vehicles",
    ],
    cons: [
      "Potential hidden wear and tear",
      "Shorter lifespan than new or reconditioned engines",
      "Limited or no warranty",
      "Unknown maintenance history",
    ],
  },
  {
    title: "Reconditioned BMW Engines",
    icon: <Wrench className="h-6 w-6" />,
    badge: "Best Value",
    badgeVariant: "outline" as const,
    pros: [
      "Professionally rebuilt with new components",
      "More reliable than used engines",
      "Balanced cost vs. performance",
      "Often comes with warranty",
    ],
    cons: [
      "Slightly more expensive than used engines",
      "Quality varies by rebuilder",
      "May not include latest improvements",
      "Longer process than buying used",
    ],
  },
];

const EngineProsCons: React.FC = () => {
  return (
    <Container className="my-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <Heading>
          Pros & Cons of New, Used &<Accent>Reconditioned BMW Engines</Accent>
        </Heading>
        <Paragraph>
          Understanding the <strong>advantages and disadvantages</strong> of
          each engine type will help you make an{" "}
          <strong>informed decision</strong> based on your{" "}
          <strong>budget</strong>, <strong>vehicle age</strong>, and{" "}
          <strong>performance requirements</strong>.
        </Paragraph>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {ENGINE_TYPES.map((engineType, _) => (
          <Card
            key={engineType.title}
            className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-royal-blue">
                  {engineType.icon}
                  <CardTitle className="text-lg">{engineType.title}</CardTitle>
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
        ))}
      </div>

      {/* Bottom CTA/Info Section */}
      <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="py-6">
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold text-royal-blue">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Consider your vehicle&apos;s age, mileage, intended use, and
              budget when selecting an engine type. For vehicles under 5 years
              old, new engines are often worth the investment. For older
              vehicles, reconditioned engines offer the best balance of
              reliability and cost.
            </p>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EngineProsCons;
