export type ProductCategory =
  | "Networking"
  | "Security"
  | "Power"
  | "Hardware"
  | "Software";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: string;
  description: string;
  emoji: string;
  badge?: string;
}