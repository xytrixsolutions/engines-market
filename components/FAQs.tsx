"use client";

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

const FAQSection = ({ faqs }: { faqs: FAQ[] }) => {
  return (
    <Container className=" py-20">
      <Heading className="text-center">Frequently Asked Questions</Heading>

      <Accordion type="single" collapsible className="w-full space-y-2 ">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 rounded-xl bg-white"
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

      <div className="mt-10 text-sm text-gray-500 text-center">
        Still Searching for the Answer You Need?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          View FAQ Page
        </a>{" "}
        or{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Contact Us
        </a>
      </div>
    </Container>
  );
};

export default FAQSection;
