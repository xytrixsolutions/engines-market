// utils/brands.ts
import { data } from "../../../data/brands";

// Get all brand keys as a readonly array
const ALL_BRANDS = Object.keys(data) as readonly string[];

// Create a type from the array values
export type ValidBrand = (typeof ALL_BRANDS)[number];

// Type guard function
export function isValidBrand(brand: string): brand is ValidBrand {
  return ALL_BRANDS.includes(brand);
}
