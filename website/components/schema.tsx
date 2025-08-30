import { data } from "@/data/brands";
import Script from "next/script";

interface BrandSchemaProps {
  brand: string;
}

export default function BrandSchema({ brand }: BrandSchemaProps) {
  const pathname = `/${brand}`;
  const brandData = data[brand];

  if (!brandData) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    name: brandData.metadata?.title || `${brandData.brandName} Engine Guide`,
    description:
      brandData.metadata?.description ||
      `Comprehensive guide to ${brandData.brandName} engines`,
    url: `https://yourdomain.com${pathname}`,
    keywords: brandData.metadata?.keywords?.join(", ") || "",
    about: {
      "@type": "Car",
      brand: {
        "@type": "Brand",
        name: brandData.brandName,
      },
    },
    hasPart: [
      // Engine Problems
      {
        "@type": "WebPageElement",
        name: "Common Problems",
        description: `Common ${brandData.brandName} engine issues and solutions`,
        hasPart: brandData.section4.EngineProblems.map((problem) => ({
          "@type": "HowTo",
          name: problem.title,
          step: [
            {
              "@type": "HowToStep",
              text: `Problem: ${problem.problem}`,
            },
            {
              "@type": "HowToStep",
              text: `Solution: ${problem.solution}`,
            },
          ],
        })),
      },

      // Engine Models
      {
        "@type": "ProductCollection",
        name: "Engine Models",
        description: `Available ${brandData.brandName} engine models`,
        hasPart: brandData.engineData.engine_codes.map((engine) => ({
          "@type": "Product",
          name: `${engine.engineCode} Engine`,
          description: `${engine.engineSize}L ${engine.fuelType} ${engine.turbo ? "Turbocharged" : ""} Engine`,
          brand: {
            "@type": "Brand",
            name: brandData.brandName,
          },
          vehicleEngine: {
            "@type": "EngineSpecification",
            engineDisplacement: {
              "@value": engine.engineSize,
              "@unit": "L",
            },
            fuelType: engine.fuelType,
            enginePower: {
              "@value": engine.horsepower,
              "@unit": "HP",
            },
          },
        })),
      },

      // Replacement Costs
      {
        "@type": "OfferCatalog",
        name: "Replacement Costs",
        itemListElement: brandData.engineData.replacement_costs.map(
          (item, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Engine",
              name: `${item.model} ${item.engineType}`,
            },
            price: item.estimatedCost,
            priceCurrency: "GBP",
          }),
        ),
      },
    ],
    mainEntity: brandData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer || faq.answerList?.join(" ") || "",
      },
    })),
  };

  return (
    <Script
      id="schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
