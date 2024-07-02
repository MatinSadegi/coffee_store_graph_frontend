import axios from "axios";

export async function getCategories() {
  const { data } = await axios.get(
    `https://coffee-store-graph-backend.onrender.com/api/category`
  );
  return data;
}
