"use client"
import Image from "next/image";
import ProductCard from "./Components/ProductCard";
import { useState } from "react";
import { InventoryItem, mockInventoryItems } from "./objects/InventoryItem";

export default function Home() {
  const [allProductsLoaded, setAllProductsLoaded] = useState<InventoryItem[]>(mockInventoryItems)
  
  return (
    <main className="p-6 flex gap-10 flex-wrap items-center justify-around">
      
       {
        allProductsLoaded.map((item)=> (
          <section className="mb-6 rounded-xl bg-stone-50 p-4"  key={item.id}>
              <ProductCard inventoryItem={item} />
          </section>
          
        ))
      }
      
    </main>
  );
}
