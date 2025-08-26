export type Column<T = Record<string, unknown>> = {
  key: string;
  label?: string;
  render?: (value: unknown, row: T) => React.ReactNode;
  width?: string;
  maxWidth?: string;
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
