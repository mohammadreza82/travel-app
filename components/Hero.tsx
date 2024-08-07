import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex lg:flex-row flex-col gap-12 py-10 pb-32 md:gap-28 lg:py-20">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="Camp"
          width={50}
          height={50}
          className="absolute right-[-5px] top-[-30px] w-10 lg-w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 font-DanaBold">منطقه کمپ تهران اسپاد</h1>
        <p className="regular-16 font-Dana mt-6 text-gray-30 xl:max-w-[520px]">
          در هر سفر، ما به دنبال تجربه رضایت از مشاهده زیبایی بی‌همتا و
          دست‌نخورده طبیعت هستیم. با یک اپلیکیشن، ما می‌توانیم شما را در
          ماجراجویی‌هایتان در سراسر جهان همراهی کنیم.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="ستاره"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 font-DanaBold text-blue-70">
            ۱۹۸هزار
            <span className="regular-16 font-Dana lg:regular-20 ms-1.5 underline">
              نظرات فوق‌العاده
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="دانلود اپلیکیشن" variant="btn_green" />
          <Button
            type="button"
            title="روش کار ما چیست؟"
            icon="/play.svg"
            variant="btn_white_text "
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start lg:justify-end">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 font-Dana text-gray-20">لوکیشن</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 font-DanaBold text-white">پیرانشهر</p>
          </div>
         
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 font-Dana block text-gray-20">فاصله</p>
                <p className="bold-20 font-DanaBold text-white">۱۹۸ مایل</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 font-Dana block text-gray-20">بلندی</p>
                <p className="bold-20 font-DanaBold text-white">۲ کیلو‌متر</p>
              </div>
            </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
