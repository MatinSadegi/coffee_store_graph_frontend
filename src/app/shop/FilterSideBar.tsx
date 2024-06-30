"use client";
import CategoryDropDown from "@/src/components/CategoryDropDown";
import { CategoryTypes } from "@/src/types/types";

const FilterSideBar = ({ categories }: { categories: CategoryTypes[] }) => {
  return (
    <div className=" min-w-screen overflow-x-auto h-fit flex flex-row  lg:min-w-[290px]   lg:border  lg:py-10 lg:px-8  lg:flex-col">
      {/* <PriceRange /> */}
      {categories.map((item: CategoryTypes, index: number) => (
        <CategoryDropDown
          key={index}
          title={item.title}
          subCategory={item.subCategory}
        />
      ))}
    </div>
  );
};

export default FilterSideBar;
