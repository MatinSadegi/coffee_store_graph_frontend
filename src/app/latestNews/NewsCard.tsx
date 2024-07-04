import Image from "next/image";
import React from "react";
import blog1 from '@/public/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg';


interface CardProps {
  date: string;
  title: string;
  author: string;
}

const NewsCard = ({ date, title, author }: CardProps) => {
  return (
    <div className="  bg-white shadow-3xl">
      <Image src={blog1} alt="blog" className=" rounded-sm" />
      <div className=" p-5  lg:px-7">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>{date}</p>
          <p>{author}</p>
        </div>
        <p className={` py-4`}>{title}</p>
        <p className=" text-sm text-primary-600 cursor-pointer">مشاهده بیشتر</p>
      </div>
    </div>
  );
};

export default NewsCard;
