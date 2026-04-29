import Image from "next/image";
import ProductCard from "./Components/ProductCard";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="p-6">
      <section className="mb-6 rounded-xl bg-stone-100 p-4">
      </section>
      <ProductCard />
    </main>
  );
}
