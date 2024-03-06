"use client";

import CustomButton from "@/components/CustomButton";
import React from "react";
import { useRouter } from "next/navigation";

const EarnonCafetaria = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-centerw-[100%]">
      <div className="width border-2 border-black bg-[#FF9C06] justify-center flex min-h-[400px] py-6 ">
        <div className="w-[80%] h-[100%] flex gap-x-6 items-center flex-col md:flex-row gap-y-6  ">
          <div className=" w-[100%] md:w-[50%] h-full ">
            <img
              src="/Rectangle 81.png"
              alt=""
              className="object-fit w-full h-full"
            />
          </div>
          <div className=" flex flex-col w-[100%] md:w-[50%] gap-y-6 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Earn on Cafeteria
            </h2>
            <p>
              Cafeteria allows you order food from favorite vendors, favorite
              restaurants and even allows u order raw foods on budgets from the
              comforts of your home in minutes and even allows u order raw foods
              on budgets from the comforts of your home in minutes
            </p>
            <CustomButton
              title="Get Started"
              containerStyles=" bg-[white]  py-4 px-2 flex justify-center items-center text-[#FF9C06] rounded-[8px] text-lg w-[50%] sm:w-[40%] md:w-[40%] "
              handleClick={() => router.push("client/login")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnonCafetaria;
