"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiSortAlt2 } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useData } from "@/context/DataContext";

const page = () => {
  const maxLength = 15;
  const truncate = (str) => {
    if (typeof str === "string" && str.length > maxLength) {
      return str.slice(0, maxLength) + ".....";
    }
    return str;
  };
  const orderData = useData();
  const theOrderHistory = orderData.orderHistory?.data;
  console.log("first.... oderDate", orderData, theOrderHistory);
  const tdStyle =
    "text-sm text-white text-center px-1 py-1 font-bold text-left";
  const tdStyleB =
    "px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900 text-center border-r-[2px] border-gray-200";

  return (
    <div className="widt flex flex-col gap-y-4 border w-full">
      <div className="flex justify-between md:items-center flex-col md:flex-row gap-y-6 w-full p-2">
        <div className="flex items-center text-sm  gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg">
          <span>
            <FaCartShopping />
          </span>
          <span>Orders</span>
        </div>
        <div className="flex gap-x-2 text-sm items-center text-[#0000007D] border p-2">
          <span>
            <BiSortAlt2 />
          </span>
          <span>Filter order</span>
        </div>
      </div>

      <div className="w-[100%] overflow-x-auto bg-[white]">
        <div className="inline-block w-full">
          <div className="overflow-hidden">
            <table className="w-full">
              <thead className="border-b">
                <tr className="capitalize bg-[#218B07] text-white w-full">
                  <td scope="col" className={tdStyle}>
                    S/N
                  </td>
                  <td scope="col" className={tdStyle}>
                    Order ID
                  </td>
                  <td scope="col" className={tdStyle}>
                    Order
                  </td>

                  <td scope="col" className={tdStyle}>
                    Address
                  </td>
                  <td scope="col" className={tdStyle}>
                    Phone
                  </td>
                  <td scope="col" className={tdStyle}>
                    Amount
                  </td>
                  <td scope="col" className={tdStyle}>
                    Date
                  </td>
                  <td scope="col" className={tdStyle}>
                    Status
                  </td>
                </tr>
              </thead>

              <tbody>
                {theOrderHistory?.map((item, index) => (
                  <tr className="border-b capitalize my-2" key={index}>
                    <td className={tdStyleB}>{item.id}</td>
                    <td className={tdStyleB}>{item.order_id}</td>
                    <td className={tdStyleB}>
                      <div className="flex items-center justify-center">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="w-8 h-8 rounded-[10px] object-cover"
                            src={item.image}
                            alt="image"
                          />
                          <div className="">
                            <p className="text-sm font-semibold">
                              {item.order}
                            </p>
                            <span className="text-[#ABABAB] text-sm">
                              {item.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={tdStyleB}>{truncate(item.address)}</td>
                    <td className={tdStyleB}>{item.phone}</td>
                    <td className={tdStyleB}>{item.amount}</td>
                    <td className={tdStyleB}>{item.date}</td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm font-medium ">
                      <div className="flex items-center justify-center flex-col">
                        <div
                          className={`w-[100px] ${
                            item.status === "Successful"
                              ? "text-[white] rounded-lg flex justify-center items-center p-1 bg-[#218B07] text-sm"
                              : "text-[white] rounded-lg flex justify-center items-center p-1 bg-[#ED1111] text-sm"
                          }`}
                        >
                          {item.status}
                        </div>

                        <Link
                          href={`/vendor/orders/${item.id}`}
                          className="text-[#218B07]  gap-x-1 mt-1 font-semibold flex items-center"
                        >
                          <p> view details </p>
                          <span>
                            <AiOutlineArrowRight />
                          </span>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
