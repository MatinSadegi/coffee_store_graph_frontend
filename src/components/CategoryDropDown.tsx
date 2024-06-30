"use client";
import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import downIcon from "@/public/icons/down-arrow-5-svgrepo-com.svg";
import Image from "next/image";
import CheckBox from "../utils/CheckBox";
import multiplyIcon from '@/public/icons/multiply-svgrepo-com(2) .svg'

interface CategoryDropDownProps {
  title: string;
  subCategory: string[];
}

const CategoryDropDown: React.FC<CategoryDropDownProps> = ({
  title,
  subCategory,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [dropDown, setDropDown] = useState(false);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );

  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (selectedSubCategories.includes(value)) {
      const categories = selectedSubCategories.filter(
        (selected) => selected !== value
      );
      setSelectedSubCategories(categories);
      router.push(
        pathname + "?" + createQueryString("subCategory", categories)
      );
    } else {
      setSelectedSubCategories([...selectedSubCategories, value]);
      router.push(
        pathname +
          "?" +
          createQueryString("subCategory", [...selectedSubCategories, value])
      );
    }
  };

  return (
    <ul className=" text-sm py-2 flex w-fit pr-6 lg:flex-col   font-semibold lg:w-full lg:mt-8 lg:pr-0 ">
      <div
        className=" flex items-center py-2  gap-2 lg:justify-between  lg:py-5  "
        onClick={() => setDropDown(!dropDown)}
      >
        <p className=" text-nowrap">{title}</p>
        {subCategory.length ? (
          <Image
            src={downIcon}
            alt="down-icon"
            className={`${dropDown ? "rotate-180" : "rotate-0"} transition-all`}
          />
        ) : null}
      </div>
      <div className={` fixed z-30 w-screen h-screen top-0 right-0 bg-[rgba(0,0,0,0.3)] lg:bg-transparent lg:static lg:w-full lg:h-fit ${dropDown ? 'flex' : 'hidden'}`} onClick={()=>setDropDown(false)} >
        <div
          className={`  p-10  bg-white rounded-t-[6%] translate-x-2 w-screen absolute flex  justify-between bottom-0  right-0  overflow-hidden lg:p-0 lg:rounded-none lg:translate-x-0 lg:w-full  lg:flex flex-col gap-4 lg:static    ${
            dropDown ? "h-fit " : "h-0 "
          }`}
        >
          <p className=" text-2xl font-normal text-center lg:hidden mb-4">{title}</p>
          <Image src={multiplyIcon} alt="multiply-icon" className=" absolute top-6 left-6 cursor-pointer lg:hidden" onClick={()=>setDropDown(false)}/>
          {subCategory?.map((sub: string) => {
            return (
              <CheckBox
                value={sub}
                key={sub}
                name="product-type"
                label={sub}
                onChange={categoryHandler}
                checked={selectedSubCategories.includes(sub)}
              />
            );
          })}
        </div>
      </div>
    </ul>
  );
};

export default CategoryDropDown;
