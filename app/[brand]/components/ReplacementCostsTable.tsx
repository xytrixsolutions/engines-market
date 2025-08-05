"use client";
import { FC, useState } from "react";
import EngineTable from "./EngineTable";
import { REPLACEMENT_COST_COLUMNS } from "../constants/tableColumns";
import Container from "@/components/Container";
import { data } from "../data/data";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "@/components/Button";
import SummaryCard from "@/components/SummaryCard";

const ReplacementCostsTable: React.FC<{ brand: string }> = ({
  brand: brand,
}) => {
  const router = useRouter();
  const [registration, setRegistration] = useState("");
  const columns = REPLACEMENT_COST_COLUMNS;
  const { replacement_costs } = data[brand].engineData;
  const { brandName } = data[brand];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registration) {
      router.push(
        `/contact?reg=${encodeURIComponent(registration)}&source=form`
      );
    }
  };

  return (
    <Container className="my-16" id="engine-replacement-cost">
      {/* Heading and Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3 text-charcoal-gray">
          Average <span className="text-neon-red">Engine Replacement</span> Cost
          Estimates
        </h2>
        <p className="text-lg text-muted-foreground mb-2">
          Get an idea of what it costs to replace your engine based on your
          vehicle model and engine type. This table shows estimated price ranges
          for used, reconditioned, and refurbished engines, with or without
          fitting included. While actual quotes may vary, this section helps set
          expectations. Request tailored engine quotes directly from this table
          based on your needs.
        </p>
      </div>
      {/* Table */}
      <EngineTable
        columns={columns}
        data={replacement_costs}
        tableType={"replacement_costs"}
      />
      <SummaryCard
        variant="card"
        title="Need Help Choosing?"
        content={`Engine replacement costs in the UK can vary depending on the engine type, condition (used vs. reconditioned), and whether fitting is included. This price table offers real-world averages so you know what to expect before getting quotes. Customers often search for phrases like “engine replacement cost UK” or “how much is a reconditioned engine for ${brandName}” and this section gives you a solid benchmark. For accurate pricing based on your specific vehicle and preferred fitting option, request a tailored quote directly from the table above.`}
      />
      {/* CTA Section - Updated to Match Screenshot */}
      <div
        id="cta2"
        className="bg-gray-100 rounded-3xl shadow-2xl drop-shadow-2xl py-12 px-6 text-center mt-20"
        style={{
          boxShadow: "0 0 100px rgba(255, 255, 255, 0.35)",
        }}
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Find the Best Replacement Engine Deals for Your {brandName}
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Looking for a reliable, cost-effective engine replacement? With
          Engines Market, getting the right engine for your {brandName} has
          never been easier.
        </p>

        <p className="mx-auto text-base font-semibold text-blue-800 mb-4 max-w-3xl ">
          Simply enter your Reg Num below, and we’ll instantly search trusted UK
          suppliers and local garages to bring you the best available engine
          deals.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-sm">
              {/* Number plate container with shared background and border */}
              <div className="flex items-center border-2 border-black rounded-lg overflow-hidden bg-[#ffcb05]">
                {/* Flag container */}
                <div className="w-10 h-16 relative flex-shrink-0">
                  <Image
                    src="/Home/uknumberplate.png"
                    alt="UK Flag"
                    fill
                    className="object-cover ml-[-1px]"
                  />
                </div>

                {/* Input field - now properly centered without interference */}
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

          {/* Centered Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-full max-w-xs border-2 text-white py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 mb-4 before:bg-gray-100"
            >
              <span>Get Free Quotes Now</span>
              <FiArrowUpRight className="w-5 h-5" />
            </Button>
          </div>
        </form>

        {/* Bottom text */}
        <p className="mt-6 text-sm text-gray-600 max-w-lg mx-auto">
          We match your exact vehicle details to quality recycled, reconditioned
          and Rebuilt - saving you time, money, and hassle. Fast, simple, and
          stress-free.
        </p>
        {/* Bottom text */}
        <p className="mt-6 text-sm text-blue-600  mx-auto">
          🇬🇧 Trusted by thousands across the UK | Free, no-obligation quotes |
          Direct supplier access
        </p>
      </div>
    </Container>
  );
};

export default ReplacementCostsTable;
