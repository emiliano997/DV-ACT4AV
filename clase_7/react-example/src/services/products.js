import { environment } from "../utils/environment";

export async function getProducts() {
  const res = await fetch(`${environment.apiUrl}/products`);
  const products = await res.json();

  return products;
}
