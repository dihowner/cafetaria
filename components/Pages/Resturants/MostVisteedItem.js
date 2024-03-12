"use client";
import React, { useEffect, useState } from "react";
import { mostVisited } from "@/components/Utilis/Dummy";
import { useGetMealsQuery } from "@/redux/User/ApiSlices/MealApiSlice";
import { AiFillStar } from "react-icons/ai";

// import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const MostVisteedItem = ({ scrollref, scroll }) => {
  const [getMeals, setGetMeals] = useState(null);
  const { data, isLoading, isFetching } = useGetMealsQuery({
    status: "all",
    page: 1,
  });
  useEffect(() => {
    try {
      if (isLoading || isFetching) return;
      setGetMeals(data);
    } catch (err) {
      console.log(err);
    }
  }, [isLoading, isFetching]);

  return (
    <div
      className="flex  max-w-max overflow-hidden scrollbar-none relative gap-x-6 gap-y-6"
      ref={scrollref}
    >
      {getMeals?.data?.map((item, index) => (
        <div
          className="min-w-[240px] md:min-w-[301px] bg-cover bg-center bg-no-repeat rounded-[20px] flex flex-col  scrollbar-none gap-x-4"
          key={index}
        >
          <div className="w-full h-[200px] flex items-center justify-center">
            <img
              src={item.image}
              alt=""
              className="object-fit w-[100%] h-[100%]"
            />
          </div>

          <h3 className="font-[600] text-lg">{item.name}</h3>
          <div className=" flex flex-col  gap-y-4 ">
            <p className="font-[500] text-[#5B5B5B]">{item.descpription}</p>
            <div className="flex gap-x-2 items-center">
              {/* <span className="text-[#218B07]">{item.ratings}</span> */}
              {/* <span>{item.Reviews}</span> */}
              <span className="text-[#218B07]">{<AiFillStar />}</span>
              <span>"4.8 (300 Reviews)"</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostVisteedItem;
