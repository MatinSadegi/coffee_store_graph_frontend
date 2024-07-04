"use client";
import Image from "next/image";
import { numberWithCommas } from "@/src/utils/numberWithCommas";
import minusIcon from "@/public/icons/minus-svgrepo-com.svg";
import plusIcon from "@/public/icons/plus-svgrepo-com.svg";
import { CartProduct } from "@/src/types/types";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/src/services/cartServices";
import PageLoadingSpinner from "@/src/components/spinner/PageLoadingSpinner";

const Cart = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
  console.log(isFetching);
  if (isFetching) {
    return <PageLoadingSpinner />;
  }
  if (data?.products) {
    const { products, cartTotal, countTotal } = data;
    return (
      <div className=" pt-36 pb-16 max-w-[1300px] mx-auto ">
        <h4 className=" text-center mb-20">سبد خرید </h4>
        <ul className=" border-b grid grid-cols-4 text-center pb-2 ">
          <li className="">محصول</li>
          <li>قیمت</li>
          <li>تعداد</li>
          <li>جمع کل</li>
        </ul>
        {products.map((product: CartProduct) => {
          return (
            <ul
              className="border-b py-4 grid grid-cols-4 text-center  items-center "
              key={product.productId}
            >
              <li className=" flex items-center justify-center gap-1 ">
                <Image
                  src={`http://localhost:5000/${product.image.url}`}
                  alt="product_img"
                  width={70}
                  height={70}
                />
                <span className=" text-sm">{product.title}</span>
              </li>
              <li>تومان {numberWithCommas(product.price)}</li>
              <li className="  flex justify-center">
                <div className=" shadow py-3 w-fit bg-gray-200  flex items-center h-full px-3  rounded outline-gray-500 outline-offset-1">
                  <Image
                    //   src={count === 1 ? grayMinusIcon : minusIcon}
                    src={minusIcon}
                    alt="minus-icon"
                    className=" cursor-pointer"
                    // onClick={() => {
                    //   if (quantity === 1) {
                    //     setQuantity(1);
                    //   } else {
                    //     setQuantity(quantity - 1);
                    //   }
                    // }}
                  />
                  <span className=" px-4 font-semibold text-base text-orange">
                    {product.count}
                  </span>
                  <Image
                    src={plusIcon}
                    alt="plus-icon"
                    className=" cursor-pointer"
                    // onClick={() => {
                    //   if (quantity === inStock) {
                    //     setQuantity(inStock);
                    //     // toast.error("this product out of stock");
                    //   } else {
                    //     setQuantity(quantity + 1);
                    //   }
                    // }}
                  />
                </div>
              </li>
              <li>تومان {numberWithCommas(product.count * product.price)}</li>
            </ul>
          );
        })}

        <div className=" mt-10 flex gap-4">
          <input
            type="text"
            placeholder="کد تخفیف"
            className=" border rounded-sm py-2 px-4 placeholder:text-sm"
          />
          <button className="primary-button">ثبت کد تخفیف</button>
          <button></button>
        </div>
        <hr className=" mt-10" />
        <div className=" mt-14">
          <h5>جمع سبد خرید </h5>
          <div className=" mt-10 border-b pb-4 flex w-1/3 justify-between">
            <p>جمع سبد خرید</p>
            <p className=" ">{numberWithCommas(cartTotal)} تومان</p>
          </div>
          <div className=" mt-6 border-b pb-4 flex w-1/3 justify-between">
            <p>هزینه ی ارسال</p>
            <p className="">{numberWithCommas(80000)} تومان</p>
          </div>
          <div className=" mt-6 border-b pb-4 flex w-1/3 justify-between">
            <p> جمع کل </p>
            <p className="">{numberWithCommas(cartTotal + 80000)} تومان</p>
          </div>
          <button className=" primary-button mt-8">تایید و تکمیل سفارش</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" w-full h-[60vh] flex items-center justify-center">
        <p className=" text-2xl">سبد خرید خالی هست</p>
      </div>
    );
  }
};

export default Cart;
