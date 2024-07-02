import { NastaligFont} from "@/src/utils/fronts";
import Sort from "./Sort";
import ProductCard from "@/src/components/ProductCard";
import FilterSideBar from "./FilterSideBar";
import { getCategories } from "@/src/services/categoryServices";
import { getProducts } from "@/src/services/productServices";
import { ReadonlyURLSearchParams } from "next/navigation";
import queryString from "query-string";

const Shop = async ({
  searchParams,
}: {
  searchParams: ReadonlyURLSearchParams;
}) => {
  const categories = await getCategories();
  const products = await getProducts(queryString.stringify(searchParams));
  return (
    <div className=" ">
      <div className=" h-[60vh] bg-coffee-background bg-cover bg-center flex justify-center items-center">
        <h1 className={`${NastaligFont.className} text-white text-6xl pt-14`}>
          فروشگاه گراف
        </h1>
      </div>
      <div className="max-w-[1500px] mx-auto py-14 px-8 relative">
        <Sort />
        <div className="w-full flex gap-10 flex-col lg:flex-row">
          <FilterSideBar categories={categories} />
          <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  justify-between w-full mx-auto border-r border-t">
            {products.map((product: any) => {
              return (
                <ProductCard
                  key={product._id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.image.url}
                  slug={product.slug}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
