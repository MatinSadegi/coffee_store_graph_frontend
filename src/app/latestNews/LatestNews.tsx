import React from "react";
import NewsCard from "./NewsCard";
import { NastaligFont } from "@/src/utils/fronts";
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
    <div className=" bg-primary-400 p-16 flex justify-center ">
      <div className=" w-[1300px] ">
        <div className=" flex justify-between items-center">
          <div className=" ">
            <h2 className={`${NastaligFont.className}`}> مقالات</h2>
            <p className=" text-gray-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div className=" flex items-center gap-3">
            <Image
              src={nextIcon}
              alt="arrow-right"
              className=" border p-2 rounded-full border-black"
            />

            <Image
              src={previousIcon}
              alt="arrow-left"
              className=" bg-black border p-2 rounded-full  "
            />
          </div>
        </div>
        <div className=" flex items-center justify-between mt-10">
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
