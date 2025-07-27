"use client";
import React, { useState } from "react";
import EngineTable from "./EngineTable";
import { TabKey } from "../types/engine";
import { TABS, ENGINE_DATA } from "../data/engineData";
import { ENGINE_TABLE_COLUMNS } from "../constants/tableColumns";

const EngineTablesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>(TABS[0].key);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <div className="flex space-x-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 font-bold rounded-t-md border-b-4 transition-all duration-200
              ${
                activeTab === tab.key
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
        <EngineTable
          columns={ENGINE_TABLE_COLUMNS}
          data={ENGINE_DATA[activeTab]}
        />
      </div>
    </div>
  );
};

export default EngineTablesTabs;
