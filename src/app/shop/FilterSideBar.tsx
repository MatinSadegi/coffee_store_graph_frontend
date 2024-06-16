"use client";
import CategoryDropDown from "@/src/components/CategoryDropDown";

const FilterSideBar = ({ categories }: { categories: any }) => {

  
  return (
    <div className=" min-w-screen overflow-x-auto h-fit flex flex-row  lg:min-w-[290px]   lg:border  lg:py-10 lg:px-8  lg:flex-col">
      {/* <PriceRange /> */}
      {categories.map((item: any, index: any) => (
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
