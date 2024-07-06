// 'use client'
// import React, { useState } from "react";
// import Image from "next/image";
// import minusIcon from "@/public/icons/minus-svgrepo-com.svg";
// import plusIcon from "@/public/icons/plus-svgrepo-com.svg";
// import { useAppContext } from "../context";

// const CustomNumberInput = () => {
//   const { quantity, setQuantity } = useAppContext();

//   return (
//     <div className=" shadow  py-3 w-fit bg-gray-200  flex items-center justify-center  px-3  rounded outline-gray-500 outline-offset-1">
//       <Image
//         //   src={count === 1 ? grayMinusIcon : minusIcon}
//         src={minusIcon}
//         alt="minus-icon"
//         className=" cursor-pointer"
//         onClick={() => {
//           if (quantity === 1) {
//             setQuantity(1);
//           } else {
//             setQuantity(quantity - 1);
//           }
//         }}
//       />
//       <span className=" px-4 font-semibold text-base text-orange">
//         {quantity}
//       </span>
//       <Image
//         src={plusIcon}
//         alt="plus-icon"
//         className=" cursor-pointer"
//         //   onClick={() => {
//         //     if (quantity === count[state + ""]) {
//         //       setQuantity(count[state + ""]);
//         //       toast.error("this product out of stock");
//         //     } else {
//         //       setQuantity(quantity + 1);
//         //     }
//         //   }}
//       />
//     </div>
//   );
// };

// export default CustomNumberInput;
