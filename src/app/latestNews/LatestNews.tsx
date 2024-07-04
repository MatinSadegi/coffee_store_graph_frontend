import React from "react";
import NewsCard from "./NewsCard";

import nextIcon from "@/public/icons/arrow-sm-right-svgrepo-com.svg";
import previousIcon from "@/public/icons/arrow-sm-left-svgrepo-com.svg";
import Image from "next/image";

const cardInfo = [
  {
    date: "آذر 10 ، 1402",
    author: "توحید هوشنگی",
    title:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    date: "آذر 22 ، 1403",
    author: "احسان هوشنگی",
    title:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    date: "دی 2 ، 1399",
    author: "مهدی محسنی",
    title:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];

const LatestNews = () => {
  return (
    <div className=" bg-primary-400 py-16 flex justify-center ">
      <div className=" max-w-[1300px] px-8 ">
        <div className=" flex justify-between items-center">
          <div className=" "> 
            <h3 className=" font-BNazanin"> مقالات</h3>
            <p className=" text-gray-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div className=" items-center gap-3 hidden md:flex">
            <Image 
              src={nextIcon}
              alt="arrow-right"
              className=" border p-2 rounded-full  border-black cursor-pointer transition-colors  hover:border-primary-600"
            />

            <Image
              src={previousIcon}
              alt="arrow-left"
              className=" bg-black border p-2 rounded-full cursor-pointer hover:bg-primary-600  "
            />
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-between mt-10 gap-5 ">
          {cardInfo.map((item) => (
            <NewsCard
              date={item.date}
              title={item.title}
              author={item.author}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
