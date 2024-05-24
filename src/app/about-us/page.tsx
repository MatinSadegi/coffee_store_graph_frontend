'use client'
import React from "react";
import { NastaligFont, BNazaninFont } from "@/src/utils/fronts";
import Image from "next/image";
import Video from "next-video";
import aboutUsVideo from "@/videos/graph-dar.mp4";
import poster from '@/public/images/pexels-olly-925786.jpg';
import img2 from '@/public/images/marianne-krohn-9o2_SyExZIM-unsplash.jpg'
import img3 from '@/public/images/Coffee-Package-Mockup-PSD-aa.jpg'
import img4 from '@/public/images/lex-sirikiat-J-4ozdP9EQ0-unsplash.jpg'

const AboutUs = () => {
  return (
    <div>
      <div className=" h-[60vh] bg-coffee-background bg-cover bg-center flex justify-center items-center">
        <h1 className={`${NastaligFont.className} text-white text-6xl pt-14`}>
          درباره ما
        </h1>
      </div>
      <div className=" max-w-[1200px] mx-auto py-16">
        <h2 className={` text-center ${BNazaninFont.className} font-bold`}>
          تعهد به کیفیت{" "}
        </h2>
        <div className="flex items-center mt-16 gap-12">
          <div className="w-1/2 rounded-lg">
            <Video
              src={aboutUsVideo}
              poster={poster.src}
              primaryColor="white"
              accentColor="rgb(206, 149, 86)"
              style={{ aspectRatio: 3 / 2, borderRadius: "20px" }}
            />
          </div>
          <div className=" w-1/2">
            <h4 className={`  ${BNazaninFont.className} font-bold`}>
              ما معتقدیم که بهترین در شهر هستیم
            </h4>
            <p className=" pt-4">
              ماموریت ما این است که قهوه باکیفیت با منبع پایدار، دست چین شده و
              میکرو بو داده ارائه کنیم. قهوه عالی علاقه ماست و می خواهیم آن را
              با شما به اشتراک بگذاریم. ما در تلاش برای ایجاد مشارکت عمیق با
              کشاورزان از سراسر جهان برای ایجاد چشم انداز با هم و ایجاد روابط
              کاری سالم بر اساس اعتماد و احترام هستیم.
            </p>
          </div>
        </div>
        <div className=" my-24">
          <p
            className={` text-center ${BNazaninFont.className} font-bold text-primary-600 text-xl`}
          >
            فلسفه ما
          </p>
          <h2 className={` text-center ${BNazaninFont.className} font-bold `}>
            قهوه هنر ، آیین و اشتیاق ماست
          </h2>
          <span className=" w-0.5 h-10 bg-primary-600 flex text-center mx-auto mt-4"></span>
          <p className=" max-w-[600px] mx-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden">
        <Image
          src={img2}
          alt="image"
          className=" hover:scale-105 transition-all duration-500 w-1/2 object-cover"
          
        />
        <Image
          src={img3}
          alt="image"
          className=" hover:scale-105 transition-all duration-500 w-1/2 object-cover"
        />
      </div>
      <div className=" my-24">
        <p
          className={` text-center ${BNazaninFont.className} font-bold text-primary-600 text-xl`}
        >
          داستان ما
        </p>
        <h2 className={` text-center ${BNazaninFont.className} font-bold `}>
          قهوه هنر ، آیین و اشتیاق ماست
        </h2>
        <span className=" w-0.5 h-10 bg-primary-600 flex text-center mx-auto my-4"></span>
        <p className=" max-w-[600px] mx-auto">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>
      <div className="flex items-center">
        <Image src={img4} alt="image" className=" w-1/2" />
        <div className="mr-14">
          <p
            className={`  ${BNazaninFont.className} font-bold text-primary-600 text-xl`}
          >
            اهداف ما
          </p>
          <h2 className={`  ${BNazaninFont.className} font-bold `}>
            قهوه هنر ، آیین و اشتیاق ماست
          </h2>
          <span className=" w-10 h-0.5 bg-primary-600 flex text-center  my-8"></span>
          <p className=" max-w-[600px] mx-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
