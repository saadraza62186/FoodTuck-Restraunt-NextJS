import ProductCard from "./ProductCard";
import AddToCartButton from "./AddToCartButton";

// Server component: fetches products from our API and renders them.
export default async function ProductsSection() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || "http://localhost:3000"}/api/foods`, { 
      cache: "no-store" 
    });
    const json = await res.json();
    const items = json?.data || [];

    return (
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Featured Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it: any) => (
            <div key={it.id} className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <ProductCard imageSrc={it.image} name={it.name} price={`$${it.price}`} />
              <p className="text-gray-600 text-sm mt-2 mb-3">{it.description}</p>
              <AddToCartButton product={it} />
            </div>
          ))}
        </div>
      </div>
    );
  } catch (err) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Featured Dishes</h2>
        <div className="text-red-600">Failed to load menu items. Make sure the server is running.</div>
      </div>
    );
  }
}
