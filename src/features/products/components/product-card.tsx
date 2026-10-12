import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>₹{product.price.toFixed(2)}</p>
    </article>
  );
}