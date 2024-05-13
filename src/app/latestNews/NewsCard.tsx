import Image from "next/image";
import React from "react";
import blog1 from '@/public/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg';
import { BNazaninFont } from "@/src/utils/fronts";

interface CardProps {
  date: string;
  title: string;
  author: string;
}

const NewsCard = ({ date, title, author }: CardProps) => {
  return (
    <div className=" w-[410px] bg-white">
      <Image src={blog1} alt="blog" />
      <div className=" py-5 px-7">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>{date}</p>
          <p>{author}</p>
        </div>
        <h5 className={`${BNazaninFont.className} py-4`}>{title}</h5>
        <p className=" text-sm text-primary-600">مشاهده بیشتر</p>
      </div>
    </div>
  );
};

export default NewsCard;
