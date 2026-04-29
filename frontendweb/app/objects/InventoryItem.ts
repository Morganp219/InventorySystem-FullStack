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

export const mockInventoryItems: InventoryItem[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI",
    imageUrl: "https://example.com/images/mouse.jpg",
    sku: "WM-1001",
    price: 24.99,
    stockQuantity: 120,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB backlit keyboard with blue switches",
    imageUrl: "https://example.com/images/keyboard.jpg",
    sku: "MK-2045",
    price: 89.99,
    stockQuantity: 60,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: "USB-C Hub",
    sku: "UCH-3321",
    price: 39.5,
    stockQuantity: 200,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: "27-inch Monitor",
    description: "4K UHD display with HDR support",
    imageUrl: "https://example.com/images/monitor.jpg",
    sku: "MON-7788",
    price: 329.99,
    stockQuantity: 25,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    name: "Laptop Stand",
    description: "Aluminum adjustable laptop stand",
    sku: "LS-4455",
    price: 29.99,
    stockQuantity: 0,
    availableMedium: "Online",
    isActive: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass",
    imageUrl: "https://example.com/images/speaker.jpg",
    sku: "BS-9981",
    price: 59.99,
    stockQuantity: 80,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    name: "External SSD 1TB",
    description: "High-speed portable storage",
    imageUrl: "https://example.com/images/ssd.jpg",
    sku: "SSD-1TB-22",
    price: 149.99,
    stockQuantity: 45,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 8,
    name: "Gaming Headset",
    description: "Surround sound headset with mic",
    sku: "GH-5566",
    price: 79.99,
    stockQuantity: 70,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 9,
    name: "Smartphone Tripod",
    imageUrl: "https://example.com/images/tripod.jpg",
    sku: "TRI-3344",
    price: 19.99,
    stockQuantity: 150,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 10,
    name: "Webcam HD",
    description: "1080p webcam with auto focus",
    imageUrl: "https://example.com/images/webcam.jpg",
    sku: "WC-8899",
    price: 49.99,
    stockQuantity: 95,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];