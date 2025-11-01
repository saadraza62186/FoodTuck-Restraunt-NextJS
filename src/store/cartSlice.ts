"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch cart from backend
export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  const res = await fetch("/api/cart");
  const json = await res.json();
  return json.data || [];
});

// Add item to cart
export const addToCart = createAsyncThunk(
  "cart/add",
  async (item: { id: string; name: string; price: number; image: string; quantity: number }) => {
    const res = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const json = await res.json();
    return json.data || [];
  }
);

// Remove item from cart
export const removeFromCart = createAsyncThunk("cart/remove", async (id: string) => {
  const res = await fetch(`/api/cart?id=${id}`, { method: "DELETE" });
  const json = await res.json();
  return json.data || [];
});

// Clear cart
export const clearCart = createAsyncThunk("cart/clear", async () => {
  const res = await fetch(`/api/cart?id=all`, { method: "DELETE" });
  const json = await res.json();
  return json.data || [];
});

type CartState = {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  total: number;
};

const initialState: CartState = {
  items: [],
  status: "idle",
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateTotal(state) {
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  extraReducers: (builder: any) => {
    // Fetch cart
    builder.addCase(fetchCart.pending, (state: any) => {
      state.status = "loading";
    });
    builder.addCase(fetchCart.fulfilled, (state: any, action: any) => {
      state.status = "succeeded";
      state.items = action.payload;
      state.total = state.items.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity,
        0
      );
    });
    builder.addCase(fetchCart.rejected, (state: any) => {
      state.status = "failed";
    });

    // Add to cart
    builder.addCase(addToCart.fulfilled, (state: any, action: any) => {
      state.items = action.payload;
      state.total = state.items.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity,
        0
      );
    });

    // Remove from cart
    builder.addCase(removeFromCart.fulfilled, (state: any, action: any) => {
      state.items = action.payload;
      state.total = state.items.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity,
        0
      );
    });

    // Clear cart
    builder.addCase(clearCart.fulfilled, (state: any, action: any) => {
      state.items = action.payload;
      state.total = 0;
    });
  },
});

export const { updateTotal } = cartSlice.actions;
export default cartSlice.reducer;
