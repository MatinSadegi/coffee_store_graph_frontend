import React from "react";
import Image from "next/image";
import callIcon from "@/public/images/call.png";

import localFont from "next/font/local";

const BNazanin = localFont({ src: "../../../public/fonts/B-NAZANIN.ttf" });

const ContactUs = () => {
  return (
    <div>
      <div className=" h-[60vh] bg-coffee-background bg-cover bg-center flex justify-center items-center">
        <h1 className={` font-Nastalig text-white text-6xl pt-14`}>
          تماس با ما
        </h1>
      </div>
      <div className=" flex justify-center max-w-[1200px] mx-auto gap-5 py-24">
        <div>
          <Image src={callIcon} alt="call" className="mx-auto" />
          <h2 className={`${BNazanin.className}`}>تماس با ما</h2>
          <p className=" py-5">
            برای ارسال پیشنهادات و نظرات‌تان لطفا فرم زیر را پر کنید تا
            کارشناسان ما بعد از بررسی با شما ارتباط بگیرند.
          </p>
        </div>
        <div className="w-1/2">
          <form action="">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="input"
              />
              <input type="email" placeholder="ایمیل" className="input" />
            </div>
            <input type="text" placeholder="موضوع" className="input  " />
            <textarea placeholder="پیام شما" className="input" rows={8} />
            <button className="buttons mt-3">ارسال پیام</button>
          </form>
        </div>
      </div>
      <div className=" overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.26329069679076!2d45.39665970740109!3d36.956977795557556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4004f3bf7558a3bf%3A0xebf499b4b1148b05!2z2qnYp9mB24wg2KfYs9iq2YjYsSDar9ix2KfZgQ!5e0!3m2!1sen!2s!4v1716402385977!5m2!1sen!2s"
          style={{
            border: "0",
            width: "100vw",
            height: "500px",
          }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
