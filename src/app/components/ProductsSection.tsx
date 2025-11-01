"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import AddToCartButton from "./AddToCartButton";
import { useEffect, useState } from "react";

export default function ProductsSection() {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_PATH || "http://localhost:3000"}/api/foods`,
          { cache: "no-store" }
        );
        const json = await res.json();
        setItems(json?.data || []);
      } catch (err) {
        setError("Failed to load menu items. Make sure the server is running.");
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return (
      <div className="w-full text-center py-10">
        <h2 className="text-2xl font-bold mb-6">Featured Dishes</h2>
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#FF9F0D]">
        Featured Dishes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <motion.div
            key={it.id}
            className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProductCard imageSrc={it.image} name={it.name} price={`$${it.price}`} />
            <p className="text-gray-600 text-sm mt-2 mb-3">{it.description}</p>
            <AddToCartButton product={it} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
