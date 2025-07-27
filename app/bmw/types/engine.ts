export enum FuelType {
  Petrol = "Petrol",
  Diesel = "Diesel",
  Hybrid = "Hybrid",
  Electric = "Electric",
}

export type EngineData = {
  engine_code: string;
  make: string;
  models: string;
  valves: number;
  displacement: number;
  power: string;
  fuel_type: FuelType;
  year_range: string;
};

export type TabKey =
  | "range_rover"
  | "land_rover"
  | "bmw"
  | "mercedes_benz"
  | "jaguar_engines"
  | "other";

export type Tab = {
  key: TabKey;
  label: string;
};

export type Column<T = Record<string, unknown>> = {
  key: string;
  label: string;
  render?: (value: unknown, row: T) => React.ReactNode;
};

export type TableProps<T = Record<string, unknown>> = {
  columns: Column<T>[];
  data: T[];
};

export type Model = {
  model: string;
  model_name: string;
  engine_options: string;
};

export type EngineCode = {
  engineCode: string;
  engineSize: number;
  fuelType: string;
  turbo: boolean;
  horsepower: string | number;
  torque: string | number;
  productionYears: string;
};

export type ModelEngine = {
  engineCode: string;
  compatibleModels: string[];
};

export type ReplacementCost = {
  model: string;
  engineType: string;
  estimatedCost: string;
};
