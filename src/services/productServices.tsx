import axios from "axios";

export async function getProducts(queryString: string) {
  const { data } = await axios.get(
    `https://coffee-store-graph-backend.onrender.com/api/product?${queryString}`
  );
  return data;
}
export async function getProductBySlug(slug: string) {
  const { data } = await axios.get(
    `https://coffee-store-graph-backend.onrender.com/api/product/${slug}`
  );
  return data;
}
