/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Column,
  Model,
  EngineCode,
  ModelEngine,
  ReplacementCost,
} from "../types/engine";
import QuoteButton from "@/components/QuoteButton";

// export const MODEL_COLUMNS: Column<Model>[] = [
//   {
//     key: "model",
//     label: "",
//     render: (value) => (
//       <img
//         src={value as string}
//         alt="BMW Model"
//         className="w-64 h-48 md:w-96 md:h-72 lg:w-32 lg:h-24 object-contain rounded-lg"
//         onError={(e) => {
//           console.log("Image failed to load:", value);
//           e.currentTarget.style.display = "none";
//         }}
//       />
//     ),
//   },
//   { key: "model_name", label: "Model Name" },
//   { key: "engine_options", label: "Engine Options" },
//   {
//     key: "action",
//     label: "",
//     render: (_, row) => <QuoteButton data={row} keyToInclude="model_name" />,
//   },
// ];
//
// export const ENGINE_CODE_COLUMNS: Column<EngineCode>[] = [
//   { key: "engineCode", label: "Engine Code" },
//   { key: "engineSize", label: "Engine Size (L)" },
//   { key: "fuelType", label: "Fuel Type" },
//   { key: "turbo", label: "Turbo", render: (value) => (value ? "Yes" : "No") },
//   { key: "horsepower", label: "Horsepower" },
//   { key: "torque", label: "Torque (Nm)" },
//   { key: "productionYears", label: "Production Years" },
//   {
//     key: "action",
//     label: "",
//     render: (_, row) => <QuoteButton data={row} keyToInclude="engineCode" />,
//   },
// ];
//
// export const MODEL_ENGINE_COLUMNS: Column<ModelEngine>[] = [
//   { key: "engineCode", label: "Engine Code" },
//   {
//     key: "compatibleModels",
//     label: "Compatible Models",
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     render: (value, row) =>
//       Array.isArray(value) ? value.join(", ") : String(value),
//   },
//   {
//     key: "action",
//     label: "",
//     render: (_, row) => <QuoteButton data={row} keyToInclude="engineCode" />,
//   },
// ];
//
// export const REPLACEMENT_COST_COLUMNS: Column<ReplacementCost>[] = [
//   {
//     key: "image",
//     label: "",
//     render: (value) => (
//       <img
//         src={value as string}
//         alt="BMW Model"
//         className="w-64 h-48 md:w-96 md:h-72 lg:w-32 lg:h-24 object-contain rounded-lg"
//         onError={(e) => {
//           console.log("Image failed to load:", value);
//           e.currentTarget.style.display = "none";
//         }}
//       />
//     ),
//   },
//   { key: "model", label: "Model" },
//   { key: "engineType", label: "Engine Type" },
//   { key: "estimatedCost", label: "Estimated Cost" },
//   {
//     key: "action",
//     label: "",
//     render: (_, row) => <QuoteButton data={row} keyToInclude="model" />,
//   },
// ];
/* eslint-disable @next/next/no-img-element */

export const MODEL_COLUMNS: Column<Model>[] = [
  {
    key: "model",
    label: "",
    width: "140px",
    render: (value) => (
      <img
        src={value as string}
        alt="BMW Model"
        className="w-64 h-48 md:w-96 md:h-72 lg:w-32 lg:h-24 object-contain rounded-lg"
        onError={(e) => {
          console.log("Image failed to load:", value);
          e.currentTarget.style.display = "none";
        }}
      />
    ),
  },
  {
    key: "model_name",
    label: "Model Name",
    width: "160px",
  },
  {
    key: "engine_options",
    label: "Engine Options",
    maxWidth: "200px",
  },
  {
    key: "action",
    label: "",
    width: "120px",
    render: (_, row) => <QuoteButton data={row} keyToInclude="model_name" />,
  },
];

export const ENGINE_CODE_COLUMNS: Column<EngineCode>[] = [
  { key: "engineCode", label: "Engine Code", width: "100px" },
  { key: "engineSize", label: "Engine Size (L)", width: "110px" },
  { key: "fuelType", label: "Fuel Type", width: "100px" },
  {
    key: "turbo",
    label: "Turbo",
    width: "70px",
    render: (value) => (value ? "Yes" : "No"),
  },
  { key: "horsepower", label: "Horsepower", width: "100px" },
  { key: "torque", label: "Torque (Nm)", width: "100px" },
  { key: "productionYears", label: "Production Years", width: "120px" },
  {
    key: "action",
    label: "",
    width: "110px",
    render: (_, row) => <QuoteButton data={row} keyToInclude="engineCode" />,
  },
];

export const MODEL_ENGINE_COLUMNS: Column<ModelEngine>[] = [
  { key: "engineCode", label: "Engine Code", width: "100px" },
  {
    key: "compatibleModels",
    label: "Compatible Models",
    maxWidth: "220px",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render: (value, row) =>
      Array.isArray(value) ? value.join(", ") : String(value),
  },
  {
    key: "action",
    label: "",
    width: "110px",
    render: (_, row) => <QuoteButton data={row} keyToInclude="engineCode" />,
  },
];

export const REPLACEMENT_COST_COLUMNS: Column<ReplacementCost>[] = [
  {
    key: "image",
    label: "",
    width: "140px",
    render: (value) => (
      <img
        src={value as string}
        alt="BMW Model"
        className="w-64 h-48 md:w-96 md:h-72 lg:w-32 lg:h-24 object-contain rounded-lg"
        onError={(e) => {
          console.log("Image failed to load:", value);
          e.currentTarget.style.display = "none";
        }}
      />
    ),
  },
  { key: "model", label: "Model", width: "160px" },
  { key: "engineType", label: "Engine Type", width: "140px" },
  { key: "estimatedCost", label: "Estimated Cost", width: "130px" },
  {
    key: "action",
    label: "",
    width: "120px",
    render: (_, row) => <QuoteButton data={row} keyToInclude="model" />,
  },
];
