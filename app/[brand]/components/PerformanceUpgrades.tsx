// import * as motion from "motion/react-client";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { CheckCircle, Info } from "lucide-react";
// import Heading from "@/components/Heading";
// import Paragraph from "@/components/Paragraph";
// import Accent from "@/components/Accent";
// import SummaryCard from "@/components/SummaryCard";
// import { data } from "@/data/brands";
// import { FC } from "react";
//
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// };
//
// const staggerContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1 } },
// };
//
// const getLevelColor = (level: string) => {
//   switch (level) {
//     case "Beginner":
//       return "secondary";
//     case "Progressive":
//       return "default";
//     case "Advanced":
//       return "outline";
//     case "Expert":
//       return "destructive";
//     case "Important":
//       return "default";
//     default:
//       return "default";
//   }
// };
//
// const PerformanceUpgrades: FC<{ brand: string }> = ({ brand }) => {
//   const { section9, brandName } = data[brand];
//   return (
//     <>
//       {/* Heading Section */}
//       <motion.div
//         className="max-w-6xl mx-auto text-center space-y-4 mb-12 text-charcoal-gray-muted"
//         variants={fadeUp}
//         initial="hidden"
//         animate="show"
//       >
//         <Heading className="text-charcoal-gray-muted">
//           Performance Upgrades & Modifications for
//           <Accent>{brandName} Engines</Accent>
//         </Heading>
//         <Paragraph className="mb-1">
//           Common <strong>Tuning Options</strong> for{" "}
//           <strong>Performance Enthusiasts</strong>{" "}
//           <strong>{brandName} engines</strong> are highly regarded for their
//           <strong> performance potential</strong>, and there are numerous
//           <strong> tuning options</strong> available for enthusiasts looking to
//           enhance their vehicle&apos;s <strong>power</strong> and{" "}
//           <strong>responsiveness</strong>. Here are some of the most popular
//           tuning options:
//         </Paragraph>
//       </motion.div>
//
//       {section9?.performanceUpgrades && (
//         <motion.div
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//           initial="hidden"
//           animate="show"
//         >
//           <Accordion
//             type="single"
//             collapsible
//             defaultValue={section9.performanceUpgrades[0]?.id}
//             className="space-y-4"
//           >
//             {section9.performanceUpgrades.map((section) => (
//               <motion.div key={section.id} variants={fadeUp}>
//                 <AccordionItem
//                   value={section.id}
//                   className="rounded-xl bg-card shadow-sm gradient-border"
//                 >
//                   <AccordionTrigger className="px-6 py-4 font-semibold text-lg text-royal-blue flex items-center justify-between select-none rounded-t-xl transition-all duration-300 hover:no-underline">
//                     <div className="flex items-center gap-3">
//                       {section.icon}
//                       <span>{section.title}</span>
//                     </div>
//                     <Badge
//                       variant={getLevelColor(section.level)}
//                       className="ml-auto mr-4"
//                     >
//                       {section.level}
//                     </Badge>
//                   </AccordionTrigger>
//                   <AccordionContent className="px-6 pb-5 pt-4 transition-all duration-300">
//                     {/* Content now static — no motion/stagger inside */}
//                     {section.upgrades && (
//                       <div className="grid gap-4 md:grid-cols-2">
//                         {section.upgrades.map((upgrade, idx) => (
//                           <Card
//                             key={idx}
//                             className="border-l-4 border-l-blue-500"
//                           >
//                             <CardHeader className="pb-3">
//                               <CardTitle className="text-base flex items-center gap-2">
//                                 {upgrade.icon}
//                                 {upgrade.name}
//                               </CardTitle>
//                             </CardHeader>
//                             <CardContent className="space-y-3">
//                               <p className="text-sm text-muted-foreground">
//                                 {upgrade.description}
//                               </p>
//                               <div className="space-y-2">
//                                 <div className="flex items-start gap-2">
//                                   <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
//                                   <div>
//                                     <span className="font-semibold text-green-700 text-sm">
//                                       Benefits:
//                                     </span>{" "}
//                                     <span className="text-sm">
//                                       {upgrade.benefits}
//                                     </span>
//                                   </div>
//                                 </div>
//                                 <div className="flex items-start gap-2">
//                                   <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
//                                   <div>
//                                     <span className="font-semibold text-amber-700 text-sm">
//                                       Considerations:
//                                     </span>{" "}
//                                     <span className="text-sm">
//                                       {upgrade.considerations}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </CardContent>
//                           </Card>
//                         ))}
//                       </div>
//                     )}
//
//                     {section.stages && (
//                       <div className="space-y-4">
//                         {section.stages.map((stage, idx) => (
//                           <Card
//                             key={idx}
//                             className="border-l-4 border-l-blue-500"
//                           >
//                             <CardHeader className="pb-3">
//                               <CardTitle className="text-base flex items-center gap-2">
//                                 {stage.stage}
//                               </CardTitle>
//                             </CardHeader>
//                             <CardContent className="space-y-3">
//                               <p className="text-sm text-muted-foreground">
//                                 {stage.description}
//                               </p>
//                               <div className="space-y-2">
//                                 <div className="flex items-start gap-2">
//                                   <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
//                                   <div>
//                                     <span className="font-semibold text-green-700 text-sm">
//                                       Benefits:
//                                     </span>{" "}
//                                     <span className="text-sm">
//                                       {stage.benefits}
//                                     </span>
//                                   </div>
//                                 </div>
//                                 <div className="flex items-start gap-2">
//                                   <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
//                                   <div>
//                                     <span className="font-semibold text-amber-700 text-sm">
//                                       Considerations:
//                                     </span>{" "}
//                                     <span className="text-sm">
//                                       {stage.considerations}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </CardContent>
//                           </Card>
//                         ))}
//                       </div>
//                     )}
//
//                     {section.content && (
//                       <div className="space-y-4">
//                         <p className="text-sm text-muted-foreground">
//                           {section.content.description}
//                         </p>
//                         {section.content.points && (
//                           <ul className="list-disc pl-6 space-y-2">
//                             {section.content.points.map((point, idx) => (
//                               <li key={idx}>
//                                 <span className="font-semibold">
//                                   {point.title}:
//                                 </span>{" "}
//                                 {point.description}
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     )}
//                   </AccordionContent>
//                 </AccordionItem>
//               </motion.div>
//             ))}
//           </Accordion>
//         </motion.div>
//       )}
//
//       {section9?.summary && (
//         <motion.div variants={fadeUp} initial="hidden" animate="show">
//           <SummaryCard
//             variant={
//               section9.summary.variant as
//                 | "blue"
//                 | "card"
//                 | "green"
//                 | "performance"
//                 | undefined
//             }
//             title={section9.summary.title}
//             content={section9.summary.content}
//           />
//         </motion.div>
//       )}
//     </>
//   );
// };
//
// export default PerformanceUpgrades;
import * as motion from "motion/react-client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Info } from "lucide-react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Accent from "@/components/Accent";
import SummaryCard from "@/components/SummaryCard";
import { data } from "@/data/brands";
import { FC } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

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

const PerformanceUpgrades: FC<{ brand: string }> = ({ brand }) => {
  const { section9, brandName } = data[brand];
  return (
    <>
      {/* Heading Section */}
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-4 mb-12 text-charcoal-gray-muted"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading className="text-charcoal-gray-muted">
          Performance Upgrades & Modifications for
          <Accent>{brandName} Engines</Accent>
        </Heading>
        <Paragraph className="mb-1">
          Common <strong>Tuning Options</strong> for{" "}
          <strong>Performance Enthusiasts</strong>{" "}
          <strong>{brandName} engines</strong> are highly regarded for their
          <strong> performance potential</strong>, and there are numerous
          <strong> tuning options</strong> available for enthusiasts looking to
          enhance their vehicle&apos;s <strong>power</strong> and{" "}
          <strong>responsiveness</strong>. Here are some of the most popular
          tuning options:
        </Paragraph>
      </motion.div>

      {section9?.performanceUpgrades && (
        <Accordion
          type="single"
          collapsible
          defaultValue={section9.performanceUpgrades[0]?.id}
          className="space-y-4"
        >
          {section9.performanceUpgrades.map((section, idx) => (
            <motion.div
              key={section.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
            >
              <AccordionItem
                value={section.id}
                className="rounded-xl bg-card shadow-sm gradient-border"
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
                  {/* Content is static, no animations */}
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
                                  </span>{" "}
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
                                  </span>{" "}
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
                                  </span>{" "}
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
                                  </span>{" "}
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
                              </span>{" "}
                              {point.description}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      )}

      {section9?.summary && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SummaryCard
            variant={
              section9.summary.variant as
                | "blue"
                | "card"
                | "green"
                | "performance"
                | undefined
            }
            title={section9.summary.title}
            content={section9.summary.content}
          />
        </motion.div>
      )}
    </>
  );
};

export default PerformanceUpgrades;
