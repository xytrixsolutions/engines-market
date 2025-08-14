import Accent from "./Accent";
import Container from "./Container";
import Heading from "./Heading";
import * as motion from "motion/react-client";
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

// Variants for staggered children
const listVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Delay between each item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Inner content animation (on accordion open)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
      <Container dark className="py-20 text-charcoal-gray-muted" id="faqs">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Heading className="text-center text-charcoal-gray-muted">
            {brandName ? (
              <>
                Frequently Asked Questions about <Accent>{brandName}</Accent>
              </>
            ) : (
              <>
                Frequently <Accent>Asked Questions</Accent>
              </>
            )}
          </Heading>
        </motion.div>

        {/* Accordion List with Staggered Entrance */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.1 }}
          className="mt-6 max-h-96 overflow-y-auto pr-2 space-y-2"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl my-1 bg-white"
                >
                  <AccordionTrigger className="px-5 py-4 text-left text-gray-800 font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent asChild>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="px-5 pb-4 text-sm text-gray-700 space-y-2"
                    >
                      {faq.answer && (
                        <motion.p variants={fadeInUp}>{faq.answer}</motion.p>
                      )}

                      {faq.answerList && (
                        <motion.ul className="list-disc pl-6 space-y-1">
                          {faq.answerList.map((point, i) => (
                            <motion.li key={i} variants={fadeInUp}>
                              {point}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-sm text-charcoal-gray-muted text-center"
        >
          Still Searching for the Answer You Need?{" "}
          <a href="#" className="text-neon-red hover:underline">
            View FAQ Page
          </a>{" "}
          or{" "}
          <a href="#" className="text-neon-red hover:underline">
            Contact Us
          </a>
        </motion.div>
      </Container>
    </>
  );
};

export default FAQSection;
