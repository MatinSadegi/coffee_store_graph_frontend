import Image from "next/image";
import { BNazaninFont } from "../utils/fronts";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
}

const ProductCard = ({ title, price, imageUrl, slug }: ProductCardProps) => {
  return (
    <Link
      href={`/${slug}`}
      className={`text-center  flex flex-col items-center border-b border-l py-6 px-3 cursor-pointer transition-all hover:shadow-xl `}
    >
      <Image
        src={`http://localhost:5000/${imageUrl}`}
        alt="product-img"
        width={160}
        height={160}
      />
      <p className=" mt-3">{title}</p>
      <p
        className={`text-primary-600 ${BNazaninFont.className} text-xl font-bold mt-1`}
      >
        {price} تومان
      </p>
    </Link>
  );
};

export default ProductCard;
