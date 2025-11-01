"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartIcon() {
  const { items } = useSelector((state: RootState) => state.cart);
  const itemCount = items.reduce((sum: number, item: any) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="relative inline-block">
      <ShoppingCartIcon className="w-6 h-6 text-white hover:text-[#FF9F0D] transition-colors" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#FF9F0D] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
