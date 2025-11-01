"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchCart, clearCart } from "@/store/cartSlice";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MainFooter from "../components/MainFooter";

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
    sameAsBilling: true,
    paymentMethod: "cash",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!formData.firstName || !formData.email || !formData.phone || !formData.address1) {
      alert("Please fill in all required fields!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          customerName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: `${formData.address1} ${formData.address2}`,
          city: formData.city,
          zipCode: formData.zipCode,
          paymentMethod: formData.paymentMethod,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(`Order placed successfully! Order ID: ${result.orderId}`);
        dispatch(clearCart());
        router.push("/");
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const deliveryFee = 5;
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (total + deliveryFee + parseFloat(tax)).toFixed(2);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Image Section */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative">
        <Image src="/menu1.png" alt="Menu Image" fill className="object-cover" quality={100} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-helvetica font-bold text-3xl md:text-4xl lg:text-[48px] text-white">Checkout Page</h1>
          <div className="font-normal text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-3 h-3 md:w-4 md:h-4" />{" "}
            <div className="text-[#FF9F0D]">Checkout</div>
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="flex justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
          {/* Left Section - Form */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <h1 className="text-xl md:text-2xl font-bold">Shipping Address</h1>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address 1 *</label>
                <input
                  type="text"
                  name="address1"
                  required
                  value={formData.address1}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address 2</label>
                <input
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={handleInputChange}
                  className="w-full h-12 md:h-14 p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Billing Address */}
            <h1 className="text-xl md:text-2xl font-bold mt-4">Billing Address</h1>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="same-as-shipping"
                name="sameAsBilling"
                checked={formData.sameAsBilling}
                onChange={handleInputChange}
                className="h-4 w-4 md:h-5 md:w-5"
              />
              <label htmlFor="same-as-shipping" className="text-sm md:text-base">
                Same as shipping address
              </label>
            </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <button
                type="button"
                onClick={() => router.push("/cart")}
                className="w-full h-12 md:h-14 border text-black rounded flex justify-center items-center gap-2 hover:bg-gray-50"
              >
                <ArrowBackIosIcon className="w-4 h-4" />
                Back to Cart
              </button>
              <button
                type="submit"
                disabled={isSubmitting || items.length === 0}
                className="w-full h-12 md:h-14 bg-[#FF9F0D] text-white rounded flex justify-center items-center gap-2 hover:bg-[#e88f0a] disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Place Order"}
                <ArrowForwardIosIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="border rounded-md p-4 mb-6 bg-white sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {items.length === 0 ? (
                  <p className="text-gray-600">No items in cart</p>
                ) : (
                  items.map((item: any) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Order Summary */}
              <div className="border-t border-gray-300 pt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Delivery</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Tax (10%)</span>
                  <span>${tax}</span>
                </div>

                <hr className="border-t border-gray-300 my-2" />

                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[#FF9F0D]">${grandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-auto">
        <MainFooter />
      </div>
    </div>
  );
}

