"use client";

import Accent from "./Accent";
import Container from "./Container";
import Heading from "./Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export type FAQ = {
  question: string;
  answer?: string;
  answerList?: string[];
};

const FAQSection = ({
  faqs,
  brandName,
}: {
  faqs: FAQ[];
  brandName?: string;
}) => {
  return (
    <>
      <style jsx>
        {`
          [data-aos] {
            transform: none !important;
            opacity: 1 !important;
          }
        `}
      </style>
      <Container dark className="py-20 text-charcoal-gray-muted" id="faqs">
        {brandName && (
          <Heading
            className="text-center text-charcoal-gray-muted"
            data-aos="fade-up"
          >
            Frequently Asked Questions about <Accent>{brandName}</Accent>
          </Heading>
        )}
        {!brandName && (
          <Heading
            className="text-center text-charcoal-gray-muted"
            data-aos="fade-up"
          >
            Frequently <Accent>Asked Questions</Accent>
          </Heading>
        )}

        {/* Scrollable container for all FAQs */}
        <div className="mt-6 max-h-96 overflow-y-auto pr-2 space-y-2">
          <Accordion
            data-aos="fade-up"
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl my-1 bg-white"
              >
                <AccordionTrigger className="px-5 py-4 text-left text-gray-800 font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-sm text-gray-700 space-y-2">
                  {faq.answer && <p>{faq.answer}</p>}
                  {faq.answerList && (
                    <ul className="list-disc pl-6 space-y-1">
                      {faq.answerList.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-sm text-charcoal-gray-muted text-center">
          Still Searching for the Answer You Need?{" "}
          <a href="#" className="text-neon-red hover:underline">
            View FAQ Page
          </a>{" "}
          or{" "}
          <a href="#" className="text-neon-red hover:underline">
            Contact Us
          </a>
        </div>
      </Container>
    </>
  );
};

export default FAQSection;
