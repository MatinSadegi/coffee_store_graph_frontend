import React from 'react'
import { BNazaninFont, IranSansRegular, VazirFont } from '../utils/fronts';
import Image from 'next/image';
import coffee1 from '@/public/images/abdallaa-alebrahim-bXSeymxOQdM-unsplash.jpg'
import coffee2 from '@/public/images/lex-sirikiat-J-4ozdP9EQ0-unsplash.jpg'

const Providing = () => {
  return (
    <div className=" flex flex-col items-center text-center py-16  mx-auto bg-primary-400 lg:text-right ">
      <div className="px-8 text-center">
        <p className=" text-primary-600">
          از طعم های گلدار و روشن تا طعم های قهوه ای تند و صاف
        </p>
        <h3 className={`${BNazaninFont.className} mt-8`}>
          ارائه تجربه منحصر به فرد قهوه
        </h3>
      </div>
      <div className=" max-w-[1300px]  flex flex-col justify-between gap-10 items-center px-0 sm:px-8 lg:flex-row ">
        <div className=" max-w-[600px]  px-8 sm:px-0 lg:mt-20  lg:max-w-[1100px]  lg:w-1/2 ">
          <p className={`text-xl`}>
            ما معتقدیم این بهترین قهوه در شهر است. خودت امتحان کن
          </p>
          <p className=" text-gray-500 my-8">
            روست های ما دارای چندین یادداشت زیرین هستند. ما بر این باوریم که
            وقتی طراحی خوب و قهوه عالی با هم ترکیب شوند، اتفاق غیرمنتظره می
            تواند رخ دهد. ما همچنین معتقدیم بیرونی در وجود همه ما وجود دارد
          </p>
          <button className="primary-button">برو به فروشگاه</button>
        </div>
        <div className=" max-w-[600px] relative mt-10 overflow-hidden order-first lg:w-1/2 lg:h-[500px] lg:order-last   ">
          <Image
            src={coffee2}
            alt="late"
            className=" left-0 bottom-0 lg:w-[400px] lg:absolute lg:top-1/2"
          />
          <Image
            src={coffee1}
            alt="cofe"
            className=" absolute hidden w-[250px] top-0 right-0 lg:block "
          />
        </div>
      </div>
    </div>
  );
}

export default Providing