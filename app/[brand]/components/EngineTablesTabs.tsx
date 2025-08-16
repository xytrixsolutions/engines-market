"use client";
import { useDeferredValue, useMemo, useState, useTransition } from "react";
import EngineTable from "./EngineTable";
import { data } from "../../../data/brands";
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
import Link from "next/link";

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

const EngineTablesTabs = ({ brand }: { brand: string }) => {
  const [tableType, setTableType] = useState<TableKey>("models");
  const [isPending, startTransition] = useTransition();
  const deferredTableType = useDeferredValue(tableType);

  const columns = TABLE_COLUMNS[tableType];
  const tableData = data[brand].engineData[tableType];
  const { brandName } = data[brand];

  const TABLE_META = useMemo(() => {
    return {
      models: {
        title: "Browse Engines by Vehicle Model",
        description: `Here’s a list of ${brandName}’s most popular car models and their compatible engine types, you can request a price quote for your car model, by clicking on Request Quote button next to it.`,
        note: `This table includes some of the most popular and in-demand ${brandName} models, focusing on their diverse engine options. While we cover all ${brandName} models, these are the ones most frequently sought-after. If you need more detailed information on any specific model,`,
      },
      engine_codes: {
        title: "Search Engines by Technical Specification (Engine Code)",
        description: `Below is a detailed table of ${brandName} engine specifications, covering key parameters such as engine code, displacement, fuel type, turbo status, horsepower, torque, and production years, if you know your vehicle’s engine code, you can directly request a quote from this list.`,
        note: `his table provides a detailed overview of popular ${brandName} engines, ensuring you have the necessary information to make informed decisions about your engine needs. If you need further assistance,`,
      },
      models_engines: {
        title: "Engine & Model Compatibility Chart",
        description: `Here’s a compatibility chart for ${brandName}’s Engine Codes & Car Models, an engine could potentially be compatible with more than a dozen car models, this table serves as exemplary purpose only.`,
        note: `This chart highlights the compatibility of various ${brandName} engines with popular models, ensuring you can find the right engine for your vehicle with ease.`,
      },
    };
  }, [brandName]);
  if (!columns) return null;

  const meta = TABLE_META[tableType];

  return (
    <Container className="mt-10 px-4 md:px-0" id="tables">
      {/* Mobile Dropdown */}
      <div className="mb-6 flex items-center space-x- lg:hidden transition-all duration-300">
        <label className="text-sm font-medium text-gray-700 w-full">
          FIND YOUR ENGINE BY:
        </label>
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

      {/* Desktop Tabs */}
      <div className="hidden lg:flex space-x-2 mb-6 justify-center">
        {TABLE_OPTIONS.map((opt) => (
          <Button
            key={opt.key}
            onClick={() => {
              startTransition(() => {
                setTableType(opt.key as TableKey);
              });
            }}
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

      {/* Table Meta */}
      <div className="text-center mb-8 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-neon-red">
          {meta.title}
        </h2>
        <p className="text-base md:text-lg text-charcoal-gray mb-2 ">
          {meta.description}
        </p>
      </div>

      {/* Table */}
      <EngineTable
        key="engine-table" // stays the same across tab switches
        columns={columns}
        data={tableData}
        tableType={tableType}
        // tableType={deferredTableType}
      />

      {/* Note */}
      <SummaryCard
        variant="card"
        content={meta.note}
        contact={
          <>
            feel free to{" "}
            <Link href={"/contact"} className="font-bold">
              Contact
            </Link>{" "}
            Us!
          </>
        }
      />
    </Container>
  );
};

export default EngineTablesTabs;
