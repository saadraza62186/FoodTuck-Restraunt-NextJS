import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("/api/foods");
  const json = await res.json();
  return json.data || [];
});

type ProductsState = {
  items: any[];
  status: string;
};

const initialState: ProductsState = { items: [], status: "idle" };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchProducts.pending, (state: any) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state: any, action: any) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state: any) => {
      state.status = "failed";
    });
  },
});

export default productsSlice.reducer;
