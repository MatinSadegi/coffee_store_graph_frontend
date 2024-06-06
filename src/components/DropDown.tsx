"use client";
import React, { useState } from "react";
import downIcon from "@/public/icons/down-arrow-5-svgrepo-com.svg";
import Image from "next/image";
interface DropDownProps {
  items: string[];
  trigger: string;
  //   currentFormItem: string;
  //   form: FormData;
  //   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const DropDown: React.FC<DropDownProps> = ({ items, trigger }) => {
  const [dropDown, setDropDown] = useState(true);
  const [selectedItem, setSelectedItem] = useState(trigger);

  return (
    <div
      className={`w-40 relative text-gray-500 text-sm font-light ${
        dropDown ? "overflow-hidden" : " overflow-visible"
      } `}
    >
      <div
        className={`flex justify-between rounded p-2 transition-all cursor-pointer border  relative z-0 overflow-hidden ${
          dropDown ? "border-gray-300" : "border-gray-500"
        }`}
        onClick={() => setDropDown((prev) => !prev)}
      >
        <p className="">{selectedItem}</p>
        <div className=" flex ">
          <Image
            src={downIcon}
            alt="down-icon"
            className={`${dropDown ? "rotate-0" : "rotate-180"} transition-all`}
          />
        </div>
      </div>

      <ul
        className={`flex flex-col  w-full absolute z-10 max-h-[150px] overflow-y-auto scrollbar `}
      >
        {items.map((item: string) => {
          return (
            <li
              key={item}
              className="text-gray-400 bg-white p-2  hover:bg-gray-200  font-medium transition-all "
              onClick={() => {
                setSelectedItem(item);
                setDropDown(true);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
    // <div className=" w-10 h-10   bg-red-400  ">
    //   {/* <div className="  h-10 flex justify-between items-center ">
    //     <p className="">{selectedItem}</p>
    //       <Image
    //         src={downIcon}
    //         alt="down-icon"
    //         className={`${dropDown ? "rotate-0" : "rotate-180"} transition-all`}
    //       />

    //   </div> */}
    // </div>
  );
};

export default DropDown;
