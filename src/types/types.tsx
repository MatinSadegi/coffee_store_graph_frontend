export interface CartData {
  productId: string;
  count: number;
}

export interface CategoryTypes {
  _id: string;
  title: string;
  subCategory: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
