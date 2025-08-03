import {
  AlertTriangle,
  Clock,
  Cog,
  DollarSign,
  Droplets,
  Fuel,
  Snowflake,
  Sparkles,
  Thermometer,
  TrendingUp,
  Volume2,
  Wind,
  Wrench,
  Zap,
  Gauge,
  AlarmSmoke as Smoke,
} from "lucide-react";
import { ReactNode } from "react";

export interface Data {
  brandName: string;
  carImages: string[];
  carModelNames: string[];
  section0Image: {
    img: string;
    alt: string;
  };
  section1Image: {
    img: string;
    alt: string;
  };
  tableOneBottomParagraph: string;
  tableFourBottomParagraph: string;
  section4: {
    mainParagraph?: string;
    EngineProblems: Array<{
      title: string;
      icon?: ReactNode;
      problem: string;
      solution: string;
      prevention: string;
      affectedModelsAndYears?: string;
      severity?: "Common" | "Moderate" | "Critical";
    }>;
    engineReliabilityAndPerformance?: Array<{
      reliability: Array<{
        heading: string;
        paragraph: string;
      }>;
      performance: Array<{
        heading: string;
        paragraph: string;
      }>;
    }>;
    conclusion: string;
  };
  engineData: {
    models: Array<{
      model: string;
      model_name: string;
      engine_options: string;
    }>;
    engine_codes: Array<{
      engineCode: string;
      engineSize: number;
      fuelType: string;
      turbo: boolean;
      horsepower: string | number;
      torque: number | string;
      productionYears: string;
    }>;
    models_engines: Array<{
      engineCode: string;
      compatibleModels: string[];
    }>;
    replacement_costs: Array<{
      image: string;
      model: string;
      engineType: string;
      estimatedCost: string;
    }>;
  };
  section7: Array<{
    title: string;
    icon: ReactNode;
    badge: string;
    badgeVariant: "default" | "secondary" | "outline";
    pros: string[];
    cons: string[];
  }>;
  section8: {
    EngineProblems: Array<{
      id: string; // Add this
      title: string;
      icon?: ReactNode;
      severity?: "Common" | "Moderate" | "Critical";
      data: Array<{
        heading: string;
        paragraph?: string;
        points?: string[];
      }>;
      tips?: Array<{
        title: string;
        description: string;
      }>;
    }>;
    maintenanceTips?: Array<{
      icon: string;
      iconColor: string;
      border: string;
      bg: string;
      title: string;
      titleColor: string;
      text: string;
      textColor: string;
    }>;
    summary?: {
      variant: string;
      title: string;
      content: string;
    };
  };
  section9?: {
    performanceUpgrades: Array<{
      id: string;
      title: string;
      icon?: ReactNode;
      level: "Beginner" | "Progressive" | "Advanced" | "Expert" | "Important";
      upgrades?: Array<{
        name: string;
        icon?: ReactNode;
        description: string;
        benefits: string;
        considerations: string;
      }>;
      stages?: Array<{
        stage: string;
        description: string;
        benefits: string;
        considerations: string;
      }>;
      content?: {
        description: string;
        points?: Array<{
          title: string;
          description: string;
        }>;
      };
    }>;
    summary?: {
      variant: string;
      title: string;
      content: string;
    };
  };

  faqs: Array<{
    question: string;
    answer?: string;
    answerList?: string[];
  }>;
}

export const data: Record<string, Data> = {
  bmw: {
    brandName: "BMW",
    carImages: [
      "/banners/banner-1.webp",
      "/banners/banner-2.webp",
      "/banners/banner-3.webp",
      "/banners/banner-4.webp",
      "/banners/banner-5.webp",
    ],
    carModelNames: [
      "BMW X5",
      "Audi A6",
      "Mercedes C-Class",
      "Range Rover Evoque",
      "Volkswagen Golf",
    ],
    section0Image: {
      img: "/bmw/bmw.png",
      alt: "BMW front view",
    },
    section1Image: {
      img: "/bmw/engine-guide.png",
      alt: "BMW rear view",
    },
    tableOneBottomParagraph:
      "This table includes some of the most popular and in-demand BMW models, focusing on their diverse engine options. If you need more detailed information on any specific model, feel free to Contact Us!",
    tableFourBottomParagraph:
      "These estimates provide a general idea of the costs involved in replacing a BMW engine. Prices can vary based on location, availability of parts, and the specific service provider.",
    section4: {
      mainParagraph:
        "BMW engines are renowned for their performance and engineering excellence, but like any complex machinery, they can encounter issues. Here are some of the most common problems found in BMW engines, along with solutions and preventive measures:",
      EngineProblems: [
        {
          title: "Oil Leaks",
          icon: <Droplets className="h-5 w-5" />,
          problem:
            "Oil leaks are a prevalent issue in many BMW models, often caused by worn or damaged gaskets and seals. Common areas for oil leaks include the valve cover gasket, oil filter housing gasket, and oil pan gasket.",
          solution:
            "Check the coolant level and inspect the cooling system for leaks. Ensure that the radiator and water pump are functioning correctly and replace any faulty components. If the engine consistently overheats, have a professional inspect the thermostat and cooling system.",
          prevention:
            "Regularly maintain the cooling system, including flushing the coolant and replacing the thermostat and water pump as needed.",
          severity: "Common",
        },
        {
          title: "Overheating Issues",
          icon: <Thermometer className="h-5 w-5" />,
          problem:
            "Engine overheating can cause significant damage to BMW engines. Common causes include a faulty thermostat, a failing water pump, or a leaking radiator.",
          solution:
            "Immediately stop driving if temperature gauge enters red zone. Replace entire cooling system every 60,000 miles (tank, hoses, pump, thermostat). Upgrade to metal impeller water pumps when possible. Use BMW-approved coolant mixed 50/50 with distilled water. Bleed cooling system properly after any service.",
          prevention:
            "Annual cooling system inspections. Replace coolant every 2 years. Monitor for early warning signs (slow leaks, faint coolant smell). Keep overflow tank at proper level. Consider auxiliary temperature gauge for accurate readings.",
          severity: "Critical",
        },
        {
          title: "Timing Chain Problems",
          icon: <Clock className="h-5 w-5" />,
          problem:
            "Timing chain issues are common in some BMW engines, particularly the N20 and N26 models. A failing timing chain can lead to severe engine damage.",
          solution:
            "Listen for unusual noises from the engine, such as rattling or ticking sounds, which may indicate a timing chain issue. If detected, have the timing chain inspected and replaced by a professional.",
          prevention:
            "Follow the manufacturer's maintenance schedule and replace the timing chain and related components at the recommended intervals.",
          severity: "Critical",
        },
        {
          title: "Misfiring Engines",
          icon: <Zap className="h-5 w-5" />,
          problem:
            "Engine misfires can result from faulty spark plugs, ignition coils, or fuel injectors. Misfires can lead to poor engine performance and increased emissions.",
          solution:
            "Diagnose the issue using an OBD-II scanner to identify the specific problem. Replace faulty spark plugs, ignition coils, or fuel injectors as needed.",
          prevention:
            "Regularly replace spark plugs and ignition coils according to the manufacturer's recommendations. Use high-quality fuel to prevent injector clogging.",
          severity: "Moderate",
        },
        {
          title: "HPFP Failure (High-Pressure Fuel Pump)",
          icon: <Fuel className="h-5 w-5" />,
          problem:
            "The high-pressure fuel pump (HPFP) in some BMW models, particularly those with turbocharged engines like the N54, can fail, leading to poor engine performance and starting issues.",
          solution:
            "If you experience symptoms such as long cranking times or loss of power, have the HPFP inspected and replaced if necessary.",
          prevention:
            "Use high-quality fuel and follow the recommended maintenance schedule to reduce the risk of HPFP failure.",
          severity: "Critical",
        },
      ],
      engineReliabilityAndPerformance: [
        {
          reliability: [
            {
              heading: "Build Quality and Longevity",
              paragraph:
                "Modern BMW engines offer excellent power density but require meticulous maintenance. With proper care, most can reach 150,000+ miles, though some components (cooling systems, gaskets) will need periodic replacement. Turbocharged engines generally have more potential failure points than naturally aspirated ones.",
            },
            {
              heading: "Maintenance Requirements",
              paragraph:
                "BMWs demand strict adherence to service intervals. Critical items include:\n- Oil changes every 5,000-7,500 miles with approved synthetic\n- Cooling system refreshes every 60,000 miles\n- Spark plugs every 30,000-50,000 miles\n- Transmission fluid every 60,000 miles\nNeglecting these dramatically increases failure risks.",
            },
          ],
          performance: [
            {
              heading: "Power Delivery",
              paragraph:
                "BMW engines excel at linear power delivery and immediate throttle response. Turbocharged models offer impressive low-end torque while maintaining high-RPM power. The VANOS variable valve timing system provides excellent flexibility across the rev range.",
            },
            {
              heading: "Tuning Potential",
              paragraph:
                "Many BMW engines respond exceptionally well to tuning. The N54 twin-turbo can often gain 100+ hp with just software changes. Even naturally aspirated engines like the N52 see meaningful gains from proper intake/exhaust modifications and ECU tuning.",
            },
          ],
        },
      ],
      conclusion:
        "While BMW engines demand more attention than some competitors, their performance and driving experience justify the maintenance requirements for enthusiasts. By understanding these common failure points and addressing them proactively, owners can enjoy BMW's legendary driving dynamics while minimizing unexpected repairs. Always use quality parts and fluids, and consider specialized BMW mechanics for complex issues.",
    },
    engineData: {
      models: [
        {
          model: "/bmw/bmw-1-series.png",
          model_name: "BMW 1 Series",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-2-series.png",
          model_name: "BMW 2 Series",
          engine_options: "2.0L Turbo Petrol, 3.0L Diesel",
        },
        {
          model: "/bmw/bmw-3-series.png",
          model_name: "BMW 3 Series",
          engine_options: "2.0L Petrol, 3.0L Diesel, 2.0L Hybrid",
        },
        {
          model: "/bmw/bmw-4-series.png",
          model_name: "BMW 4 Series",
          engine_options: "2.0L Turbo Petrol, 3.0L V6 Diesel",
        },
        {
          model: "/bmw/bmw-5-series.png",
          model_name: "BMW 5 Series",
          engine_options: "2.0L Petrol, 3.0L Diesel, 3.0L Hybrid",
        },
        {
          model: "/bmw/bmw-6-series.png",
          model_name: "BMW 6 Series",
          engine_options: "3.0L Diesel, 4.4L V8 Petrol",
        },
        {
          model: "/bmw/bmw-7-series.png",
          model_name: "BMW 7 Series",
          engine_options: "3.0L Petrol, 4.4L V8, 3.0L Hybrid",
        },
        {
          model: "/bmw/bmw-x1.png",
          model_name: "BMW X1",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x2.png",
          model_name: "BMW X2",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x3.png",
          model_name: "BMW X3",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x4.png",
          model_name: "BMW X4",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x5.png",
          model_name: "BMW X5",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x6.png",
          model_name: "BMW X6",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/BMW X7.png",
          model_name: "BMW X7",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-8-series.png",
          model_name: "BMW 8 Series",
          engine_options: "3.0L Petrol, 4.4L V8",
        },
        {
          model: "/bmw/bmw-z-series.png",
          model_name: "BMW Z Series",
          engine_options: "2.0L Turbo Petrol, 3.0L Twin-Turbo Petrol",
        },
        {
          model: "/bmw/bmw-z4.png",
          model_name: "BMW Z4",
          engine_options: "2.0L Petrol, 3.0L Petrol",
        },
        {
          model: "/bmw/bmw-i-series.png",
          model_name: "BMW i Series",
          engine_options: "Fully Electric, Plug-in Hybrid",
        },
        {
          model: "/bmw/bmw-i3.png",
          model_name: "BMW i3",
          engine_options: "Electric",
        },
        {
          model: "/bmw/bmw-i8.png",
          model_name: "BMW i8",
          engine_options: "1.5L Hybrid",
        },
        {
          model: "/bmw/bmw-m2.png",
          model_name: "BMW M2",
          engine_options: "3.0L Petrol",
        },
        {
          model: "/bmw/bmw-m3.png",
          model_name: "BMW M3",
          engine_options: "3.0L Petrol",
        },
        {
          model: "/bmw/bmw-m4.png",
          model_name: "BMW M4",
          engine_options: "3.0L Petrol",
        },
        {
          model: "/bmw/bmw-m5.png",
          model_name: "BMW M5",
          engine_options: "4.4L V8",
        },
        {
          model: "/bmw/bmw-m8.png",
          model_name: "BMW M8",
          engine_options: "4.4L V8",
        },
      ],
      engine_codes: [
        {
          engineCode: "B38 A15",
          engineSize: 1.5,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "134-136",
          torque: 220,
          productionYears: "2013-present",
        },
        {
          engineCode: "B47 D20",
          engineSize: 2,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 190,
          torque: 400,
          productionYears: "2014-present",
        },
        {
          engineCode: "B47 D20 A",
          engineSize: 2,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 190,
          torque: 400,
          productionYears: "2014-present",
        },
        {
          engineCode: "B47 D20 B",
          engineSize: 2,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 231,
          torque: 500,
          productionYears: "2014-present",
        },
        {
          engineCode: "B48 A20",
          engineSize: 2,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "192-306",
          torque: "280-450",
          productionYears: "2014-present",
        },
        {
          engineCode: "B48 B20",
          engineSize: 2,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "192-302",
          torque: "280-450",
          productionYears: "2014-present",
        },
        {
          engineCode: "B57 D30",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: "261-400",
          torque: "620-760",
          productionYears: "2015-present",
        },
        {
          engineCode: "B57 D30 O0",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 265,
          torque: 620,
          productionYears: "2015-present",
        },
        {
          engineCode: "B57 D30 T0",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 320,
          torque: 680,
          productionYears: "2015-present",
        },
        {
          engineCode: "B57 D30 T1",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 400,
          torque: 760,
          productionYears: "2016-present",
        },
        {
          engineCode: "B58 B30",
          engineSize: 3,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "335-382",
          torque: "500-550",
          productionYears: "2015-present",
        },
      ],
      models_engines: [
        {
          engineCode: "B37 D15",
          compatibleModels: ["BMW 1 Series (F20)", "BMW 2 Series (F22)"],
        },
        {
          engineCode: "B38 A15",
          compatibleModels: ["BMW 2 Series (F45)", "BMW i8 (I12)"],
        },
        {
          engineCode: "B47 D20",
          compatibleModels: ["BMW 3 Series (G20)", "BMW X3 (G01)"],
        },
        {
          engineCode: "B48 B20",
          compatibleModels: ["BMW 3 Series (G20)", "BMW X3 (G01)", "BMW 330i"],
        },
        {
          engineCode: "B57 D30",
          compatibleModels: [
            "BMW 5 Series (G30)",
            "BMW X5 (G05)",
            "BMW 540d",
            "BMW X7 xDrive40d",
          ],
        },
        {
          engineCode: "B58 B30",
          compatibleModels: [
            "BMW 3 Series (G20)",
            "BMW Z4 (G29)",
            "BMW 340i",
            "BMW X5 xDrive40i",
          ],
        },
      ],
      replacement_costs: [
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 1 Series",
          engineType: "1.5L Petrol",
          estimatedCost: "£2,500 - £4,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 1 Series",
          engineType: "2.0L Diesel",
          estimatedCost: "£3,000 - £5,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 2 Series",
          engineType: "1.5L Petrol",
          estimatedCost: "£2,500 - £4,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 2 Series",
          engineType: "2.0L Diesel",
          estimatedCost: "£3,500 - £5,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 3 Series",
          engineType: "2.0L Petrol",
          estimatedCost: "£3,000 - £5,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 3 Series",
          engineType: "3.0L Diesel",
          estimatedCost: "£4,000 - £6,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 4 Series",
          engineType: "2.0L Petrol",
          estimatedCost: "£3,500 - £5,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 4 Series",
          engineType: "3.0L Diesel",
          estimatedCost: "£4,500 - £7,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 5 Series",
          engineType: "2.0L Petrol",
          estimatedCost: "£3,500 - £5,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 5 Series",
          engineType: "3.0L Diesel",
          estimatedCost: "£4,500 - £7,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 6 Series",
          engineType: "3.0L Petrol",
          estimatedCost: "£5,000 - £8,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 6 Series",
          engineType: "4.4L V8",
          estimatedCost: "£7,000 - £12,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 7 Series",
          engineType: "3.0L Petrol",
          estimatedCost: "£5,000 - £8,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 7 Series",
          engineType: "4.4L V8",
          estimatedCost: "£7,000 - £12,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW X1",
          engineType: "1.5L Petrol",
          estimatedCost: "£2,500 - £4,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW X1",
          engineType: "2.0L Diesel",
          estimatedCost: "£3,000 - £5,000",
        },
      ],
    },
    section7: [
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
    ],

    section8: {
      EngineProblems: [
        {
          id: "check-engine-light-issues",
          title: "Check Engine Light Issues",
          icon: <AlertTriangle className="h-5 w-5" />,
          severity: "Common",
          data: [
            {
              heading: "Diagnose Promptly",
              paragraph:
                "When the check engine light comes on, use an OBD-II scanner to diagnose the issue. Common causes include faulty sensors, emission control problems, or minor issues like a loose gas cap.",
            },
            {
              heading: "Regular Maintenance",
              paragraph:
                "Ensure regular maintenance checks to catch potential issues early. This includes checking and replacing faulty sensors and addressing any emission control system problems.",
            },
          ],
        },
        {
          id: "power-loss-and-turbo-failures",
          title: "Power Loss & Turbo Failures",
          icon: <Gauge className="h-5 w-5" />,
          severity: "Critical",
          data: [
            {
              heading: "Inspect Turbocharger",
              paragraph:
                "Regularly inspect the turbocharger for signs of wear or damage. Turbo failures can lead to significant power loss.",
            },
            {
              heading: "Clean Air Filters",
              paragraph:
                "Ensure air filters are clean and replaced regularly to prevent debris from damaging the turbocharger and affecting engine performance.",
            },
            {
              heading: "Check Fuel System",
              paragraph:
                "Regularly check the fuel system for blockages or leaks that could lead to power loss.",
            },
          ],
        },
        {
          id: "excessive-smoke-and-oil-leaks",
          title: "Excessive Smoke & Oil Leaks",
          icon: <Smoke className="h-5 w-5" />,
          severity: "Moderate",
          data: [
            {
              heading: "Monitor Oil Levels",
              paragraph:
                "Keep an eye on oil levels and top up as necessary. Low oil levels can cause excessive smoke and indicate potential leaks.",
            },
            {
              heading: "Inspect Gaskets and Seals",
              paragraph:
                "Regularly inspect gaskets and seals for wear and tear. Common areas for oil leaks include the valve cover gasket, oil pan gasket, and timing cover.",
            },
            {
              heading: "Address Leaks Promptly",
              paragraph:
                "If you notice oil leaks, address them promptly to prevent further engine damage.",
            },
          ],
        },
      ],
      maintenanceTips: [
        {
          icon: "Lightbulb",
          iconColor: "text-blue-600",
          border: "border-blue-200",
          bg: "bg-blue-50",
          title: "Regular Inspections",
          titleColor: "text-blue-800",
          text: "Check your engine monthly for early problem detection",
          textColor: "text-blue-700",
        },
        {
          icon: "CheckCircle",
          iconColor: "text-green-600",
          border: "border-green-200",
          bg: "bg-green-50",
          title: "Preventive Maintenance",
          titleColor: "text-green-800",
          text: "Follow BMW's recommended service schedule",
          textColor: "text-green-700",
        },
        {
          icon: "AlertTriangle",
          iconColor: "text-orange-600",
          border: "border-orange-200",
          bg: "bg-orange-50",
          title: "Act Quickly",
          titleColor: "text-orange-800",
          text: "Address warning signs immediately to prevent damage",
          textColor: "text-orange-700",
        },
      ],
      summary: {
        variant: "green",
        title: "Key Takeaway",
        content:
          "By following these troubleshooting tips and maintaining regular engine checks, you can help ensure your BMW engine remains in top condition, prolonging its life and performance. Early detection and prompt action are crucial for preventing minor issues from becoming major repairs.",
      },
    },
    section9: {
      performanceUpgrades: [
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
              benefits:
                "Increased horsepower and torque, improved engine sound.",
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
      ],
      summary: {
        variant: "performance",
        title: "Performance Enhancement Summary",
        content:
          "By carefully selecting and implementing performance upgrades, you can transform your BMW into a high-performance machine while maintaining a balance between power, reliability, and efficiency. Always consult with experienced professionals and use high-quality components for the best results.",
      },
    },
    faqs: [
      {
        question: "What is EnginesMarket.co.uk?",
        answer:
          "EnginesMarket.co.uk is a price comparison website specializing in providing competitive quotes for new, used, and reconditioned BMW engines from multiple trusted sellers.",
      },
      {
        question: "How does EnginesMarket.co.uk work?",
        answer:
          "Simply enter your BMW model and engine requirements on our platform, and we will connect you with multiple sellers offering the best prices and availability. You can compare quotes and choose the best option for your needs.",
      },
      {
        question:
          "Why should I choose EnginesMarket.co.uk for my BMW engine replacement?",
        answer:
          "EnginesMarket.co.uk offers a wide range of BMW engines at unbeatable prices. Our platform saves you time and money by providing competitive quotes from multiple sellers, ensuring you get a high-quality, reliable engine.",
      },
      {
        question:
          "Do you offer warranties on the engines listed on EnginesMarket.co.uk?",
        answer:
          "Yes, many of the engines listed on our platform come with warranties. The warranty details vary depending on the seller and the type of engine (new, used, or reconditioned). Be sure to check the warranty information provided by the seller.",
      },
      {
        question:
          "How can I request a quote for a BMW engine on EnginesMarket.co.uk?",
        answer:
          'To request a quote, simply visit our website, enter your BMW model and engine specifications, and click on the "Request a Quote" button. You will receive multiple quotes from trusted sellers, allowing you to compare and choose the best option.',
      },
      {
        question: "What are the most common BMW engine problems?",
        answerList: [
          "Oil leaks",
          "Overheating issues",
          "Timing chain problems",
          "Misfiring engines",
          "High-pressure fuel pump (HPFP) failures",
        ],
      },
      {
        question: "Which BMW engines are known for their reliability?",
        answer:
          "Some of the most reliable BMW engines include the M54, N52, and B58 engines.",
      },
      {
        question: "What is the best BMW engine for performance?",
        answer:
          "The S55 and N54 engines are highly regarded for their performance and tuning potential.",
      },
      {
        question: "How often should I service my BMW engine?",
        answer:
          "It is recommended to service your BMW engine every 10,000 to 15,000 miles or once a year, whichever comes first. Regular maintenance includes oil changes, filter replacements, and inspections of key components.",
      },
      {
        question: "Can I upgrade my BMW engine for better performance?",
        answer:
          "Yes, common performance upgrades include ECU remapping, cold air intakes, exhaust system upgrades, intercooler upgrades, and turbocharger enhancements.",
      },
      {
        question:
          "What is the difference between a new, used, and reconditioned BMW engine?",
        answer:
          "New engines offer the best performance and come with a warranty but are the most expensive. Used engines are more affordable but may have wear and tear. Reconditioned engines are rebuilt with new or refurbished parts, offering a reliable and cost-effective middle ground.",
      },
      {
        question: "How can I prevent common BMW engine problems?",
        answer:
          "Regular maintenance, using high-quality oil and parts, and addressing issues promptly can help prevent common BMW engine problems.",
      },
      {
        question: "What are the benefits of a turbocharged BMW engine?",
        answer:
          "Turbocharged BMW engines offer increased power and torque, improved fuel efficiency, and better overall performance compared to naturally aspirated engines.",
      },
      {
        question: "Which BMW models are compatible with the N47 engine?",
        answer:
          "The N47 engine is compatible with models such as the BMW 1 Series (E81/E87) and BMW 3 Series (E90/E91).",
      },
      {
        question: "What should I look for when buying a used BMW engine?",
        answerList: [
          "Engine mileage",
          "Maintenance history",
          "Overall condition",
          "Reputation of the seller",
          "Warranty availability",
        ],
      },
      {
        question: "How do I know if my BMW engine needs a rebuild?",
        answer:
          "Signs that your BMW engine may need a rebuild include excessive oil consumption, loss of power, unusual noises, and poor fuel efficiency.",
      },
      {
        question: "What is the lifespan of a BMW engine?",
        answer:
          "With proper maintenance, a BMW engine can last well over 200,000 miles.",
      },
      {
        question: "Are BMW diesel engines reliable?",
        answer:
          "BMW diesel engines, such as the M57, are known for their reliability and efficiency.",
      },
      {
        question: "What is the best BMW engine for fuel efficiency?",
        answer:
          "The N52 and B48 engines are known for their excellent fuel efficiency while still providing good performance.",
      },
      {
        question:
          "Can I install a BMW engine from a different model in my car?",
        answer:
          "Engine swaps are possible, but compatibility depends on the engine code and model. It's important to consult with a professional to ensure a successful swap.",
      },
      {
        question: "What are the most reliable BMW engines?",
        answer:
          "The B58 3.0L turbocharged petrol engine and the N57 3.0L diesel engine are widely regarded as the most reliable BMW engines due to their durability, performance, and fuel efficiency.",
      },
      {
        question: "How much does it cost to replace a BMW engine?",
        answer:
          "The cost of replacing a BMW engine ranges from £1,500 to £10,000, depending on the engine type, model, and whether you choose a new, used, or reconditioned engine.",
      },
      {
        question: "Are reconditioned BMW engines reliable?",
        answer:
          "Yes, reconditioned BMW engines are thoroughly rebuilt to meet OEM standards, making them a cost-effective and reliable option for engine replacement.",
      },
      {
        question:
          "Can I replace my BMW engine with a different model's engine?",
        answer:
          "Engine compatibility depends on the model and engine type. Use our BMW engine compatibility chart to find the right engine for your vehicle.",
      },
      {
        question: "What is the best BMW engine for performance?",
        answer:
          "The S63 4.4L twin-turbo V8 engine, found in the BMW M5 and X5 M, is one of the best engines for performance, offering up to 625 HP and 800 Nm of torque.",
      },
      {
        question: "How do I know if my BMW engine needs replacement?",
        answerList: [
          "Excessive smoke",
          "Knocking sounds",
          "Loss of power",
          "Frequent overheating",
          "Diagnostic check confirming engine failure",
        ],
      },
      {
        question: "What is the most fuel-efficient BMW engine?",
        answer:
          "The B47 2.0L diesel engine is one of the most fuel-efficient BMW engines, offering excellent mileage and low emissions.",
      },
      {
        question: "What is the best BMW engine for towing?",
        answer:
          "The B57 3.0L diesel engine, found in models like the X5 and X7, is ideal for towing due to its high torque output and durability.",
      },
      {
        question: "How do I find the right engine for my BMW model?",
        answer:
          "Use our BMW engine compatibility chart or contact our experts at EnginesMarket.co.uk to find the perfect engine for your BMW.",
      },
      {
        question: "What is the most powerful BMW engine ever made?",
        answer:
          "The S63 4.4L twin-turbo V8 engine in the BMW M5 CS produces 635 HP, making it the most powerful BMW engine to date.",
      },
      {
        question: "What is the cost of a reconditioned BMW engine?",
        answer:
          "Reconditioned BMW engines typically cost between £2,000 and £6,000, depending on the engine type and model.",
      },
      {
        question: "Can I install a used BMW engine myself?",
        answer:
          "While it's possible, installing a used BMW engine requires specialized tools and expertise. We recommend hiring a professional mechanic for the job.",
      },
      {
        question: "What is the best BMW engine for a daily driver?",
        answer:
          "The B48 2.0L turbo petrol engine is an excellent choice for daily driving, offering a balance of performance, efficiency, and reliability.",
      },
      {
        question: "Where can I buy a BMW engine at the best price?",
        answer:
          "At EnginesMarket.co.uk, we connect you with multiple trusted sellers to ensure you get the best price for your BMW engine replacement.",
      },
    ],
  },
  audi: {
    brandName: "Audi",
    carImages: [
      "/banners/banner-1.webp",
      "/banners/banner-2.webp",
      "/banners/banner-3.webp",
      "/banners/banner-4.webp",
      "/banners/banner-5.webp",
    ],
    carModelNames: [
      "BMW X5",
      "Audi A6",
      "Mercedes C-Class",
      "Range Rover Evoque",
      "Volkswagen Golf",
    ],
    section0Image: {
      img: "/bmw/bmw.png",
      alt: "BMW front view",
    },
    section1Image: {
      img: "/bmw/engine-guide.png",
      alt: "BMW rear view",
    },
    tableOneBottomParagraph:
      "This table includes some of the most popular and in-demand BMW models, focusing on their diverse engine options. If you need more detailed information on any specific model, feel free to Contact Us!",
    tableFourBottomParagraph:
      "These estimates provide a general idea of the costs involved in replacing a BMW engine. Prices can vary based on location, availability of parts, and the specific service provider.",
    section4: {
      mainParagraph:
        "BMW engines are renowned for their performance and engineering excellence, but like any complex machinery, they can encounter issues. Here are some of the most common problems found in BMW engines, along with solutions and preventive measures:",
      EngineProblems: [
        {
          title: "Oil Leaks",
          icon: <Droplets className="h-5 w-5" />,
          problem:
            "Oil leaks are a prevalent issue in many BMW models, often caused by worn or damaged gaskets and seals. Common areas for oil leaks include the valve cover gasket, oil filter housing gasket, and oil pan gasket.",
          solution:
            "Check the coolant level and inspect the cooling system for leaks. Ensure that the radiator and water pump are functioning correctly and replace any faulty components. If the engine consistently overheats, have a professional inspect the thermostat and cooling system.",
          prevention:
            "Regularly maintain the cooling system, including flushing the coolant and replacing the thermostat and water pump as needed.",
          severity: "Common",
        },
        {
          title: "Overheating Issues",
          icon: <Thermometer className="h-5 w-5" />,
          problem:
            "Engine overheating can cause significant damage to BMW engines. Common causes include a faulty thermostat, a failing water pump, or a leaking radiator.",
          solution:
            "Immediately stop driving if temperature gauge enters red zone. Replace entire cooling system every 60,000 miles (tank, hoses, pump, thermostat). Upgrade to metal impeller water pumps when possible. Use BMW-approved coolant mixed 50/50 with distilled water. Bleed cooling system properly after any service.",
          prevention:
            "Annual cooling system inspections. Replace coolant every 2 years. Monitor for early warning signs (slow leaks, faint coolant smell). Keep overflow tank at proper level. Consider auxiliary temperature gauge for accurate readings.",
          severity: "Critical",
        },
        {
          title: "Timing Chain Problems",
          icon: <Clock className="h-5 w-5" />,
          problem:
            "Timing chain issues are common in some BMW engines, particularly the N20 and N26 models. A failing timing chain can lead to severe engine damage.",
          solution:
            "Listen for unusual noises from the engine, such as rattling or ticking sounds, which may indicate a timing chain issue. If detected, have the timing chain inspected and replaced by a professional.",
          prevention:
            "Follow the manufacturer's maintenance schedule and replace the timing chain and related components at the recommended intervals.",
          severity: "Critical",
        },
        {
          title: "Misfiring Engines",
          icon: <Zap className="h-5 w-5" />,
          problem:
            "Engine misfires can result from faulty spark plugs, ignition coils, or fuel injectors. Misfires can lead to poor engine performance and increased emissions.",
          solution:
            "Diagnose the issue using an OBD-II scanner to identify the specific problem. Replace faulty spark plugs, ignition coils, or fuel injectors as needed.",
          prevention:
            "Regularly replace spark plugs and ignition coils according to the manufacturer's recommendations. Use high-quality fuel to prevent injector clogging.",
          severity: "Moderate",
        },
        {
          title: "HPFP Failure (High-Pressure Fuel Pump)",
          icon: <Fuel className="h-5 w-5" />,
          problem:
            "The high-pressure fuel pump (HPFP) in some BMW models, particularly those with turbocharged engines like the N54, can fail, leading to poor engine performance and starting issues.",
          solution:
            "If you experience symptoms such as long cranking times or loss of power, have the HPFP inspected and replaced if necessary.",
          prevention:
            "Use high-quality fuel and follow the recommended maintenance schedule to reduce the risk of HPFP failure.",
          severity: "Critical",
        },
      ],
      engineReliabilityAndPerformance: [
        {
          reliability: [
            {
              heading: "Build Quality and Longevity",
              paragraph:
                "Modern BMW engines offer excellent power density but require meticulous maintenance. With proper care, most can reach 150,000+ miles, though some components (cooling systems, gaskets) will need periodic replacement. Turbocharged engines generally have more potential failure points than naturally aspirated ones.",
            },
            {
              heading: "Maintenance Requirements",
              paragraph:
                "BMWs demand strict adherence to service intervals. Critical items include:\n- Oil changes every 5,000-7,500 miles with approved synthetic\n- Cooling system refreshes every 60,000 miles\n- Spark plugs every 30,000-50,000 miles\n- Transmission fluid every 60,000 miles\nNeglecting these dramatically increases failure risks.",
            },
          ],
          performance: [
            {
              heading: "Power Delivery",
              paragraph:
                "BMW engines excel at linear power delivery and immediate throttle response. Turbocharged models offer impressive low-end torque while maintaining high-RPM power. The VANOS variable valve timing system provides excellent flexibility across the rev range.",
            },
            {
              heading: "Tuning Potential",
              paragraph:
                "Many BMW engines respond exceptionally well to tuning. The N54 twin-turbo can often gain 100+ hp with just software changes. Even naturally aspirated engines like the N52 see meaningful gains from proper intake/exhaust modifications and ECU tuning.",
            },
          ],
        },
      ],
      conclusion:
        "While BMW engines demand more attention than some competitors, their performance and driving experience justify the maintenance requirements for enthusiasts. By understanding these common failure points and addressing them proactively, owners can enjoy BMW's legendary driving dynamics while minimizing unexpected repairs. Always use quality parts and fluids, and consider specialized BMW mechanics for complex issues.",
    },
    engineData: {
      models: [
        {
          model: "/bmw/bmw-1-series.png",
          model_name: "BMW 1 Series",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-2-series.png",
          model_name: "BMW 2 Series",
          engine_options: "2.0L Turbo Petrol, 3.0L Diesel",
        },
        {
          model: "/bmw/bmw-3-series.png",
          model_name: "BMW 3 Series",
          engine_options: "2.0L Petrol, 3.0L Diesel, 2.0L Hybrid",
        },
        {
          model: "/bmw/bmw-4-series.png",
          model_name: "BMW 4 Series",
          engine_options: "2.0L Turbo Petrol, 3.0L V6 Diesel",
        },
        {
          model: "/bmw/bmw-5-series.png",
          model_name: "BMW 5 Series",
          engine_options: "2.0L Petrol, 3.0L Diesel, 3.0L Hybrid",
        },
        {
          model: "/bmw/bmw-6-series.png",
          model_name: "BMW 6 Series",
          engine_options: "3.0L Diesel, 4.4L V8 Petrol",
        },
        {
          model: "/bmw/bmw-7-series.png",
          model_name: "BMW 7 Series",
          engine_options: "3.0L Petrol, 4.4L V8, 3.0L Hybrid",
        },
        {
          model: "/bmw/bmw-x1.png",
          model_name: "BMW X1",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x2.png",
          model_name: "BMW X2",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x3.png",
          model_name: "BMW X3",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x4.png",
          model_name: "BMW X4",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x5.png",
          model_name: "BMW X5",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x6.png",
          model_name: "BMW X6",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/BMW X7.png",
          model_name: "BMW X7",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-8-series.png",
          model_name: "BMW 8 Series",
          engine_options: "3.0L Petrol, 4.4L V8",
        },
        {
          model: "/bmw/bmw-z-series.png",
          model_name: "BMW Z Series",
          engine_options: "2.0L Turbo Petrol, 3.0L Twin-Turbo Petrol",
        },
        {
          model: "/bmw/bmw-z4.png",
          model_name: "BMW Z4",
          engine_options: "2.0L Petrol, 3.0L Petrol",
        },
        {
          model: "/bmw/bmw-i-series.png",
          model_name: "BMW i Series",
          engine_options: "Fully Electric, Plug-in Hybrid",
        },
        {
          model: "/bmw/bmw-i3.png",
          model_name: "BMW i3",
          engine_options: "Electric",
        },
        {
          model: "/bmw/bmw-i8.png",
          model_name: "BMW i8",
          engine_options: "1.5L Hybrid",
        },
        {
          model: "/bmw/bmw-m2.png",
          model_name: "BMW M2",
          engine_options: "3.0L Petrol",
        },
        {
          model: "/bmw/bmw-m3.png",
          model_name: "BMW M3",
          engine_options: "3.0L Petrol",
        },
        {
          model: "/bmw/bmw-m4.png",
          model_name: "BMW M4",
          engine_options: "3.0L Petrol",
        },
        {
          model: "/bmw/bmw-m5.png",
          model_name: "BMW M5",
          engine_options: "4.4L V8",
        },
        {
          model: "/bmw/bmw-m8.png",
          model_name: "BMW M8",
          engine_options: "4.4L V8",
        },
      ],
      engine_codes: [
        {
          engineCode: "B38 A15",
          engineSize: 1.5,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "134-136",
          torque: 220,
          productionYears: "2013-present",
        },
        {
          engineCode: "B47 D20",
          engineSize: 2,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 190,
          torque: 400,
          productionYears: "2014-present",
        },
        {
          engineCode: "B47 D20 A",
          engineSize: 2,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 190,
          torque: 400,
          productionYears: "2014-present",
        },
        {
          engineCode: "B47 D20 B",
          engineSize: 2,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 231,
          torque: 500,
          productionYears: "2014-present",
        },
        {
          engineCode: "B48 A20",
          engineSize: 2,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "192-306",
          torque: "280-450",
          productionYears: "2014-present",
        },
        {
          engineCode: "B48 B20",
          engineSize: 2,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "192-302",
          torque: "280-450",
          productionYears: "2014-present",
        },
        {
          engineCode: "B57 D30",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: "261-400",
          torque: "620-760",
          productionYears: "2015-present",
        },
        {
          engineCode: "B57 D30 O0",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 265,
          torque: 620,
          productionYears: "2015-present",
        },
        {
          engineCode: "B57 D30 T0",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 320,
          torque: 680,
          productionYears: "2015-present",
        },
        {
          engineCode: "B57 D30 T1",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 400,
          torque: 760,
          productionYears: "2016-present",
        },
        {
          engineCode: "B58 B30",
          engineSize: 3,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "335-382",
          torque: "500-550",
          productionYears: "2015-present",
        },
      ],
      models_engines: [
        {
          engineCode: "B37 D15",
          compatibleModels: ["BMW 1 Series (F20)", "BMW 2 Series (F22)"],
        },
        {
          engineCode: "B38 A15",
          compatibleModels: ["BMW 2 Series (F45)", "BMW i8 (I12)"],
        },
        {
          engineCode: "B47 D20",
          compatibleModels: ["BMW 3 Series (G20)", "BMW X3 (G01)"],
        },
        {
          engineCode: "B48 B20",
          compatibleModels: ["BMW 3 Series (G20)", "BMW X3 (G01)", "BMW 330i"],
        },
        {
          engineCode: "B57 D30",
          compatibleModels: [
            "BMW 5 Series (G30)",
            "BMW X5 (G05)",
            "BMW 540d",
            "BMW X7 xDrive40d",
          ],
        },
        {
          engineCode: "B58 B30",
          compatibleModels: [
            "BMW 3 Series (G20)",
            "BMW Z4 (G29)",
            "BMW 340i",
            "BMW X5 xDrive40i",
          ],
        },
      ],
      replacement_costs: [
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 1 Series",
          engineType: "1.5L Petrol",
          estimatedCost: "£2,500 - £4,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 1 Series",
          engineType: "2.0L Diesel",
          estimatedCost: "£3,000 - £5,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 2 Series",
          engineType: "1.5L Petrol",
          estimatedCost: "£2,500 - £4,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 2 Series",
          engineType: "2.0L Diesel",
          estimatedCost: "£3,500 - £5,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 3 Series",
          engineType: "2.0L Petrol",
          estimatedCost: "£3,000 - £5,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 3 Series",
          engineType: "3.0L Diesel",
          estimatedCost: "£4,000 - £6,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 4 Series",
          engineType: "2.0L Petrol",
          estimatedCost: "£3,500 - £5,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 4 Series",
          engineType: "3.0L Diesel",
          estimatedCost: "£4,500 - £7,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 5 Series",
          engineType: "2.0L Petrol",
          estimatedCost: "£3,500 - £5,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 5 Series",
          engineType: "3.0L Diesel",
          estimatedCost: "£4,500 - £7,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 6 Series",
          engineType: "3.0L Petrol",
          estimatedCost: "£5,000 - £8,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 6 Series",
          engineType: "4.4L V8",
          estimatedCost: "£7,000 - £12,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 7 Series",
          engineType: "3.0L Petrol",
          estimatedCost: "£5,000 - £8,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 7 Series",
          engineType: "4.4L V8",
          estimatedCost: "£7,000 - £12,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW X1",
          engineType: "1.5L Petrol",
          estimatedCost: "£2,500 - £4,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW X1",
          engineType: "2.0L Diesel",
          estimatedCost: "£3,000 - £5,000",
        },
      ],
    },
    section7: [
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
    ],

    section8: {
      EngineProblems: [
        {
          id: "check-engine-light-issues",
          title: "Check Engine Light Issues",
          icon: <AlertTriangle className="h-5 w-5" />,
          severity: "Common",
          data: [
            {
              heading: "Diagnose Promptly",
              paragraph:
                "When the check engine light comes on, use an OBD-II scanner to diagnose the issue. Common causes include faulty sensors, emission control problems, or minor issues like a loose gas cap.",
            },
            {
              heading: "Regular Maintenance",
              paragraph:
                "Ensure regular maintenance checks to catch potential issues early. This includes checking and replacing faulty sensors and addressing any emission control system problems.",
            },
          ],
        },
        {
          id: "power-loss-and-turbo-failures",
          title: "Power Loss & Turbo Failures",
          icon: <Gauge className="h-5 w-5" />,
          severity: "Critical",
          data: [
            {
              heading: "Inspect Turbocharger",
              paragraph:
                "Regularly inspect the turbocharger for signs of wear or damage. Turbo failures can lead to significant power loss.",
            },
            {
              heading: "Clean Air Filters",
              paragraph:
                "Ensure air filters are clean and replaced regularly to prevent debris from damaging the turbocharger and affecting engine performance.",
            },
            {
              heading: "Check Fuel System",
              paragraph:
                "Regularly check the fuel system for blockages or leaks that could lead to power loss.",
            },
          ],
        },
        {
          id: "excessive-smoke-and-oil-leaks",
          title: "Excessive Smoke & Oil Leaks",
          icon: <Smoke className="h-5 w-5" />,
          severity: "Moderate",
          data: [
            {
              heading: "Monitor Oil Levels",
              paragraph:
                "Keep an eye on oil levels and top up as necessary. Low oil levels can cause excessive smoke and indicate potential leaks.",
            },
            {
              heading: "Inspect Gaskets and Seals",
              paragraph:
                "Regularly inspect gaskets and seals for wear and tear. Common areas for oil leaks include the valve cover gasket, oil pan gasket, and timing cover.",
            },
            {
              heading: "Address Leaks Promptly",
              paragraph:
                "If you notice oil leaks, address them promptly to prevent further engine damage.",
            },
          ],
        },
      ],
      maintenanceTips: [
        {
          icon: "Lightbulb",
          iconColor: "text-blue-600",
          border: "border-blue-200",
          bg: "bg-blue-50",
          title: "Regular Inspections",
          titleColor: "text-blue-800",
          text: "Check your engine monthly for early problem detection",
          textColor: "text-blue-700",
        },
        {
          icon: "CheckCircle",
          iconColor: "text-green-600",
          border: "border-green-200",
          bg: "bg-green-50",
          title: "Preventive Maintenance",
          titleColor: "text-green-800",
          text: "Follow BMW's recommended service schedule",
          textColor: "text-green-700",
        },
        {
          icon: "AlertTriangle",
          iconColor: "text-orange-600",
          border: "border-orange-200",
          bg: "bg-orange-50",
          title: "Act Quickly",
          titleColor: "text-orange-800",
          text: "Address warning signs immediately to prevent damage",
          textColor: "text-orange-700",
        },
      ],
      summary: {
        variant: "green",
        title: "Key Takeaway",
        content:
          "By following these troubleshooting tips and maintaining regular engine checks, you can help ensure your BMW engine remains in top condition, prolonging its life and performance. Early detection and prompt action are crucial for preventing minor issues from becoming major repairs.",
      },
    },
    section9: {
      performanceUpgrades: [
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
              benefits:
                "Increased horsepower and torque, improved engine sound.",
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
      ],
      summary: {
        variant: "performance",
        title: "Performance Enhancement Summary",
        content:
          "By carefully selecting and implementing performance upgrades, you can transform your BMW into a high-performance machine while maintaining a balance between power, reliability, and efficiency. Always consult with experienced professionals and use high-quality components for the best results.",
      },
    },
    faqs: [
      {
        question: "What is EnginesMarket.co.uk?",
        answer:
          "EnginesMarket.co.uk is a price comparison website specializing in providing competitive quotes for new, used, and reconditioned BMW engines from multiple trusted sellers.",
      },
      {
        question: "How does EnginesMarket.co.uk work?",
        answer:
          "Simply enter your BMW model and engine requirements on our platform, and we will connect you with multiple sellers offering the best prices and availability. You can compare quotes and choose the best option for your needs.",
      },
      {
        question:
          "Why should I choose EnginesMarket.co.uk for my BMW engine replacement?",
        answer:
          "EnginesMarket.co.uk offers a wide range of BMW engines at unbeatable prices. Our platform saves you time and money by providing competitive quotes from multiple sellers, ensuring you get a high-quality, reliable engine.",
      },
      {
        question:
          "Do you offer warranties on the engines listed on EnginesMarket.co.uk?",
        answer:
          "Yes, many of the engines listed on our platform come with warranties. The warranty details vary depending on the seller and the type of engine (new, used, or reconditioned). Be sure to check the warranty information provided by the seller.",
      },
      {
        question:
          "How can I request a quote for a BMW engine on EnginesMarket.co.uk?",
        answer:
          'To request a quote, simply visit our website, enter your BMW model and engine specifications, and click on the "Request a Quote" button. You will receive multiple quotes from trusted sellers, allowing you to compare and choose the best option.',
      },
      {
        question: "What are the most common BMW engine problems?",
        answerList: [
          "Oil leaks",
          "Overheating issues",
          "Timing chain problems",
          "Misfiring engines",
          "High-pressure fuel pump (HPFP) failures",
        ],
      },
      {
        question: "Which BMW engines are known for their reliability?",
        answer:
          "Some of the most reliable BMW engines include the M54, N52, and B58 engines.",
      },
      {
        question: "What is the best BMW engine for performance?",
        answer:
          "The S55 and N54 engines are highly regarded for their performance and tuning potential.",
      },
      {
        question: "How often should I service my BMW engine?",
        answer:
          "It is recommended to service your BMW engine every 10,000 to 15,000 miles or once a year, whichever comes first. Regular maintenance includes oil changes, filter replacements, and inspections of key components.",
      },
      {
        question: "Can I upgrade my BMW engine for better performance?",
        answer:
          "Yes, common performance upgrades include ECU remapping, cold air intakes, exhaust system upgrades, intercooler upgrades, and turbocharger enhancements.",
      },
      {
        question:
          "What is the difference between a new, used, and reconditioned BMW engine?",
        answer:
          "New engines offer the best performance and come with a warranty but are the most expensive. Used engines are more affordable but may have wear and tear. Reconditioned engines are rebuilt with new or refurbished parts, offering a reliable and cost-effective middle ground.",
      },
      {
        question: "How can I prevent common BMW engine problems?",
        answer:
          "Regular maintenance, using high-quality oil and parts, and addressing issues promptly can help prevent common BMW engine problems.",
      },
      {
        question: "What are the benefits of a turbocharged BMW engine?",
        answer:
          "Turbocharged BMW engines offer increased power and torque, improved fuel efficiency, and better overall performance compared to naturally aspirated engines.",
      },
      {
        question: "Which BMW models are compatible with the N47 engine?",
        answer:
          "The N47 engine is compatible with models such as the BMW 1 Series (E81/E87) and BMW 3 Series (E90/E91).",
      },
      {
        question: "What should I look for when buying a used BMW engine?",
        answerList: [
          "Engine mileage",
          "Maintenance history",
          "Overall condition",
          "Reputation of the seller",
          "Warranty availability",
        ],
      },
      {
        question: "How do I know if my BMW engine needs a rebuild?",
        answer:
          "Signs that your BMW engine may need a rebuild include excessive oil consumption, loss of power, unusual noises, and poor fuel efficiency.",
      },
      {
        question: "What is the lifespan of a BMW engine?",
        answer:
          "With proper maintenance, a BMW engine can last well over 200,000 miles.",
      },
      {
        question: "Are BMW diesel engines reliable?",
        answer:
          "BMW diesel engines, such as the M57, are known for their reliability and efficiency.",
      },
      {
        question: "What is the best BMW engine for fuel efficiency?",
        answer:
          "The N52 and B48 engines are known for their excellent fuel efficiency while still providing good performance.",
      },
      {
        question:
          "Can I install a BMW engine from a different model in my car?",
        answer:
          "Engine swaps are possible, but compatibility depends on the engine code and model. It's important to consult with a professional to ensure a successful swap.",
      },
      {
        question: "What are the most reliable BMW engines?",
        answer:
          "The B58 3.0L turbocharged petrol engine and the N57 3.0L diesel engine are widely regarded as the most reliable BMW engines due to their durability, performance, and fuel efficiency.",
      },
      {
        question: "How much does it cost to replace a BMW engine?",
        answer:
          "The cost of replacing a BMW engine ranges from £1,500 to £10,000, depending on the engine type, model, and whether you choose a new, used, or reconditioned engine.",
      },
      {
        question: "Are reconditioned BMW engines reliable?",
        answer:
          "Yes, reconditioned BMW engines are thoroughly rebuilt to meet OEM standards, making them a cost-effective and reliable option for engine replacement.",
      },
      {
        question:
          "Can I replace my BMW engine with a different model's engine?",
        answer:
          "Engine compatibility depends on the model and engine type. Use our BMW engine compatibility chart to find the right engine for your vehicle.",
      },
      {
        question: "What is the best BMW engine for performance?",
        answer:
          "The S63 4.4L twin-turbo V8 engine, found in the BMW M5 and X5 M, is one of the best engines for performance, offering up to 625 HP and 800 Nm of torque.",
      },
      {
        question: "How do I know if my BMW engine needs replacement?",
        answerList: [
          "Excessive smoke",
          "Knocking sounds",
          "Loss of power",
          "Frequent overheating",
          "Diagnostic check confirming engine failure",
        ],
      },
      {
        question: "What is the most fuel-efficient BMW engine?",
        answer:
          "The B47 2.0L diesel engine is one of the most fuel-efficient BMW engines, offering excellent mileage and low emissions.",
      },
      {
        question: "What is the best BMW engine for towing?",
        answer:
          "The B57 3.0L diesel engine, found in models like the X5 and X7, is ideal for towing due to its high torque output and durability.",
      },
      {
        question: "How do I find the right engine for my BMW model?",
        answer:
          "Use our BMW engine compatibility chart or contact our experts at EnginesMarket.co.uk to find the perfect engine for your BMW.",
      },
      {
        question: "What is the most powerful BMW engine ever made?",
        answer:
          "The S63 4.4L twin-turbo V8 engine in the BMW M5 CS produces 635 HP, making it the most powerful BMW engine to date.",
      },
      {
        question: "What is the cost of a reconditioned BMW engine?",
        answer:
          "Reconditioned BMW engines typically cost between £2,000 and £6,000, depending on the engine type and model.",
      },
      {
        question: "Can I install a used BMW engine myself?",
        answer:
          "While it's possible, installing a used BMW engine requires specialized tools and expertise. We recommend hiring a professional mechanic for the job.",
      },
      {
        question: "What is the best BMW engine for a daily driver?",
        answer:
          "The B48 2.0L turbo petrol engine is an excellent choice for daily driving, offering a balance of performance, efficiency, and reliability.",
      },
      {
        question: "Where can I buy a BMW engine at the best price?",
        answer:
          "At EnginesMarket.co.uk, we connect you with multiple trusted sellers to ensure you get the best price for your BMW engine replacement.",
      },
    ],
  },
  volkswagen: {
    brandName: "BMW",
    carImages: [
      "/banners/banner-1.webp",
      "/banners/banner-2.webp",
      "/banners/banner-3.webp",
      "/banners/banner-4.webp",
      "/banners/banner-5.webp",
    ],
    carModelNames: [
      "BMW X5",
      "Audi A6",
      "Mercedes C-Class",
      "Range Rover Evoque",
      "Volkswagen Golf",
    ],
    section0Image: {
      img: "/bmw/bmw.png",
      alt: "BMW front view",
    },
    section1Image: {
      img: "/bmw/engine-guide.png",
      alt: "BMW rear view",
    },
    tableOneBottomParagraph:
      "This table includes some of the most popular and in-demand BMW models, focusing on their diverse engine options. If you need more detailed information on any specific model, feel free to Contact Us!",
    tableFourBottomParagraph:
      "These estimates provide a general idea of the costs involved in replacing a BMW engine. Prices can vary based on location, availability of parts, and the specific service provider.",
    section4: {
      mainParagraph:
        "BMW engines are renowned for their performance and engineering excellence, but like any complex machinery, they can encounter issues. Here are some of the most common problems found in BMW engines, along with solutions and preventive measures:",
      EngineProblems: [
        {
          title: "Oil Leaks",
          icon: <Droplets className="h-5 w-5" />,
          problem:
            "Oil leaks are a prevalent issue in many BMW models, often caused by worn or damaged gaskets and seals. Common areas for oil leaks include the valve cover gasket, oil filter housing gasket, and oil pan gasket.",
          solution:
            "Check the coolant level and inspect the cooling system for leaks. Ensure that the radiator and water pump are functioning correctly and replace any faulty components. If the engine consistently overheats, have a professional inspect the thermostat and cooling system.",
          prevention:
            "Regularly maintain the cooling system, including flushing the coolant and replacing the thermostat and water pump as needed.",
          severity: "Common",
        },
        {
          title: "Overheating Issues",
          icon: <Thermometer className="h-5 w-5" />,
          problem:
            "Engine overheating can cause significant damage to BMW engines. Common causes include a faulty thermostat, a failing water pump, or a leaking radiator.",
          solution:
            "Immediately stop driving if temperature gauge enters red zone. Replace entire cooling system every 60,000 miles (tank, hoses, pump, thermostat). Upgrade to metal impeller water pumps when possible. Use BMW-approved coolant mixed 50/50 with distilled water. Bleed cooling system properly after any service.",
          prevention:
            "Annual cooling system inspections. Replace coolant every 2 years. Monitor for early warning signs (slow leaks, faint coolant smell). Keep overflow tank at proper level. Consider auxiliary temperature gauge for accurate readings.",
          severity: "Critical",
        },
        {
          title: "Timing Chain Problems",
          icon: <Clock className="h-5 w-5" />,
          problem:
            "Timing chain issues are common in some BMW engines, particularly the N20 and N26 models. A failing timing chain can lead to severe engine damage.",
          solution:
            "Listen for unusual noises from the engine, such as rattling or ticking sounds, which may indicate a timing chain issue. If detected, have the timing chain inspected and replaced by a professional.",
          prevention:
            "Follow the manufacturer's maintenance schedule and replace the timing chain and related components at the recommended intervals.",
          severity: "Critical",
        },
        {
          title: "Misfiring Engines",
          icon: <Zap className="h-5 w-5" />,
          problem:
            "Engine misfires can result from faulty spark plugs, ignition coils, or fuel injectors. Misfires can lead to poor engine performance and increased emissions.",
          solution:
            "Diagnose the issue using an OBD-II scanner to identify the specific problem. Replace faulty spark plugs, ignition coils, or fuel injectors as needed.",
          prevention:
            "Regularly replace spark plugs and ignition coils according to the manufacturer's recommendations. Use high-quality fuel to prevent injector clogging.",
          severity: "Moderate",
        },
        {
          title: "HPFP Failure (High-Pressure Fuel Pump)",
          icon: <Fuel className="h-5 w-5" />,
          problem:
            "The high-pressure fuel pump (HPFP) in some BMW models, particularly those with turbocharged engines like the N54, can fail, leading to poor engine performance and starting issues.",
          solution:
            "If you experience symptoms such as long cranking times or loss of power, have the HPFP inspected and replaced if necessary.",
          prevention:
            "Use high-quality fuel and follow the recommended maintenance schedule to reduce the risk of HPFP failure.",
          severity: "Critical",
        },
      ],
      engineReliabilityAndPerformance: [
        {
          reliability: [
            {
              heading: "Build Quality and Longevity",
              paragraph:
                "Modern BMW engines offer excellent power density but require meticulous maintenance. With proper care, most can reach 150,000+ miles, though some components (cooling systems, gaskets) will need periodic replacement. Turbocharged engines generally have more potential failure points than naturally aspirated ones.",
            },
            {
              heading: "Maintenance Requirements",
              paragraph:
                "BMWs demand strict adherence to service intervals. Critical items include:\n- Oil changes every 5,000-7,500 miles with approved synthetic\n- Cooling system refreshes every 60,000 miles\n- Spark plugs every 30,000-50,000 miles\n- Transmission fluid every 60,000 miles\nNeglecting these dramatically increases failure risks.",
            },
          ],
          performance: [
            {
              heading: "Power Delivery",
              paragraph:
                "BMW engines excel at linear power delivery and immediate throttle response. Turbocharged models offer impressive low-end torque while maintaining high-RPM power. The VANOS variable valve timing system provides excellent flexibility across the rev range.",
            },
            {
              heading: "Tuning Potential",
              paragraph:
                "Many BMW engines respond exceptionally well to tuning. The N54 twin-turbo can often gain 100+ hp with just software changes. Even naturally aspirated engines like the N52 see meaningful gains from proper intake/exhaust modifications and ECU tuning.",
            },
          ],
        },
      ],
      conclusion:
        "While BMW engines demand more attention than some competitors, their performance and driving experience justify the maintenance requirements for enthusiasts. By understanding these common failure points and addressing them proactively, owners can enjoy BMW's legendary driving dynamics while minimizing unexpected repairs. Always use quality parts and fluids, and consider specialized BMW mechanics for complex issues.",
    },
    engineData: {
      models: [
        {
          model: "/bmw/bmw-1-series.png",
          model_name: "BMW 1 Series",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-2-series.png",
          model_name: "BMW 2 Series",
          engine_options: "2.0L Turbo Petrol, 3.0L Diesel",
        },
        {
          model: "/bmw/bmw-3-series.png",
          model_name: "BMW 3 Series",
          engine_options: "2.0L Petrol, 3.0L Diesel, 2.0L Hybrid",
        },
        {
          model: "/bmw/bmw-4-series.png",
          model_name: "BMW 4 Series",
          engine_options: "2.0L Turbo Petrol, 3.0L V6 Diesel",
        },
        {
          model: "/bmw/bmw-5-series.png",
          model_name: "BMW 5 Series",
          engine_options: "2.0L Petrol, 3.0L Diesel, 3.0L Hybrid",
        },
        {
          model: "/bmw/bmw-6-series.png",
          model_name: "BMW 6 Series",
          engine_options: "3.0L Diesel, 4.4L V8 Petrol",
        },
        {
          model: "/bmw/bmw-7-series.png",
          model_name: "BMW 7 Series",
          engine_options: "3.0L Petrol, 4.4L V8, 3.0L Hybrid",
        },
        {
          model: "/bmw/bmw-x1.png",
          model_name: "BMW X1",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x2.png",
          model_name: "BMW X2",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x3.png",
          model_name: "BMW X3",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x4.png",
          model_name: "BMW X4",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x5.png",
          model_name: "BMW X5",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-x6.png",
          model_name: "BMW X6",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/BMW X7.png",
          model_name: "BMW X7",
          engine_options: "1.5L Petrol, 2.0L Diesel",
        },
        {
          model: "/bmw/bmw-8-series.png",
          model_name: "BMW 8 Series",
          engine_options: "3.0L Petrol, 4.4L V8",
        },
        {
          model: "/bmw/bmw-z-series.png",
          model_name: "BMW Z Series",
          engine_options: "2.0L Turbo Petrol, 3.0L Twin-Turbo Petrol",
        },
        {
          model: "/bmw/bmw-z4.png",
          model_name: "BMW Z4",
          engine_options: "2.0L Petrol, 3.0L Petrol",
        },
        {
          model: "/bmw/bmw-i-series.png",
          model_name: "BMW i Series",
          engine_options: "Fully Electric, Plug-in Hybrid",
        },
        {
          model: "/bmw/bmw-i3.png",
          model_name: "BMW i3",
          engine_options: "Electric",
        },
        {
          model: "/bmw/bmw-i8.png",
          model_name: "BMW i8",
          engine_options: "1.5L Hybrid",
        },
        {
          model: "/bmw/bmw-m2.png",
          model_name: "BMW M2",
          engine_options: "3.0L Petrol",
        },
        {
          model: "/bmw/bmw-m3.png",
          model_name: "BMW M3",
          engine_options: "3.0L Petrol",
        },
        {
          model: "/bmw/bmw-m4.png",
          model_name: "BMW M4",
          engine_options: "3.0L Petrol",
        },
        {
          model: "/bmw/bmw-m5.png",
          model_name: "BMW M5",
          engine_options: "4.4L V8",
        },
        {
          model: "/bmw/bmw-m8.png",
          model_name: "BMW M8",
          engine_options: "4.4L V8",
        },
      ],
      engine_codes: [
        {
          engineCode: "B38 A15",
          engineSize: 1.5,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "134-136",
          torque: 220,
          productionYears: "2013-present",
        },
        {
          engineCode: "B47 D20",
          engineSize: 2,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 190,
          torque: 400,
          productionYears: "2014-present",
        },
        {
          engineCode: "B47 D20 A",
          engineSize: 2,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 190,
          torque: 400,
          productionYears: "2014-present",
        },
        {
          engineCode: "B47 D20 B",
          engineSize: 2,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 231,
          torque: 500,
          productionYears: "2014-present",
        },
        {
          engineCode: "B48 A20",
          engineSize: 2,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "192-306",
          torque: "280-450",
          productionYears: "2014-present",
        },
        {
          engineCode: "B48 B20",
          engineSize: 2,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "192-302",
          torque: "280-450",
          productionYears: "2014-present",
        },
        {
          engineCode: "B57 D30",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: "261-400",
          torque: "620-760",
          productionYears: "2015-present",
        },
        {
          engineCode: "B57 D30 O0",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 265,
          torque: 620,
          productionYears: "2015-present",
        },
        {
          engineCode: "B57 D30 T0",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 320,
          torque: 680,
          productionYears: "2015-present",
        },
        {
          engineCode: "B57 D30 T1",
          engineSize: 3,
          fuelType: "Diesel",
          turbo: true,
          horsepower: 400,
          torque: 760,
          productionYears: "2016-present",
        },
        {
          engineCode: "B58 B30",
          engineSize: 3,
          fuelType: "Petrol",
          turbo: true,
          horsepower: "335-382",
          torque: "500-550",
          productionYears: "2015-present",
        },
      ],
      models_engines: [
        {
          engineCode: "B37 D15",
          compatibleModels: ["BMW 1 Series (F20)", "BMW 2 Series (F22)"],
        },
        {
          engineCode: "B38 A15",
          compatibleModels: ["BMW 2 Series (F45)", "BMW i8 (I12)"],
        },
        {
          engineCode: "B47 D20",
          compatibleModels: ["BMW 3 Series (G20)", "BMW X3 (G01)"],
        },
        {
          engineCode: "B48 B20",
          compatibleModels: ["BMW 3 Series (G20)", "BMW X3 (G01)", "BMW 330i"],
        },
        {
          engineCode: "B57 D30",
          compatibleModels: [
            "BMW 5 Series (G30)",
            "BMW X5 (G05)",
            "BMW 540d",
            "BMW X7 xDrive40d",
          ],
        },
        {
          engineCode: "B58 B30",
          compatibleModels: [
            "BMW 3 Series (G20)",
            "BMW Z4 (G29)",
            "BMW 340i",
            "BMW X5 xDrive40i",
          ],
        },
      ],
      replacement_costs: [
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 1 Series",
          engineType: "1.5L Petrol",
          estimatedCost: "£2,500 - £4,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 1 Series",
          engineType: "2.0L Diesel",
          estimatedCost: "£3,000 - £5,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 2 Series",
          engineType: "1.5L Petrol",
          estimatedCost: "£2,500 - £4,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 2 Series",
          engineType: "2.0L Diesel",
          estimatedCost: "£3,500 - £5,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 3 Series",
          engineType: "2.0L Petrol",
          estimatedCost: "£3,000 - £5,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 3 Series",
          engineType: "3.0L Diesel",
          estimatedCost: "£4,000 - £6,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 4 Series",
          engineType: "2.0L Petrol",
          estimatedCost: "£3,500 - £5,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 4 Series",
          engineType: "3.0L Diesel",
          estimatedCost: "£4,500 - £7,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 5 Series",
          engineType: "2.0L Petrol",
          estimatedCost: "£3,500 - £5,500",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 5 Series",
          engineType: "3.0L Diesel",
          estimatedCost: "£4,500 - £7,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 6 Series",
          engineType: "3.0L Petrol",
          estimatedCost: "£5,000 - £8,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 6 Series",
          engineType: "4.4L V8",
          estimatedCost: "£7,000 - £12,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 7 Series",
          engineType: "3.0L Petrol",
          estimatedCost: "£5,000 - £8,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW 7 Series",
          engineType: "4.4L V8",
          estimatedCost: "£7,000 - £12,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW X1",
          engineType: "1.5L Petrol",
          estimatedCost: "£2,500 - £4,000",
        },
        {
          image: "/bmw/bmw-1-series.png",
          model: "BMW X1",
          engineType: "2.0L Diesel",
          estimatedCost: "£3,000 - £5,000",
        },
      ],
    },
    section7: [
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
    ],

    section8: {
      EngineProblems: [
        {
          id: "check-engine-light-issues",
          title: "Check Engine Light Issues",
          icon: <AlertTriangle className="h-5 w-5" />,
          severity: "Common",
          data: [
            {
              heading: "Diagnose Promptly",
              paragraph:
                "When the check engine light comes on, use an OBD-II scanner to diagnose the issue. Common causes include faulty sensors, emission control problems, or minor issues like a loose gas cap.",
            },
            {
              heading: "Regular Maintenance",
              paragraph:
                "Ensure regular maintenance checks to catch potential issues early. This includes checking and replacing faulty sensors and addressing any emission control system problems.",
            },
          ],
        },
        {
          id: "power-loss-and-turbo-failures",
          title: "Power Loss & Turbo Failures",
          icon: <Gauge className="h-5 w-5" />,
          severity: "Critical",
          data: [
            {
              heading: "Inspect Turbocharger",
              paragraph:
                "Regularly inspect the turbocharger for signs of wear or damage. Turbo failures can lead to significant power loss.",
            },
            {
              heading: "Clean Air Filters",
              paragraph:
                "Ensure air filters are clean and replaced regularly to prevent debris from damaging the turbocharger and affecting engine performance.",
            },
            {
              heading: "Check Fuel System",
              paragraph:
                "Regularly check the fuel system for blockages or leaks that could lead to power loss.",
            },
          ],
        },
        {
          id: "excessive-smoke-and-oil-leaks",
          title: "Excessive Smoke & Oil Leaks",
          icon: <Smoke className="h-5 w-5" />,
          severity: "Moderate",
          data: [
            {
              heading: "Monitor Oil Levels",
              paragraph:
                "Keep an eye on oil levels and top up as necessary. Low oil levels can cause excessive smoke and indicate potential leaks.",
            },
            {
              heading: "Inspect Gaskets and Seals",
              paragraph:
                "Regularly inspect gaskets and seals for wear and tear. Common areas for oil leaks include the valve cover gasket, oil pan gasket, and timing cover.",
            },
            {
              heading: "Address Leaks Promptly",
              paragraph:
                "If you notice oil leaks, address them promptly to prevent further engine damage.",
            },
          ],
        },
      ],
      maintenanceTips: [
        {
          icon: "Lightbulb",
          iconColor: "text-blue-600",
          border: "border-blue-200",
          bg: "bg-blue-50",
          title: "Regular Inspections",
          titleColor: "text-blue-800",
          text: "Check your engine monthly for early problem detection",
          textColor: "text-blue-700",
        },
        {
          icon: "CheckCircle",
          iconColor: "text-green-600",
          border: "border-green-200",
          bg: "bg-green-50",
          title: "Preventive Maintenance",
          titleColor: "text-green-800",
          text: "Follow BMW's recommended service schedule",
          textColor: "text-green-700",
        },
        {
          icon: "AlertTriangle",
          iconColor: "text-orange-600",
          border: "border-orange-200",
          bg: "bg-orange-50",
          title: "Act Quickly",
          titleColor: "text-orange-800",
          text: "Address warning signs immediately to prevent damage",
          textColor: "text-orange-700",
        },
      ],
      summary: {
        variant: "green",
        title: "Key Takeaway",
        content:
          "By following these troubleshooting tips and maintaining regular engine checks, you can help ensure your BMW engine remains in top condition, prolonging its life and performance. Early detection and prompt action are crucial for preventing minor issues from becoming major repairs.",
      },
    },
    section9: {
      performanceUpgrades: [
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
              benefits:
                "Increased horsepower and torque, improved engine sound.",
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
      ],
      summary: {
        variant: "performance",
        title: "Performance Enhancement Summary",
        content:
          "By carefully selecting and implementing performance upgrades, you can transform your BMW into a high-performance machine while maintaining a balance between power, reliability, and efficiency. Always consult with experienced professionals and use high-quality components for the best results.",
      },
    },
    faqs: [
      {
        question: "What is EnginesMarket.co.uk?",
        answer:
          "EnginesMarket.co.uk is a price comparison website specializing in providing competitive quotes for new, used, and reconditioned BMW engines from multiple trusted sellers.",
      },
      {
        question: "How does EnginesMarket.co.uk work?",
        answer:
          "Simply enter your BMW model and engine requirements on our platform, and we will connect you with multiple sellers offering the best prices and availability. You can compare quotes and choose the best option for your needs.",
      },
      {
        question:
          "Why should I choose EnginesMarket.co.uk for my BMW engine replacement?",
        answer:
          "EnginesMarket.co.uk offers a wide range of BMW engines at unbeatable prices. Our platform saves you time and money by providing competitive quotes from multiple sellers, ensuring you get a high-quality, reliable engine.",
      },
      {
        question:
          "Do you offer warranties on the engines listed on EnginesMarket.co.uk?",
        answer:
          "Yes, many of the engines listed on our platform come with warranties. The warranty details vary depending on the seller and the type of engine (new, used, or reconditioned). Be sure to check the warranty information provided by the seller.",
      },
      {
        question:
          "How can I request a quote for a BMW engine on EnginesMarket.co.uk?",
        answer:
          'To request a quote, simply visit our website, enter your BMW model and engine specifications, and click on the "Request a Quote" button. You will receive multiple quotes from trusted sellers, allowing you to compare and choose the best option.',
      },
      {
        question: "What are the most common BMW engine problems?",
        answerList: [
          "Oil leaks",
          "Overheating issues",
          "Timing chain problems",
          "Misfiring engines",
          "High-pressure fuel pump (HPFP) failures",
        ],
      },
      {
        question: "Which BMW engines are known for their reliability?",
        answer:
          "Some of the most reliable BMW engines include the M54, N52, and B58 engines.",
      },
      {
        question: "What is the best BMW engine for performance?",
        answer:
          "The S55 and N54 engines are highly regarded for their performance and tuning potential.",
      },
      {
        question: "How often should I service my BMW engine?",
        answer:
          "It is recommended to service your BMW engine every 10,000 to 15,000 miles or once a year, whichever comes first. Regular maintenance includes oil changes, filter replacements, and inspections of key components.",
      },
      {
        question: "Can I upgrade my BMW engine for better performance?",
        answer:
          "Yes, common performance upgrades include ECU remapping, cold air intakes, exhaust system upgrades, intercooler upgrades, and turbocharger enhancements.",
      },
      {
        question:
          "What is the difference between a new, used, and reconditioned BMW engine?",
        answer:
          "New engines offer the best performance and come with a warranty but are the most expensive. Used engines are more affordable but may have wear and tear. Reconditioned engines are rebuilt with new or refurbished parts, offering a reliable and cost-effective middle ground.",
      },
      {
        question: "How can I prevent common BMW engine problems?",
        answer:
          "Regular maintenance, using high-quality oil and parts, and addressing issues promptly can help prevent common BMW engine problems.",
      },
      {
        question: "What are the benefits of a turbocharged BMW engine?",
        answer:
          "Turbocharged BMW engines offer increased power and torque, improved fuel efficiency, and better overall performance compared to naturally aspirated engines.",
      },
      {
        question: "Which BMW models are compatible with the N47 engine?",
        answer:
          "The N47 engine is compatible with models such as the BMW 1 Series (E81/E87) and BMW 3 Series (E90/E91).",
      },
      {
        question: "What should I look for when buying a used BMW engine?",
        answerList: [
          "Engine mileage",
          "Maintenance history",
          "Overall condition",
          "Reputation of the seller",
          "Warranty availability",
        ],
      },
      {
        question: "How do I know if my BMW engine needs a rebuild?",
        answer:
          "Signs that your BMW engine may need a rebuild include excessive oil consumption, loss of power, unusual noises, and poor fuel efficiency.",
      },
      {
        question: "What is the lifespan of a BMW engine?",
        answer:
          "With proper maintenance, a BMW engine can last well over 200,000 miles.",
      },
      {
        question: "Are BMW diesel engines reliable?",
        answer:
          "BMW diesel engines, such as the M57, are known for their reliability and efficiency.",
      },
      {
        question: "What is the best BMW engine for fuel efficiency?",
        answer:
          "The N52 and B48 engines are known for their excellent fuel efficiency while still providing good performance.",
      },
      {
        question:
          "Can I install a BMW engine from a different model in my car?",
        answer:
          "Engine swaps are possible, but compatibility depends on the engine code and model. It's important to consult with a professional to ensure a successful swap.",
      },
      {
        question: "What are the most reliable BMW engines?",
        answer:
          "The B58 3.0L turbocharged petrol engine and the N57 3.0L diesel engine are widely regarded as the most reliable BMW engines due to their durability, performance, and fuel efficiency.",
      },
      {
        question: "How much does it cost to replace a BMW engine?",
        answer:
          "The cost of replacing a BMW engine ranges from £1,500 to £10,000, depending on the engine type, model, and whether you choose a new, used, or reconditioned engine.",
      },
      {
        question: "Are reconditioned BMW engines reliable?",
        answer:
          "Yes, reconditioned BMW engines are thoroughly rebuilt to meet OEM standards, making them a cost-effective and reliable option for engine replacement.",
      },
      {
        question:
          "Can I replace my BMW engine with a different model's engine?",
        answer:
          "Engine compatibility depends on the model and engine type. Use our BMW engine compatibility chart to find the right engine for your vehicle.",
      },
      {
        question: "What is the best BMW engine for performance?",
        answer:
          "The S63 4.4L twin-turbo V8 engine, found in the BMW M5 and X5 M, is one of the best engines for performance, offering up to 625 HP and 800 Nm of torque.",
      },
      {
        question: "How do I know if my BMW engine needs replacement?",
        answerList: [
          "Excessive smoke",
          "Knocking sounds",
          "Loss of power",
          "Frequent overheating",
          "Diagnostic check confirming engine failure",
        ],
      },
      {
        question: "What is the most fuel-efficient BMW engine?",
        answer:
          "The B47 2.0L diesel engine is one of the most fuel-efficient BMW engines, offering excellent mileage and low emissions.",
      },
      {
        question: "What is the best BMW engine for towing?",
        answer:
          "The B57 3.0L diesel engine, found in models like the X5 and X7, is ideal for towing due to its high torque output and durability.",
      },
      {
        question: "How do I find the right engine for my BMW model?",
        answer:
          "Use our BMW engine compatibility chart or contact our experts at EnginesMarket.co.uk to find the perfect engine for your BMW.",
      },
      {
        question: "What is the most powerful BMW engine ever made?",
        answer:
          "The S63 4.4L twin-turbo V8 engine in the BMW M5 CS produces 635 HP, making it the most powerful BMW engine to date.",
      },
      {
        question: "What is the cost of a reconditioned BMW engine?",
        answer:
          "Reconditioned BMW engines typically cost between £2,000 and £6,000, depending on the engine type and model.",
      },
      {
        question: "Can I install a used BMW engine myself?",
        answer:
          "While it's possible, installing a used BMW engine requires specialized tools and expertise. We recommend hiring a professional mechanic for the job.",
      },
      {
        question: "What is the best BMW engine for a daily driver?",
        answer:
          "The B48 2.0L turbo petrol engine is an excellent choice for daily driving, offering a balance of performance, efficiency, and reliability.",
      },
      {
        question: "Where can I buy a BMW engine at the best price?",
        answer:
          "At EnginesMarket.co.uk, we connect you with multiple trusted sellers to ensure you get the best price for your BMW engine replacement.",
      },
    ],
  },
};
