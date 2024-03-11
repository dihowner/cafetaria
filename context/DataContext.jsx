"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useGetOrderHistoryQuery } from "@/redux/Vendor/NewSlices/OrderSlice";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState(null);
  const { auth } = useSelector((state) => state.rootReducers);
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
  return (
    <DataContext.Provider value={{ orderHistory }}>
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
