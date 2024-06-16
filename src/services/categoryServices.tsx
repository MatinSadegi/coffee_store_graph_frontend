import axios from "axios";

export async function getCategories() {
  const { data } = await axios.get(`http://localhost:5000/api/category`);
  return data;
}
