"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  useRouter,
  useSearchParams,
  usePathname,
  ReadonlyURLSearchParams,
} from "next/navigation";
import Image from "next/image";
import sortIcon from "@/public/icons/sort-from-top-to-bottom-svgrepo-com.svg";

const Sort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("جدیدترین");

  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("sort", sort));
  }, [sort]);
  return (
    <div className=" w-full border mt-6 mb-8">
      <div className=" flex items-center p-3 gap-4">
        <Image src={sortIcon} alt="sort-icon" />
        <span className="text-gray-500 text-sm">مرتب سازی :</span>
        <ul className=" flex flex-col sm:flex-row text-sm">
          <li
            className={` px-2 py-1  font-medium  cursor-pointer ${
              sort === "جدیدترین" ? "text-primary-600" : " text-gray-500"
            }`}
            onClick={(e) => setSort(e.currentTarget.innerHTML)}
          >
            جدیدترین
          </li>
          <li
            className={` px-2 py-1  font-medium  cursor-pointer ${
              sort === "گران ترین" ? "text-primary-600" : "text-gray-500"
            }`}
            onClick={(e) => setSort(e.currentTarget.innerHTML)}
          >
            گران ترین
          </li>
          <li
            className={` px-2 py-1  font-medium  cursor-pointer ${
              sort === "ارزان ترین" ? "text-primary-600" : "text-gray-500"
            }`}
            onClick={(e) => setSort(e.currentTarget.innerHTML)}
          >
            ارزان ترین
          </li>
          <li
            className={` px-2 py-1  font-medium  cursor-pointer ${
              sort === "پرفروش ترین" ? "text-primary-600" : "text-gray-500"
            }`}
            onClick={(e) => setSort(e.currentTarget.innerHTML)}
          >
            پرفروش ترین
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
