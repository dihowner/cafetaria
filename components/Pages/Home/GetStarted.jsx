import React from "react";
import { gettingstarted } from "@/components/Utilis/Dummy";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const GetStarted = () => {
  return (
    <div className="flex w-[100%] gap-x-4 justify-center items-center">
      <div className="width grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center self-center gap-y-8 gap-x-6">
        {gettingstarted.map((item, index) => (
          <div className=" flex flex-col w-[100%] gap-y-4" key={index}>
            <div className="w-full">
              <img src={item.image} alt="" className="object-fit w-[100%]" />
            </div>

            <h3 className="font-[600] text-lg">{item.title}</h3>
            <div className=" flex flex-col  gap-y-4 ">
              <p>{item.descpription}</p>
              <Link
                href={item.link}
                className="text-[#FF9C06] gap-x-1 font-semibold flex items-center"
              >
                {item.link === "" ? "Comming Soon" : "Get Started"}{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
