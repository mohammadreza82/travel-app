import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 font-Dana -mt-1 mb-3 text-green-50">
          ما اینجا برای شما هستیم
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 font-DanaBold lg:bold-64 xl:max-w-[390px]">
            راهنمای شما به مسیر آسان
          </h2>
          <p className="regular-16 font-Dana text-gray-30 xl:max-w-[520px]">
            تنها با اپلیکیشن هایلینک دیگر گم نمی شوید و دوباره گم نمی شوید، زیرا
            ما از نقشه های آفلاین پشتیبانی می کنیم زمانی که در منطقه اتصال به
            اینترنت وجود ندارد. دوستان، اقوام و دوستان خود را دعوت کنید تا در
            طبیعت بکر از طریق دره لذت ببرند و به قله کوه برسند.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 font-Dana text-gray-20">مقصد</p>
                <p className="bold-16 font-DanaBold text-green-50">۴ دقیقه</p>
              </div>
              <p className="bold-20 font-DanaBold mt-2">منطقه تهران اسپاد</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 font-Dana text-gray-20">شروع مسیر</p>
              <h4 className="bold-20 font-DanaBold mt-2 whitespace-nowrap">
                هر جا که شما اقامت دارید!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
