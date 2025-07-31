import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/Container";
import {
  Zap,
  Wind,
  Volume2,
  Snowflake,
  TrendingUp,
  Gauge,
  Cog,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Accent from "@/components/Accent";
import GradientBorderWrapper from "@/components/GradientBorderWrapper";
import SummaryCard from "@/components/SummaryCard";

const PERFORMANCE_SECTIONS = [
  {
    id: "basic-enhancements",
    title: "Basic Enhancement Options",
    icon: <Zap className="h-5 w-5" />,
    level: "Beginner",
    upgrades: [
      {
        name: "ECU Remapping (Chip Tuning)",
        icon: <Cog className="h-4 w-4" />,
        description:
          "ECU remapping involves altering the software that controls the engine's functions to optimize performance. This can increase horsepower, torque, and fuel efficiency.",
        benefits:
          "Improved throttle response, increased power and torque, and better fuel economy.",
        considerations:
          "Ensure the remap is done by a reputable tuner to avoid potential engine damage.",
      },
      {
        name: "Cold Air Intakes",
        icon: <Wind className="h-4 w-4" />,
        description:
          "Replacing the stock air intake with a cold air intake system allows the engine to breathe cooler, denser air, which can improve combustion efficiency.",
        benefits: "Increased horsepower and torque, improved engine sound.",
        considerations:
          "Ensure the intake is properly sealed to prevent debris from entering the engine.",
      },
      {
        name: "Exhaust System Upgrades",
        icon: <Volume2 className="h-4 w-4" />,
        description:
          "Upgrading to a performance exhaust system can reduce backpressure and improve exhaust flow.",
        benefits:
          "Enhanced power output, improved exhaust note, potential weight reduction.",
        considerations:
          "Check local regulations regarding noise levels and emissions.",
      },
      {
        name: "Intercooler Upgrades",
        icon: <Snowflake className="h-4 w-4" />,
        description:
          "An upgraded intercooler can lower the temperature of the air entering the engine, which is particularly beneficial for turbocharged engines.",
        benefits:
          "Increased power and reliability, reduced risk of engine knock.",
        considerations:
          "Ensure the intercooler is compatible with your specific engine setup.",
      },
    ],
  },
  {
    id: "tuning-stages",
    title: "Tuning Upgrade: Stage 1-3",
    icon: <TrendingUp className="h-5 w-5" />,
    level: "Progressive",
    stages: [
      {
        stage: "Stage 1 Tuning",
        description:
          "Basic modifications that do not require any additional hardware changes. Typically includes ECU remapping and minor bolt-on parts like air filters and exhaust systems.",
        benefits:
          "Noticeable increase in power and torque, improved throttle response.",
        considerations:
          "Generally safe for daily driving with minimal impact on reliability.",
      },
      {
        stage: "Stage 2 Tuning",
        description:
          "More advanced modifications that may require supporting hardware changes. This can include upgraded intercoolers, downpipes, and more aggressive ECU tuning.",
        benefits:
          "Significant power gains, improved performance across the rev range.",
        considerations:
          "May require additional maintenance and monitoring to ensure reliability.",
      },
      {
        stage: "Stage 3 Tuning",
        description:
          "Extensive modifications that often involve internal engine upgrades such as forged pistons, upgraded turbochargers, and high-flow fuel systems.",
        benefits: "Maximum power output, track-ready performance.",
        considerations:
          "Can significantly impact reliability and fuel efficiency, often not suitable for daily driving.",
      },
    ],
  },
  {
    id: "turbo-upgrades",
    title: "Turbo Upgrades",
    icon: <Gauge className="h-5 w-5" />,
    level: "Advanced",
    content: {
      description:
        "Upgrading the turbocharger is one of the most effective ways to increase the power output of a BMW engine.",
      points: [
        {
          title: "Larger Turbochargers",
          description:
            "Installing a larger turbo can increase the amount of air forced into the engine, resulting in higher power and torque.",
        },
        {
          title: "Twin-Turbo Systems",
          description:
            "For engines that already have a single turbo, upgrading to a twin-turbo setup can provide even greater performance gains.",
        },
        {
          title: "Supporting Modifications",
          description:
            "Turbo upgrades often require additional modifications such as upgraded intercoolers, fuel injectors, and exhaust systems to handle the increased airflow and power.",
        },
      ],
    },
  },
  {
    id: "engine-internals",
    title: "Engine Internals Reinforcements",
    icon: <Cog className="h-5 w-5" />,
    level: "Expert",
    content: {
      description:
        "For those seeking extreme performance, reinforcing the internal components of the engine is essential.",
      points: [
        {
          title: "Forged Pistons and Rods",
          description:
            "Stronger than stock components, forged pistons and rods can handle higher power levels and boost pressures.",
        },
        {
          title: "Upgraded Bearings",
          description:
            "High-performance bearings can reduce friction and improve durability under extreme conditions.",
        },
        {
          title: "Strengthened Crankshafts",
          description:
            "A stronger crankshaft can withstand the increased forces generated by high-power engines.",
        },
      ],
    },
  },
  {
    id: "reliability-impact",
    title: "Impact on Reliability & Fuel Efficiency",
    icon: <AlertTriangle className="h-5 w-5" />,
    level: "Important",
    content: {
      description:
        "While performance upgrades can significantly enhance the driving experience, they can also impact the reliability and fuel efficiency of the engine.",
      points: [
        {
          title: "Reliability",
          description:
            "Higher power levels can put additional stress on engine components, potentially leading to increased wear and the need for more frequent maintenance. It's crucial to use high-quality parts and have the modifications performed by experienced professionals.",
        },
        {
          title: "Fuel Efficiency",
          description:
            "Performance upgrades often result in increased fuel consumption, especially under aggressive driving conditions. However, some tuning options, like ECU remapping, can improve fuel efficiency during normal driving by optimizing the engine's performance.",
        },
      ],
    },
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "secondary";
    case "Progressive":
      return "default";
    case "Advanced":
      return "outline";
    case "Expert":
      return "destructive";
    case "Important":
      return "default";
    default:
      return "default";
  }
};

const PerformanceUpgrades: React.FC = () => {
  return (
    <Container dark className="my-16">
      <div className="max-w-6xl mx-auto text-center space-y-4 mb-12 text-charcoal-gray-muted">
        <Heading className="text-charcoal-gray-muted">
          Performance Upgrades & Modifications for<Accent>BMW Engines</Accent>
        </Heading>
        <Paragraph className="mb-1">
          Common <strong>Tuning Options</strong> for{" "}
          <strong>Performance Enthusiasts</strong>
        </Paragraph>

        <Paragraph className="text-base">
          <strong>BMW engines</strong> are highly regarded for their
          <strong> performance potential</strong>, and there are numerous
          <strong> tuning options</strong> available for enthusiasts looking to
          enhance their vehicle&apos;s <strong>power</strong> and{" "}
          <strong>responsiveness</strong>. Here are some of the most popular
          tuning options:
        </Paragraph>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="basic-enhancements"
        className="space-y-4"
      >
        {PERFORMANCE_SECTIONS.map((section) => (
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
                  variant={getLevelColor(section.level)}
                  className="ml-auto mr-4"
                >
                  {section.level}
                </Badge>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-4 transition-all duration-300">
                <div className="space-y-6">
                  {/* Basic Enhancement Options */}
                  {section.upgrades && (
                    <div className="grid gap-4 md:grid-cols-2">
                      {section.upgrades.map((upgrade, idx) => (
                        <Card
                          key={idx}
                          className="border-l-4 border-l-blue-500"
                        >
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                              {upgrade.icon}
                              {upgrade.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                              {upgrade.description}
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-green-700 text-sm">
                                    Benefits:
                                  </span>
                                  <span className="text-sm">
                                    {upgrade.benefits}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-amber-700 text-sm">
                                    Considerations:
                                  </span>
                                  <span className="text-sm">
                                    {upgrade.considerations}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                  {/* Tuning Stages */}
                  {section.stages && (
                    <div className="space-y-4">
                      {section.stages.map((stage, idx) => (
                        <Card
                          key={idx}
                          className="border-l-4 border-l-blue-500"
                        >
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                              {stage.stage}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                              {stage.description}
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-green-700 text-sm">
                                    Benefits:
                                  </span>
                                  <span className="text-sm">
                                    {stage.benefits}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-amber-700 text-sm">
                                    Considerations:
                                  </span>
                                  <span className="text-sm">
                                    {stage.considerations}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                  {/* Turbo Upgrades, Engine Internals, Reliability Impact */}
                  {section.content && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {section.content.description}
                      </p>
                      {section.content.points && (
                        <ul className="list-disc pl-6 space-y-2">
                          {section.content.points.map((point, idx) => (
                            <li key={idx}>
                              <span className="font-semibold">
                                {point.title}:
                              </span>
                              {point.description}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </GradientBorderWrapper>
        ))}
      </Accordion>

      {/* Bottom Summary Card */}
      <SummaryCard
        variant="performance"
        title="Performance Enhancement Summary"
        content="By carefully selecting and implementing performance upgrades, you can transform your BMW into a high-performance machine while maintaining a balance between power, reliability, and efficiency. Always consult with experienced professionals and use high-quality components for the best results."
      />
    </Container>
  );
};

export default PerformanceUpgrades;
