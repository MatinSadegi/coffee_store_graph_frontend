import React from 'react'
import { BNazaninFont, NastaligFont } from '../utils/fronts';
import Image from 'next/image';
import coffee1 from '@/public/images/abdallaa-alebrahim-bXSeymxOQdM-unsplash.jpg'
import coffee2 from '@/public/images/lex-sirikiat-J-4ozdP9EQ0-unsplash.jpg'

const Providing = () => {
  return (
    <div className=" flex flex-col items-center py-14  mx-auto bg-primary-400">
      <p className=" text-primary-600">
        از طعم های گلدار و روشن تا طعم های قهوه ای تند و صاف
      </p>
      <h2 className={`${NastaligFont.className} mt-10`}>
        ارائه تجربه منحصر به فرد قهوه
      </h2>
      <div className=" flex justify-between w-[1300px] gap-20 ">
        <div className="w-1/2 mt-20 ">
          <p className={`${BNazaninFont.className} text-xl font-semibold`}>ما معتقدیم این بهترین قهوه در شهر است. خودت امتحان کن</p>
          <p className=" text-gray-500 my-8">
            روست های ما دارای چندین یادداشت زیرین هستند. ما بر این باوریم که
            وقتی طراحی خوب و قهوه عالی با هم ترکیب شوند، اتفاق غیرمنتظره می
            تواند رخ دهد. ما همچنین معتقدیم بیرونی در وجود همه ما وجود دارد
          </p>
          <button className="buttons">برو به فروشگاه</button>
        </div>
        <div className="w-1/2 relative mt-10  h-[400px] ">
          <Image
            src={coffee2}
            alt="late"
            width={300}
            className="  absolute right-1/4 top-1/2"
          />
          <Image
            src={coffee1}
            alt="cofe"
            width={200}
            className=" absolute top-0 "
          />
        </div>
      </div>
    </div>
  );
}

export default Providing