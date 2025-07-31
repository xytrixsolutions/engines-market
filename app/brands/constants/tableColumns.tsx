/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Column,
  Model,
  EngineCode,
  ModelEngine,
  ReplacementCost,
} from "../types/engine";
import Button from "@/components/Button";

const quoteButton = <Button variant="green">Request Quote</Button>;

const sampleImage = (
  <img
    src="/bmw/bmw.png"
    alt="Sample"
    className="w-12 h-12 object-contain rounded-md border border-border bg-white"
  />
);

export const MODEL_COLUMNS: Column<Model>[] = [
  {
    key: "image",
    label: "",
    render: () => sampleImage,
  },
  { key: "model_name", label: "Model Name" },
  { key: "engine_options", label: "Engine Options" },
  {
    key: "action",
    label: "Request Quote",
    render: () => quoteButton,
  },
];

export const ENGINE_CODE_COLUMNS: Column<EngineCode>[] = [
  { key: "engineCode", label: "Engine Code" },
  { key: "engineSize", label: "Engine Size (L)" },
  { key: "fuelType", label: "Fuel Type" },
  { key: "turbo", label: "Turbo", render: (value) => (value ? "Yes" : "No") },
  { key: "horsepower", label: "Horsepower" },
  { key: "torque", label: "Torque (Nm)" },
  { key: "productionYears", label: "Production Years" },
  {
    key: "action",
    label: "Request Quote",
    render: () => quoteButton,
  },
];

export const MODEL_ENGINE_COLUMNS: Column<ModelEngine>[] = [
  {
    key: "image",
    label: "",
    render: () => sampleImage,
  },
  { key: "engineCode", label: "Engine Code" },
  {
    key: "compatibleModels",
    label: "Compatible Models",
    render: (value, row) =>
      Array.isArray(value) ? value.join(", ") : String(value),
  },
  {
    key: "action",
    label: "Request Quote",
    render: () => quoteButton,
  },
];

export const REPLACEMENT_COST_COLUMNS: Column<ReplacementCost>[] = [
  {
    key: "image",
    label: "",
    render: () => sampleImage,
  },
  { key: "model", label: "Model" },
  { key: "engineType", label: "Engine Type" },
  { key: "estimatedCost", label: "Estimated Cost" },
  {
    key: "action",
    label: "Request Quote",
    render: () => quoteButton,
  },
];
