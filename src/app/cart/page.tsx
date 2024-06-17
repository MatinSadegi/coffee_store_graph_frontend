'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import multiplyIcon from '@/public/icons/multiply-svgrepo-com(2) .svg'
import prodImg from '@/public/images/103111-103111-loveramics-cappuccinotasse-200ml-egg-red.jpg';
import CustomNumberInput from '@/src/components/CustomNumberInput';

const Cart = () => {

  return (
    <div className=" pt-36 pb-16 max-w-[1300px] mx-auto ">
        <h4 className=' text-center mb-20'>سبد خرید </h4>
      <ul className=" border-b grid grid-cols-4 text-center pb-2 ">
        <li className="">محصول</li>
        <li>قیمت</li>
        <li>تعداد</li>
        <li>جمع کل</li>
      </ul>
      <ul className="border-b py-4 grid grid-cols-4 text-center  items-center ">
        <li className=" flex items-center justify-center gap-1 ">
          <Image src={prodImg} alt="product_img" width={70} height={70} />
          <span className=' text-sm'>فنجان اسپرسو خوری</span>
        </li>
        <li>تومان 80000</li>
        <li className='  flex justify-center'>
          <CustomNumberInput/>
        </li>
        <li>تومان 80000</li>
      </ul>
      <div className=' mt-10 flex gap-4'>
        <input type="text" placeholder='کد تخفیف' className=' border rounded-sm py-2 px-4 placeholder:text-sm' />
        <button className='primary-button'>ثبت کد تخفیف</button>
        <button></button>
      </div>
      <hr  className=' mt-10'/>
      <div className=' mt-14'>
        <h5>جمع سبد خرید </h5>
        <div  className=' mt-10 border-b pb-4 flex w-1/3 justify-between'>
            <p>جمع سبد خرید</p>
            <p className=' '>80000 تومان</p>
        </div>
        <div  className=' mt-6 border-b pb-4 flex w-1/3 justify-between'>
            <p>هزینه ی ارسال</p>
            <p className=''>80000 تومان</p>
        </div>
        <div  className=' mt-6 border-b pb-4 flex w-1/3 justify-between'>
            <p> جمع کل </p>
            <p className=''>80000 تومان</p>
        </div>
        <button className=' primary-button mt-8'>تایید و تکمیل سفارش</button>
      </div>
    </div>
  );
}

export default Cart