"use client";
import { useState } from "react";
import EngineTable from "./EngineTable";
import { REPLACEMENT_COST_COLUMNS } from "../constants/tableColumns";
import Container from "@/components/Container";
import { data } from "../../../data/brands";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "@/components/Button";
import SummaryCard from "@/components/SummaryCard";
import Accent from "@/components/Accent";
import { motion } from "framer-motion";

const ReplacementCostsTable: React.FC<{ brand: string }> = ({ brand }) => {
  const router = useRouter();
  const [registration, setRegistration] = useState("");
  const columns = REPLACEMENT_COST_COLUMNS;
  const { replacement_costs } = data[brand].engineData;
  const { brandName } = data[brand];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registration) {
      router.push(
        `/contact?reg=${encodeURIComponent(registration)}&source=form`,
      );
    }
  };

  return (
    <Container className="my-16" id="engine-replacement-cost">
      {/* Heading and Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-3 text-charcoal-gray">
          Estimated <Accent>Engines Replacement</Accent> Costs for {brandName}{" "}
          Models
        </h2>
        <p className="text-lg text-muted-foreground mb-2">
          Below is a table with estimated replacement costs for various{" "}
          {brandName} models and engine types. Prices can vary significantly
          based on model, engine type, parts, and labour.
        </p>
      </motion.div>

      {/* Table */}
      <EngineTable
        columns={columns}
        data={replacement_costs}
        tableType="replacement_costs"
      />

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8"
      >
        <SummaryCard
          variant="card"
          title="Need Help Choosing?"
          content={`These estimates provide a general idea of the costs involved in replacing a ${brandName} engine. Prices can vary based on location, availability of parts, and the specific service provider.`}
        />
      </motion.div>

      {/* CTA Section - Cascading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.5 }}
        id="cta2"
        className="bg-gray-100 rounded-3xl py-12 px-6 text-center mt-20"
        style={{
          boxShadow: "0 0 100px rgba(255, 255, 255, 0.35)",
        }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Find the Best Replacement Engine Deals for Your {brandName}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg text-gray-700 mb-6"
        >
          Looking for a reliable, cost-effective engine replacement? With
          Engines Market, getting the right engine for your {brandName} has
          never been easier.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto text-base font-semibold text-blue-800 mb-4 max-w-3xl"
        >
          Simply enter your Reg Number below, and we’ll instantly search trusted
          UK suppliers and local garages to bring you the best available engine
          deals.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-sm">
              <div className="flex items-center border-2 border-black rounded-lg overflow-hidden bg-[#ffcb05]">
                <div className="w-10 h-16 relative flex-shrink-0">
                  <Image
                    src="/Home/uknumberplate.png"
                    alt="UK Flag"
                    fill
                    className="object-cover ml-[-1px]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Reg Number Here"
                  value={registration}
                  onChange={(e) =>
                    setRegistration(e.target.value.toUpperCase())
                  }
                  className="w-full py-4 text-xl font-semibold text-gray-700 bg-transparent focus:outline-none text-center placeholder:text-center"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-full max-w-xs border-2 text-white py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 mb-4 before:bg-gray-100"
            >
              <span>Get Free Quotes Now</span>
              <FiArrowUpRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.form>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-6 text-sm text-gray-600 max-w-lg mx-auto"
        >
          We match your exact vehicle details to quality recycled,
          reconditioned, and rebuilt engines — saving you time, money, and
          hassle. Fast, simple, and stress-free.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-6 text-sm text-blue-600 mx-auto"
        >
          🇬🇧 Trusted by thousands across the UK | Free, no-obligation quotes |
          Direct supplier access
        </motion.p>
      </motion.div>
    </Container>
  );
};

export default ReplacementCostsTable;
