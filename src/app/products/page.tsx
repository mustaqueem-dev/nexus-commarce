import { ProductCard } from "@/features/products/components/product-card";
import type { Product } from "@/features/products/types/product";

const products: Product[] = [
  {
    id: "p-101",
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Accessories",
  },
  {
    id: "p-102",
    name: "Wireless Mouse",
    price: 999,
    category: "Accessories",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <h1>Products Catalogue</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </main>
  );
}