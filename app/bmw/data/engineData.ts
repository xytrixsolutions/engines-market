import { EngineData, TabKey, Tab } from "../types/engine";

export const TABS: Tab[] = [
  { key: "range_rover", label: "RANGE ROVER" },
  { key: "land_rover", label: "LAND ROVER" },
  { key: "bmw", label: "BMW" },
  { key: "mercedes_benz", label: "MERCEDES-BENZ" },
  { key: "jaguar_engines", label: "JAGUAR ENGINES" },
  { key: "other", label: "OTHER" },
];

export const ENGINE_DATA: Record<TabKey, EngineData[]> = {
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
