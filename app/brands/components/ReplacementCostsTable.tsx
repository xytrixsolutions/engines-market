"use client";
import { FC } from "react";
import EngineTable from "./EngineTable";
import ENGINE_DATA from "../data/engineData.json";
import { REPLACEMENT_COST_COLUMNS } from "../constants/tableColumns";
import Container from "@/components/Container";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "@/components/Button";
import SummaryCard from "@/components/SummaryCard";

const ReplacementCostsTable: FC = () => {
  const columns = REPLACEMENT_COST_COLUMNS;
  const data = ENGINE_DATA["replacement_costs"];

  return (
    <Container className="my-16">
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
      <EngineTable columns={columns} data={data} />
      <SummaryCard
        variant="card"
        title="Need Help Choosing?"
        content="Engine replacement costs in the UK can vary depending on the engine type, condition (used vs. reconditioned), and whether fitting is included. This price table offers real-world averages so you know what to expect before getting quotes. Customers often search for phrases like “engine replacement cost UK” or “how much is a reconditioned engine for BMW” and this section gives you a solid benchmark. For accurate pricing based on your specific vehicle and preferred fitting option, request a tailored quote directly from the table above."
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
          Ready to Get Engine Quotes?
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Enter your vehicle registration number and let Engine Finders find you
          the best replacement engine deals on Jaguar & Land Rover.
        </p>

        <p className="text-base font-semibold text-blue-800 mb-4">
          Just Add Your Reg & Click Go - It&apos;s That Simple
        </p>

        {/* REG Input */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-sm">
            <div className="absolute top-1/2 transform -translate-y-1/2">
              <div className="w-10 h-16 relative">
                <Image
                  src="/Home/uknumberplate.png"
                  alt="UK Flag"
                  fill
                  className="object-cover rounded-l-md"
                />
              </div>
            </div>

            <input
              type="text"
              placeholder="REG HERE"
              className="w-full text-center py-4 text-lg font-semibold text-gray-700 bg-[#ffcb05] border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Centered Button */}
        <div className="flex justify-center">
          <Button className="w-full max-w-xs border-2 text-white py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 mb-4">
            <span>Get Free Quote Now</span>
            <FiArrowUpRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-sm text-gray-600 max-w-md mx-auto">
          Engine Finders instantly matches your vehicle with our trusted engine
          suppliers and garages near you. Save time. Save money. No stress.
        </p>
      </div>
    </Container>
  );
};

export default ReplacementCostsTable;
