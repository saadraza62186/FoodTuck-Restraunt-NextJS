"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { AppDispatch } from "@/store/store";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
    alert(`${product.name} added to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-[#FF9F0D] hover:bg-[#e88f0a] text-white font-bold py-2 px-4 rounded transition-colors"
    >
      Add to Cart
    </button>
  );
}
