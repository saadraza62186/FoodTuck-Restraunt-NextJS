"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchCart, removeFromCart, clearCart } from "@/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";

export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, total, status } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    if (confirm("Are you sure you want to clear the cart?")) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      <div className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>

        {status === "loading" && (
          <div className="text-center py-12">Loading cart...</div>
        )}

        {status === "succeeded" && items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <Link
              href="/menu"
              className="inline-block bg-[#FF9F0D] hover:bg-[#e88f0a] text-white font-bold py-3 px-6 rounded"
            >
              Continue Shopping
            </Link>
          </div>
        )}

        {status === "succeeded" && items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
                  >
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-gray-600">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-[#FF9F0D]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-600 hover:text-red-800 text-sm mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={handleClearCart}
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow sticky top-4">
                <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span>$5.00</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-[#FF9F0D]">${(total + 5).toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  href="/CheckOut"
                  className="block w-full bg-[#FF9F0D] hover:bg-[#e88f0a] text-white font-bold py-3 px-6 rounded text-center transition-colors"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/menu"
                  className="block w-full text-center text-[#FF9F0D] hover:text-[#e88f0a] font-semibold mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <MainFooter />
    </div>
  );
}
