import { getProducts } from "../services/products";

export async function useProducts() {
  const products = await getProducts();

  // Lógica sobre los productos
  products.sort((a, b) => a.price - b.price);

  return [products];
}
