"use client";
import React, { useState } from "react";
import EngineTable from "./EngineTable";
import ENGINE_DATA from "../data/engineData.json";
import { REPLACEMENT_COST_COLUMNS } from "../constants/tableColumns";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const ReplacementCostsTable: React.FC = () => {
  const columns = REPLACEMENT_COST_COLUMNS;
  const data = ENGINE_DATA["replacement_costs"];
  const [reg, setReg] = useState("");

  return (
    <Container className="my-16">
      {/* Heading and Description */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-3 text-royal-blue">
          Average Engine Replacement Cost Estimates
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
      {/* Note */}
      <div className="w-full bg-blue-50 border-t border-b border-blue-200 py-10 my-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-blue-700 font-bold text-lg mb-2">
            Need Help Choosing?
          </div>
          <div className="text-black text-base font-normal">
            Engine replacement costs in the UK can vary depending on the engine
            type, condition (used vs. reconditioned), and whether fitting is
            included. This price table offers real-world averages so you know
            what to expect before getting quotes. Customers often search for
            phrases like “engine replacement cost UK” or “how much is a
            reconditioned engine for BMW” and this section gives you a solid
            benchmark. For accurate pricing based on your specific vehicle and
            preferred fitting option, request a tailored quote directly from the
            table above.
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-lg py-10 px-6 max-w-2xl mx-auto flex flex-col items-center mb-4">
        <h3 className="text-2xl font-bold text-center text-royal-blue mb-2">
          Still Unsure Which is The Right Engine!!!
        </h3>
        <p className="text-lg font-semibold text-center text-blue-700 mb-1">
          Why Not Try Our Accurate DVLA Reg Lookup Tool!
        </p>
        <p className="text-base text-center text-muted-foreground mb-4">
          Simply Enter Your Vehicle Reg Here & Let us Find Your Engine
          Accurately!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center mb-4">
          <input
            type="text"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
            placeholder="Enter Vehicle Reg..."
            className="w-full sm:w-64 px-4 py-3 rounded border border-border text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-neon-red bg-white shadow"
            maxLength={12}
            autoCapitalize="characters"
          />
          <Button className="w-full sm:w-auto px-8 py-3 text-lg font-bold rounded bg-neon-red text-white hover:bg-red-600 transition-all mt-2 sm:mt-0">
            Request Free Quote
          </Button>
        </div>
        {/* Placeholder image for CTA */}
        <div className="mt-4">
          <img
            src="/images/number-plate-uk.png"
            alt="UK Number Plate Example"
            className="h-16 rounded shadow border border-border mx-auto"
            style={{ background: "#ffe600" }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      </div>
    </Container>
  );
};

export default ReplacementCostsTable;
