"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useGetOrderHistoryQuery } from "@/redux/Vendor/NewSlices/OrderSlice";
import { useGetUserStatisticsQuery } from "@/redux/User/NewSlices/UserSlice";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState(null);
  const [userStatistics, setUserStatistics] = useState(null);
  const { auth } = useSelector((state) => state.rootReducers);
  // for vendor orer history
  const { data, isLoading, isFetching } = useGetOrderHistoryQuery({
    type: "all",
    page: 1,
    token: auth.token,
  });
  useEffect(() => {
    try {
      if (isFetching || isLoading) return;
      setOrderHistory(data);
    } catch (err) {
      console.log(err);
    }
  }, [isFetching, isLoading]);

  const {
    data: userStatData,
    isLoading: isLoadingUserStat,
    isFetching: isFetchingUserStat,
  } = useGetUserStatisticsQuery({
    id: auth.Id,
    token: auth.token,
  });

  useEffect(() => {
    try {
      if (isFetchingUserStat || isLoadingUserStat) return;
      console.log("from context", userStatData);
      setUserStatistics(userStatData);
    } catch (err) {
      console.log("userStat err", err);
    }
  }, [isLoadingUserStat, isFetchingUserStat]);

  return (
    <DataContext.Provider value={{ orderHistory, userStatistics }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used in a context");
  return context;
};

export { DataProvider, useData };
