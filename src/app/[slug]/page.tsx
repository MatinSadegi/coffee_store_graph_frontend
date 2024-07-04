import React from "react";
import Image from "next/image";
import { BNazaninFont } from "@/src/utils/fronts";
import { getProductBySlug } from "@/src/services/productServices";
import AddToCart from "@/src/components/AddToCart";
import { numberWithCommas } from "@/src/utils/numberWithCommas";

const Product = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const productDetails = await getProductBySlug(slug);
  const { title, price, description, category, image, _id, inStock } =
    productDetails;
  return (
    <div className=" max-w-[1300px] px-8  mx-auto pt-44">
      <div className=" w-full gap-10 flex flex-col md:flex-row md:items-center  ">
        <div className="md:w-1/2">
          <Image
            src={`https://coffee-store-graph-backend.onrender.com/${image.url}`}
            width={500}
            height={400}
            alt="product-img"
          />
        </div>
        <div className="md:w-1/2 px-10 flex flex-col md:px-0 md:py-10">
          <h5 className={`${BNazaninFont.className} font-bold `}>{title}</h5>
          <p
            className={`${BNazaninFont.className} font-bold mt-5 text-3xl text-primary-600`}
          >
            {numberWithCommas(price)} <span>تومان</span>{" "}
          </p>
          <p className=" my-6">{description}</p>
          <AddToCart category={category} productId={_id} inStock={inStock} />
        </div>
      </div>
      <div className=" w-full mt-32 mb-28">
        <h4 className=" text-center">اطلاعات تکمیلی</h4>
        {productDetails?.coffeeData ? (
          <ul className="grid grid-cols-3 border-t mt-8 text-center">
            <li className=" flex flex-col py-8">
              <span className=" font-bold text-lg pb-1">خاستگاه</span>
              <span>کلمبیا</span>
            </li>
            <li className=" flex flex-col py-8">
              <span className=" font-bold text-lg pb-1">برشتکاری</span>
              <span>دارک</span>
            </li>
            <li className=" flex flex-col py-8">
              <span className=" font-bold text-lg pb-1">کافئین</span>
              <span>متوسط</span>
            </li>
            <li className=" flex flex-col">
              <span className=" font-bold text-lg pb-1">تلخی</span>
              <span>کم</span>
            </li>
            <li className=" flex flex-col">
              <span className=" font-bold text-lg pb-1">ترشی</span>
              <span>زیاد</span>
            </li>
            <li className=" flex flex-col">
              <span className=" font-bold text-lg pb-1">وسیله دم آوری</span>
              <span>کمکس ، V60 ، موکاپات ، دستگاه خانگی </span>
            </li>
          </ul>
        ) : productDetails?.cupData ? (
          <ul className="grid grid-cols-3 border-t mt-8 text-center">
            <li className=" flex flex-col py-8">
              <span className=" font-bold text-lg pb-1">رنگ</span>
              <span>{productDetails.cupData.color}</span>
            </li>
            <li className=" flex flex-col py-8">
              <span className=" font-bold text-lg pb-1">ظرفیت</span>
              <span>{productDetails.cupData.capacity} میلی لیتر</span>
            </li>
            <li className=" flex flex-col py-8">
              <span className=" font-bold text-lg pb-1">قطر دهانه</span>
              <span>{productDetails.cupData.width} سانتی متر</span>
            </li>
            <li className=" flex flex-col">
              <span className=" font-bold text-lg pb-1">ارتفاع</span>
              <span>{productDetails.cupData.height} سانتی متر</span>
            </li>
            <li className=" flex flex-col">
              <span className=" font-bold text-lg pb-1">طول نعلبکی</span>
              <span>{productDetails.cupData.saucerWidth} سانتی متر</span>
            </li>
          </ul>
        ) : (
          <ul className="grid grid-cols-3 border-t mt-8 text-center">
            <li className=" flex flex-col py-8">
              <span className=" font-bold text-lg pb-1">رنگ</span>
              <span>{productDetails.machineData.color}</span>
            </li>
            <li className=" flex flex-col py-8">
              <span className=" font-bold text-lg pb-1">وزن</span>
              <span>{productDetails.machineData.weight} کیلوگرم</span>
            </li>
            <li className=" flex flex-col py-8">
              <span className=" font-bold text-lg pb-1">ظرفیت مخزن آب</span>
              <span>{productDetails.machineData.caterTankCapacity} لیتر</span>
            </li>
            <li className=" flex flex-col">
              <span className=" font-bold text-lg pb-1">قدرت</span>
              <span>{productDetails.machineData.power} وات</span>
            </li>
            <li className=" flex flex-col">
              <span className=" font-bold text-lg pb-1">ترشی</span>
              <span>زیاد</span>
            </li>
            <li className=" flex flex-col">
              <span className=" font-bold text-lg pb-1">وسیله دم آوری</span>
              <span>کمکس ، V60 ، موکاپات ، دستگاه خانگی </span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Product;
