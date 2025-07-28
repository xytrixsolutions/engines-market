"use client";
import React, { useState } from "react";
import EngineTable from "./EngineTable";
import { ENGINE_DATA } from "../data/engineData";
import {
  MODEL_COLUMNS,
  ENGINE_CODE_COLUMNS,
  MODEL_ENGINE_COLUMNS,
  REPLACEMENT_COST_COLUMNS,
} from "../constants/tableColumns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Column } from "../types/engine";
import Container from "@/components/Container";

const TABLE_OPTIONS = [
  { key: "models", label: "Models" },
  { key: "engine_codes", label: "Engine Codes" },
  { key: "models_engines", label: "Model Compatibility" },
  { key: "replacement_costs", label: "Replacement Costs" },
] as const;

type TableKey = (typeof TABLE_OPTIONS)[number]["key"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TABLE_COLUMNS: Record<TableKey, Column<any>[]> = {
  models: MODEL_COLUMNS,
  engine_codes: ENGINE_CODE_COLUMNS,
  models_engines: MODEL_ENGINE_COLUMNS,
  replacement_costs: REPLACEMENT_COST_COLUMNS,
};

const EngineTablesTabs: React.FC = () => {
  const [tableType, setTableType] = useState<TableKey>("models");
  const columns = TABLE_COLUMNS[tableType];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any[] = ENGINE_DATA[tableType];

  return (
    <Container className="mt-10 px-4 md:px-0">
      {/* Mobile Dropdown Switcher */}
      <div className="mb-6 flex items-center space-x-2 lg:hidden transition-all duration-300">
        <label className="text-sm font-medium text-gray-700">Show Table:</label>
        <Select
          value={tableType}
          onValueChange={(v) => setTableType(v as TableKey)}
        >
          <SelectTrigger className="w-full max-w-xs bg-background border-border text-foreground hover:bg-accent hover:text-accent-foreground focus:border-neon-red focus:ring-neon-red/20">
            <SelectValue placeholder="Select table" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            {TABLE_OPTIONS.map((opt) => (
              <SelectItem
                key={opt.key}
                value={opt.key}
                className="text-popover-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-neon-red/85 data-[highlighted]:text-white"
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Desktop Tab Switcher */}
      <div className="hidden lg:flex space-x-2 mb-6 justify-center">
        {TABLE_OPTIONS.map((opt) => (
          <Button
            key={opt.key}
            onClick={() => setTableType(opt.key)}
            variant="ghost"
            className={`px-6 py-2 font-bold rounded-t-md border-b-4 border border-border transition-all duration-200 flex-shrink-0
              ${
                tableType === opt.key
                  ? "bg-neon-red/85 text-white border-border shadow-lg hover:bg-neon-red/85 hover:text-white"
                  : "bg-gray-100 text-gray-900 border-transparent shadow-md hover:bg-white hover:text-neon-red"
              }
            `}
          >
            {opt.label}
          </Button>
        ))}
      </div>
      {/* Table */}
      <EngineTable columns={columns} data={data} />
    </Container>
  );
};

export default EngineTablesTabs;
