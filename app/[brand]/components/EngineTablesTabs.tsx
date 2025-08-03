"use client";
import { useState } from "react";
import EngineTable from "./EngineTable";
import { data } from "../data/data";
import {
  MODEL_COLUMNS,
  ENGINE_CODE_COLUMNS,
  MODEL_ENGINE_COLUMNS,
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
import SummaryCard from "@/components/SummaryCard";

const TABLE_OPTIONS = [
  { key: "models", label: "Model Names" },
  { key: "engine_codes", label: "Technical Specifications" },
  { key: "models_engines", label: "Model & Engine Compatibility" },
] as const;

type TableKey = (typeof TABLE_OPTIONS)[number]["key"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TABLE_COLUMNS: Record<TableKey, Column<any>[]> = {
  models: MODEL_COLUMNS,
  engine_codes: ENGINE_CODE_COLUMNS,
  models_engines: MODEL_ENGINE_COLUMNS,
};

// Table meta info for headings, descriptions, and notes
const TABLE_META: Record<
  TableKey,
  { title: string; description: string; note: string }
> = {
  models: {
    title: "Browse Engines by Vehicle Model",
    description:
      "Use this table to find compatible engine options by selecting your vehicle’s make and model. You can view available engine sizes of a each model such as 1.5L petrol or 2.0L diesel. Simply click the “Request Quote” button next to engine type you’re looking for to receive multiple engine replacement quotes from trusted UK suppliers.",
    note: "Looking to find the right replacement engine for your vehicle? This model-based engine quote table helps you quickly compare available engine sizes across different series and generations. Whether you drive a hatchback, saloon, SUV, or coupe, choosing your model allows you to view compatible petrol and diesel engines instantly. This is one of the easiest ways to request engine quotes without needing to know technical specs or engine codes. All engines listed are sourced from trusted UK suppliers with warranty options available.",
  },
  engine_codes: {
    title: "Search Engines by Technical Specification (Engine Code)",
    description:
      "Looking for a specific engine code? This section lists engines by their technical specifications: including engine size, fuel type, turbocharger status, horsepower, torque, and production years. Ideal for those who already know their engine codes, this table lets you compare engines at a glance and request a quote directly based on exact specs.",
    note: "If you know your vehicle’s engine code or you’re replacing a like-for-like unit, this section is ideal. Searching by engine code gives you access to detailed technical specs - such as fuel type, power output, torque, and turbo configuration. It’s perfect for garages, mechanics, or anyone comparing engines across production years. Entering or matching your engine code ensures the right compatibility, and you can get quotes instantly for used, reconditioned, or refurbished options. ",
  },
  models_engines: {
    title: "Engine & Model Compatibility Chart",
    description:
      "Cross-reference engine codes with compatible vehicle models using this chart. If you already have an engine code and want to confirm which models it fits, this tool will help. You’ll find compatibility details across various series and model years. Once you confirm fitment, you can instantly request quotes from our verified engine suppliers.",
    note: "Not all engines fit only one model, many are compatible with multiple vehicles across different years or series. This compatibility chart helps you understand which models can share the same engine type, making it easier to explore cost-effective or alternative replacements. If you’re wondering “what other cars use the same engine as mine?”, this is the place to look. Knowing engine-to-model compatibility is also useful when buying used or reconditioned engines, especially if your original part is discontinued or rare.",
  },
};

const EngineTablesTabs: React.FC<{ brand: string }> = ({ brand }) => {
  const [tableType, setTableType] = useState<TableKey>("models");
  const columns = TABLE_COLUMNS[tableType];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tableData: any[] = data[brand].engineData[tableType];

  if (!columns) return null; // Guard against undefined columns

  const meta = TABLE_META[tableType];

  return (
    <Container className="mt-10 px-4 md:px-0" id="tables">
      {/* Mobile Dropdown Switcher */}
      <div className="mb-6 flex items-center space-x- lg:hidden transition-all duration-300">
        <label className="text-sm font-medium text-gray-700 w-full">FIND YOUR ENGINE BY:</label>
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
      {/* Table Meta Heading & Description */}
      <div className="text-center mb-8 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-neon-red">
          {meta.title}
        </h2>
        <p className="text-base md:text-lg text-charcoal-gray mb-2 ">
          {meta.description}
        </p>
      </div>
      {/* Table */}
      <div
  key={tableType}
  className="transition-all duration-500 ease-in-out opacity-0 animate-fadeIn"
>
  <EngineTable columns={columns} data={tableData} tableType={tableType} />
</div>

      {/* Table Note */}
      <SummaryCard variant="card" content={meta.note} />
    </Container>
  );
};

export default EngineTablesTabs;
