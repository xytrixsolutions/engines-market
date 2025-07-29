import { JSX } from "react";
import Hero1 from "../../components/Hero1";
import WhyChoose from "./components/WhyChoose";
import EngineGuide from "./components/EngineGuide";
import EngineTablesTabs from "./components/EngineTablesTabs";
import EngineProblemsSection from "./components/EngineProblemsSection";
import EngineProsCons from "./components/EngineProsCons";
import TroubleshootingGuide from "./components/TroubleShoot";
import PerformanceUpgrades from "./components/PerformanceUpgrades";
import EngineDealsCTA from "./components/EngineDealsCTA";
import FAQSection, { FAQ } from "@/components/FAQs";

const Page = (): JSX.Element => {
  const carImages = [
    "/banners/banner-1.webp",
    "/banners/banner-2.webp",
    "/banners/banner-3.webp",
    "/banners/banner-4.webp",
    "/banners/banner-5.webp",
  ];
  
  const carModelNames = [
    "BMW X5",
    "Audi A6",
    "Mercedes C-Class",
    "Range Rover Evoque",
    "Volkswagen Golf",
  ];

  const faqs: FAQ[] = [
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
      question: "Can I install a BMW engine from a different model in my car?",
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
      question: "Can I replace my BMW engine with a different model’s engine?",
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
        "While it’s possible, installing a used BMW engine requires specialized tools and expertise. We recommend hiring a professional mechanic for the job.",
    },
    {
      question: "What is the best BMW engine for a daily driver?",
      answer:
        "The B48 2.0L turbo petrol engine is an excellent choice for daily driving, offering a balance of performance, efficiency, and reliability.",
    },
    {
      question: "Where can I buy a BMW engine at the best price?",
      answer:
        "At EnginesMarket.co.uk, we offer the best prices on new, used, and reconditioned BMW engines. Request a quote today to find the perfect engine for your needs.",
    },
  ];
  return (
    <>
      <Hero1 carImages={carImages} carModelNames={carModelNames} />
      <WhyChoose />
      <EngineGuide />
      <EngineTablesTabs />
      <EngineProblemsSection />
      <EngineProsCons />
      <TroubleshootingGuide />
      <PerformanceUpgrades />
      <EngineDealsCTA />
      <FAQSection faqs={faqs} />
    </>
  );
};
export default Page;
