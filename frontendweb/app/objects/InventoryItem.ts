export interface InventoryItem {
  id: number;

  name: string;
  description?: string;
  imageUrl?: string;

  sku: string;

  price: number;
  stockQuantity: number;

  availableMedium?: "Online" | "In Store";

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}