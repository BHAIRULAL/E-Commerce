export type ProductType = {
  name: string;
  brand: string;
  image: string;
  category: string;
  description: string;
  price: number;
  tags: string[];
  variants: VariantType[];
  inventory: InventoryType;
};

export type VariantType = {
  type: string;
  value: string;
};

export type InventoryType = {
  quantity: number;
  inStock: boolean;
};
