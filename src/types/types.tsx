export interface FormDataProps {
  productId: string;
  count: number;
}

export interface CartProduct {
  count: number;
  image: { url: string };
  price:number;
  productId:string;
  title:string
}

export interface CategoryTypes {
  _id: string;
  title: string;
  subCategory: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
