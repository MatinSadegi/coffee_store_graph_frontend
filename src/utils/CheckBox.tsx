import React from "react";
interface CheckBoxProps {
  name: string;
  checked: boolean;
  value: string;
  label: string;
  onChange: React.ChangeEventHandler;
}

const CheckBox = ({ name, value, label, checked, onChange }: CheckBoxProps) => {
  return (
    <li className="flex font-normal items-center text-gray-700 justify-between relative ">
      <input
        type="checkbox"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        // checked={checked}
        className="relative peer
appearance-none w-6 h-6  bg-gray-300 rounded-sm 
    mt-1
    checked:bg-white checked:border-2 checked:border-orange"
      />
      <svg
        className="absolute right-0 top-0 pointer-events-none  -translate-x-1 translate-y-[3px]  w-4 h-4 mt-1 hidden peer-checked:block z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f97316"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label htmlFor={name} className=" ">
        {label}
      </label>
    </li>
  );
};

export default CheckBox;

