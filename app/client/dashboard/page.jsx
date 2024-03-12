"use client";
import SeconSide from "@/components/ClientDasboard/Dashboard/SeconSide";
import TopSide from "@/components/ClientDasboard/Dashboard/TopSide";
import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { useStatisticMutation } from "@/redux/statiscsApiSlice";
import { useDispatch } from "react-redux";
import { setStat } from "@/redux/DashBoard/StatisticSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useGetMealsQuery } from "@/redux/User/ApiSlices/MealApiSlice";
import { useData } from "@/context/DataContext";
// toast/
const page = () => {
  const { auth, stat } = useSelector((state) => state.rootReducers);
  console.log("the aut", auth);
  const [statistic, { isLoading: staticLoading }] = useStatisticMutation();
  const dispatch = useDispatch();
  const id =
    typeof window !== "undefined" && localStorage.getItem("Id")
      ? JSON.parse(localStorage.getItem("Id"))
      : null;
  const fetchstat = async () => {
    try {
      const response = await statistic(id).unwrap();
      dispatch(setStat(response));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    if (auth?.token) {
      fetchstat();
    }
  }, [auth?.token]);

  const [getMeals, setGetMeals] = useState(null);
  const { data, isLoading, isFetching } = useGetMealsQuery({
    status: "all",
    page: 1,
  });
  useEffect(() => {
    try {
      if (isLoading || isFetching) return;
      const mealData = data?.data;
      setGetMeals(mealData);
    } catch (err) {
      console.log(err);
    }
  }, [isLoading, isFetching]);

  // user statistics
  const userStat = useData().userStatistics;
  console.log("from user dash... present", userStat);

  return (
    <div className="w-full justify-center items-center flex flex-col gap-y-8">
      <div className="flex justify-between width md:items-center flex-col md:flex-row gap-y-6 p-4">
        <div className="flex items-center text-lg  gap-x-4 capitalize  p-4 border-2 bg-[#FAFAFA] rounded-lg">
          <span>
            <MdDashboard />
          </span>
          <span>dashboard</span>
        </div>
      </div>
      <TopSide stat={stat} userStat={userStat} />
      <SeconSide stat={stat} getMeals={getMeals} />
    </div>
  );
};

export default page;
