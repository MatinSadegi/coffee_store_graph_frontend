import axios from "axios";

export async function getProducts(queryString: string) {
  console.log("queryString")
  const { data } = await axios.get(
    `http://localhost:5000/api/product?${queryString}`
  );
  return data;
} 
export async function getProductBySlug(slug:string) {
  const { data } = await axios.get(
    `http://localhost:5000/api/product/${slug}`
  );
  return data;
} 