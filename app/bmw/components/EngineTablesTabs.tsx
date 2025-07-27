"use client";
import React, { useState } from "react";
import EngineTable from "./EngineTable";

const tabs = [
  { key: "range_rover", label: "RANGE ROVER" },
  { key: "land_rover", label: "LAND ROVER" },
  { key: "bmw", label: "BMW" },
  { key: "mercedes_benz", label: "MERCEDES-BENZ" },
  { key: "jaguar_engines", label: "JAGUAR ENGINES" },
  { key: "other", label: "OTHER" },
];

const columns = [
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

const engineData = {
  range_rover: [
    {
      engine_code: "204DTA",
      make: "Range Rover",
      models: "Evoque, Velar",
      valves: 16,
      displacement: 1999,
      power: "177 kW / 241 HP",
      fuel_type: "Diesel",
      year_range: "2014-continue",
    },
  ],
  land_rover: [
    {
      engine_code: "AJ200",
      make: "Land Rover",
      models: "Discovery Sport",
      valves: 16,
      displacement: 1999,
      power: "147 kW / 197 HP",
      fuel_type: "Petrol",
      year_range: "2015-continue",
    },
  ],
  bmw: [
    {
      engine_code: "N47D20",
      make: "BMW",
      models: "320d, 520d",
      valves: 16,
      displacement: 1995,
      power: "135 kW / 184 HP",
      fuel_type: "Diesel",
      year_range: "2007-2015",
    },
  ],
  mercedes_benz: [
    {
      engine_code: "OM651",
      make: "Mercedes-Benz",
      models: "E220, C220",
      valves: 16,
      displacement: 2143,
      power: "125 kW / 170 HP",
      fuel_type: "Diesel",
      year_range: "2008-2016",
    },
  ],
  jaguar_engines: [
    {
      engine_code: "AJ126",
      make: "Jaguar",
      models: "XF, XJ",
      valves: 24,
      displacement: 2995,
      power: "250 kW / 335 HP",
      fuel_type: "Petrol",
      year_range: "2012-2019",
    },
  ],
  other: [
    {
      engine_code: "XYZ123",
      make: "Other",
      models: "Model X, Model Y",
      valves: 12,
      displacement: 1800,
      power: "100 kW / 136 HP",
      fuel_type: "Petrol",
      year_range: "2010-2015",
    },
  ],
};

export default function EngineTablesTabs() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof engineData>("range_rover");

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <div className="flex space-x-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as keyof typeof engineData)}
            className={`px-6 py-2 font-bold rounded-t-md border-b-4 transition-all duration-200
              ${activeTab === tab.key
                ? "bg-white text-royal-blue border-royal-blue"
                : "bg-gray-100 text-gray-900 border-transparent hover:bg-white hover:text-royal-blue"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-white p-4 rounded-b-lg">
        <EngineTable columns={columns} data={engineData[activeTab]} />
      </div>
    </div>
  );
}
