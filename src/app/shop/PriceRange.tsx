"use client";
import { SetStateAction, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const PriceRange = () => {
  const [rangeValues, setRangeValues] = useState([10000, 10000000]);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

  const onChangeHandler = (value: any) => {
    setRangeValues(value);
    const params = new URLSearchParams(searchParams);
    params.set("price[gte]", value[0]);
    params.set("price[lte]", value[1]);
    router.push(pathname + "?" + params.toString());
  };
  return (
    <div className="w-full">
      <p className=" text-sm text-center font-medium">محدوده قیمت</p>
      <Slider
        range
        className="mt-3"
        style={{ height: "5px" }}
        dotStyle={{ backgroundColor: "red" }}
        trackStyle={{ backgroundColor: "#f97316", height: "5px" }}
        railStyle={{ backgroundColor: "#d1d5db", height: "5px" }}
        allowCross={false}
        min={10000}
        max={10000000}
        value={rangeValues}
        onChange={onChangeHandler}
      />
      <p className=" mt-5 w-full text-center text-sm">
        <span>تومان {rangeValues[1]}</span> - <span>تومان {rangeValues[0]}</span>
      </p>
    </div>
  );
};

export default PriceRange;
