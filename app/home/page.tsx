import TestimonialSection from "@/components/Testimonials";
import Hero1 from "../../components/Hero1";
import Hero3 from "../../components/Hero3";
import HowItWorks from "./components/HowItWorks";
import WhyChoose from "./components/WhyChoose";
import TrustBadges from "./components/TrustBadges";
import BlogCards from "./components/Blog";
import FAQSection, { FAQ } from "@/components/FAQs";
import EngineDealSection from "./components/EngineDealSection";

export default function Home() {
  const carImages = [
    "/banners/banner-1.webp",
    "/banners/banner-2.webp",
    "/banners/banner-3.webp",
    "/banners/banner-4.webp",
    "/banners/banner-5.webp",
  ];

  const faqs: FAQ[] = [
    {
      question: "What is Engine Market, and how does it work?",
      answer:
        "Engine Market is the UK’s largest engine marketplace, connecting you with 100s of verified suppliers. Simply enter your car registration, compare multiple quotes from different sellers, and choose the best deal. We ensure competitive pricing, stock availability, and a seamless buying experience.",
    },
    {
      question:
        "What are reconditioned engines, and how do they compare to new and used engines?",
      answer:
        "Reconditioned engines are second-hand engines that have been professionally restored to meet manufacturer specifications. Unlike new engines (which come straight from the factory) or used engines (which are sold as-is), reconditioned engines offer a balance of affordability and reliability, often with a 12 to 18-month warranty.",
    },
    {
      question: "What type of warranty do your engines come with?",
      answer:
        "Engine Market itself does not offer warranties, but our verified suppliers do.",
      answerList: [
        "Used engines typically come with a 30-day to 6-month warranty, depending on the supplier.",
        "Reconditioned engines usually have a 12 to 18-month warranty, offering better protection.",
        "Always check the warranty details when receiving your quotes.",
      ],
    },
    {
      question: "How can I find the right engine for my car?",
      answer:
        "Our system makes it easy—just enter your vehicle registration, and we’ll match you with the correct engine options. You can compare different engine types, prices, and warranties from multiple sellers before making a decision.",
    },
    {
      question: "How much does an engine replacement cost in the UK?",
      answer:
        "Engine replacement costs vary based on the vehicle make, model, and engine type:",
      answerList: [
        "Used engines: £500 – £3,000",
        "Reconditioned engines: £1,200 – £4,500",
        "New engines: £3,500+",
        "Labour costs range between £500 – £1,500, depending on complexity.",
      ],
    },
    {
      question:
        "What’s the difference between used, reconditioned, and new engines?",
      answerList: [
        "Used Engines: Removed from another vehicle, minimal refurbishments, cheaper but shorter warranty.",
        "Reconditioned Engines: Professionally refurbished with new parts, longer lifespan, moderate pricing.",
        "New Engines: Direct from the manufacturer, highest cost, longest lifespan.",
      ],
    },
    {
      question: "How long does it take to receive my engine after ordering?",
      answer:
        "Delivery times vary based on supplier stock and location, but most orders are fulfilled within 3-7 working days. Some suppliers also offer express delivery options.",
    },
    {
      question: "Can I get my engine fitted by Engine Market?",
      answer:
        "Engine Market does not offer installation directly, but many of our suppliers work with garages that can provide professional fitting services. You can request a quote for engine supply and fitting from our marketplace.",
    },
    {
      question:
        "Do you offer pick-up and drop-off services for engine replacement?",
      answer:
        "Yes! If you're too far from a garage offering engine fitting, some suppliers provide a pick-up and drop-off service, making the replacement process hassle-free.",
    },
    {
      question: "Are reconditioned engines as good as new ones?",
      answer:
        "While they may not last as long as a brand-new engine, a properly reconditioned engine can offer near-new performance and reliability. Many come with a 12 to 18-month warranty, making them a popular choice for cost-conscious buyers.",
    },
    {
      question: "Can I sell my old or faulty engine through Engine Market?",
      answer:
        "Currently, Engine Market focuses on helping customers find and purchase engines. However, some suppliers may accept old engines as part of a trade-in or exchange program.",
    },
    {
      question: "What should I check before buying a used engine?",
      answerList: [
        "Mileage & Age – Lower mileage engines typically last longer.",
        "Service History – Well-maintained engines are more reliable.",
        "Warranty Coverage – Opt for suppliers offering at least 30 days warranty.",
        "Compatibility – Ensure the engine matches your vehicle’s specifications.",
      ],
    },
    {
      question:
        "Do you supply performance engines for tuning or modifications?",
      answer:
        'Yes! We offer performance engines, including turbocharged, supercharged, and high-output engines for sports cars and modified vehicles. Simply enter your car details and mention "performance engine" in the request.',
    },
    {
      question: "What common engine issues should I watch out for?",
      answer: "Some common problems include:",
      answerList: [
        "Oil Leaks – Can lead to engine failure if not addressed.",
        "Timing Belt/Chain Failure – Can cause severe damage if broken.",
        "Overheating Issues – Often caused by a faulty cooling system.",
        "Misfiring or Loss of Power – Usually due to fuel or ignition issues.",
        "Regular servicing helps prevent these problems.",
      ],
    },
    {
      question: "How does Engine Market guarantee the lowest price?",
      answer:
        "We work with 100s of verified suppliers, allowing you to compare multiple quotes. This ensures competitive pricing, so you get the best deal available without overpaying.",
    },
    {
      question: "Are hybrid and electric vehicle (EV) engines available?",
      answer:
        "Yes! While our main focus is on petrol and diesel engines, we also have hybrid and electric engine replacements available. However, availability may be more limited.",
    },
    {
      question: "Can I finance my engine purchase?",
      answer:
        "Engine Market itself does not offer financing, but some suppliers provide flexible payment options or financing plans. You can inquire about this when receiving your quotes.",
    },
    {
      question: "What happens if the engine I receive is faulty?",
      answer: "All our suppliers are vetted, but if an issue arises:",
      answerList: [
        "Contact the supplier immediately.",
        "Refer to the warranty terms (used engines: 30 days – 6 months, reconditioned: 12 – 18 months).",
        "Many suppliers offer exchanges or refunds if the engine is faulty upon delivery.",
      ],
    },
    {
      question: "Is buying a used engine worth it?",
      answer:
        "Used engines can be a cost-effective solution if sourced from a reliable supplier. However, reconditioned engines often offer better reliability and warranties, making them a better long-term investment.",
    },
    {
      question: "How do I get started with Engine Market?",
      answer:
        "It’s simple! Just enter your car registration, compare multiple quotes, and choose the best deal from our 100s of trusted suppliers. Click [Get Your Free Quote Now] to begin!",
    },
  ];
  return (
    <>
      <Hero1 carImages={carImages} />
      <EngineDealSection />
      <Hero3 />
      <WhyChoose />
      <HowItWorks />
      <TestimonialSection />
      <TrustBadges />
      <BlogCards />
      <FAQSection faqs={faqs} />
    </>
  );
}
