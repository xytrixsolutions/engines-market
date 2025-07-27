import React from "react";
import { Column, EngineData } from "../types/engine";

export const ENGINE_TABLE_COLUMNS: Column<EngineData>[] = [
  { key: "engine_code", label: "Engine Code" },
  { key: "make", label: "Make" },
  { key: "models", label: "Compatible Models" },
  { key: "valves", label: "Valves" },
  { key: "displacement", label: "Displacement (CC)" },
  { key: "power", label: "Power (kW/HP)" },
  { key: "fuel_type", label: "Fuel Type" },
  { key: "year_range", label: "Year Range" },
  {
    key: "action",
    label: "Request Quote",
    render: () => (
      <button className="bg-royal-blue hover:bg-transparent border-2 border-royal-blue text-white hover:text-royal-blue font-semibold px-4 py-2 rounded-full transition-all duration-200">
        Get Quote
      </button>
    ),
  },
];
