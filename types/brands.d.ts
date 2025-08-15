declare namespace React {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type ReactNode = any;
}

declare type Severity = "Common" | "Moderate" | "Critical";
declare type BadgeVariant = "default" | "secondary" | "outline";
declare type PerformanceLevel =
  | "Beginner"
  | "Progressive"
  | "Advanced"
  | "Expert"
  | "Important";

declare interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
}

declare interface Images {
  img: string;
  alt: string;
}

declare interface EngineProblem {
  title: string;
  icon?: ReactNode;
  problem: string;
  solution: string;
  prevention?: string;
  affectedModelsAndYears?: string;
  severity?: Severity;
}

declare interface ReliabilityPerformanceEntry {
  heading: string;
  paragraph: string;
}

declare interface ReliabilityPerformance {
  reliability: ReliabilityPerformanceEntry[];
  performance: ReliabilityPerformanceEntry[];
}

declare interface Section4 {
  mainParagraph?: string;
  EngineProblems: EngineProblem[];
  engineReliabilityAndPerformance?: ReliabilityPerformance[];
  conclusion: string;
}

declare interface EngineModel {
  model: string;
  model_name: string;
  engine_options: string;
}

declare interface EngineCode {
  engineCode: string;
  engineSize: number;
  fuelType: string;
  turbo: boolean;
  horsepower: string | number;
  torque: number | string;
  productionYears: string;
}

declare interface ModelEngineCompatibility {
  engineCode: string;
  compatibleModels: string[];
}

declare interface ReplacementCost {
  image: string;
  model: string;
  engineType: string;
  estimatedCost: string;
}

declare interface EngineData {
  models: EngineModel[];
  engine_codes: EngineCode[];
  models_engines: ModelEngineCompatibility[];
  replacement_costs: ReplacementCost[];
}

declare interface Section7Item {
  title: string;
  icon: ReactNode;
  badge: string;
  badgeVariant: BadgeVariant;
  pros: string[];
  cons: string[];
}

declare type Section7 = Section7Item[];

declare interface Section8EngineProblemData {
  heading: string;
  paragraph?: string;
  points?: string[];
}

declare interface Section8EngineProblemTip {
  title: string;
  description: string;
}

declare interface Section8EngineProblem {
  id: string;
  title: string;
  icon?: ReactNode;
  severity?: Severity;
  data: Section8EngineProblemData[];
  tips?: Section8EngineProblemTip[];
}

declare interface MaintenanceTip {
  icon: string;
  iconColor: string;
  border: string;
  bg: string;
  title: string;
  titleColor: string;
  text: string;
  textColor: string;
}

declare interface Summary {
  variant: string;
  title: string;
  content: string;
}

declare interface Section8 {
  EngineProblems: Section8EngineProblem[];
  maintenanceTips?: MaintenanceTip[];
  summary?: Summary;
}

declare interface UpgradeStage {
  stage: string;
  description: string;
  benefits: string;
  considerations: string;
}

declare interface Upgrade {
  name: string;
  icon?: ReactNode;
  description: string;
  benefits: string;
  considerations: string;
}

declare interface PerformanceUpgrade {
  id: string;
  title: string;
  icon?: ReactNode;
  level: PerformanceLevel;
  upgrades?: Upgrade[];
  stages?: UpgradeStage[];
  content?: {
    description: string;
    points?: { title: string; description: string }[];
  };
}

declare interface Section9 {
  performanceUpgrades: PerformanceUpgrade[];
  summary?: Summary;
}

declare interface FAQ {
  question: string;
  answer?: string;
  answerList?: string[];
}

declare interface Data {
  metadata?: Metadata;
  brandName: string;
  carImages: string[];
  carModelNames: string[];
  section0Image: Images;
  section1Image: Images;
  section4: Section4;
  engineData: EngineData;
  section7: Section7;
  section8: Section8;
  section9?: Section9;
  faqs: FAQ[];
}

declare type BrandsData = Record<string, Data>;
type TableData = EngineModel[] | EngineCode[] | ModelEngineCompatibility[];
