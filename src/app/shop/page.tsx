"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import MainFooter from "../components/MainFooter";
import AddToCartButton from "../components/AddToCartButton";

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetch("/api/foods")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Image Section */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative">
        {/* Background Image */}
        <Image src="/menu1.png" alt="Menu Image" fill className="object-cover" quality={100} />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-helvetica font-bold text-3xl md:text-4xl lg:text-[48px] text-white">Our Shop</h1>
          <div className="font-normal text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-3 h-3 md:w-4 md:h-4" /> <div className="text-[#FF9F0D]">Shop</div>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="w-full flex-grow flex justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-7xl">
          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#FF9F0D] font-bold text-xl">${product.price}</span>
                    <span className="text-gray-500 text-sm">{product.category}</span>
                  </div>
                  <AddToCartButton product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-auto">
        <MainFooter />
      </div>
    </div>
  );
}

