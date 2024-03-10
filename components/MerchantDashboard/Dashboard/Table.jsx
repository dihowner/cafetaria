import React, { useEffect, useState } from "react";
import { DashboardTableData } from "@/components/Utilis/Dummy";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useGetOrderHistoryQuery } from "@/redux/Vendor/NewSlices/OrderSlice";
// Link
const Table = () => {
  const maxLength = 15;
  const truncate = (str) => {
    if (typeof str === "string" && str.length > maxLength) {
      return str.slice(0, maxLength) + ".....";
    }
    return str;
  };

  // const [orderHistory, setOrderHistory] = useState(null);
  // const { auth } = useSelector((state) => state.rootReducers);
  // const { data, isLoading, isFetching } = useGetOrderHistoryQuery({
  //   type: "all",
  //   page: 1,
  //   token: auth.token,
  // });

  // useEffect(() => {
  //   try {
  //     if (isFetching || isLoading) return;
  //     setOrderHistory(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  // console.log("first..........", orderHistory);
  // // The value to be use
  // const orderHistoryPages = orderHistory?.pagination;
  // const orderHistoryList = orderHistory?.data;
  // // I need to configure the change in pages

  // Selected Order history

  return (
    <div className="width flex flex-col gap-y-4">
      <div className="flex gap-x-4 items-center">
        <h1 className="text-[#000000B5] font-bold text-base md:text-lg">
          Recents Orders
        </h1>
        <CustomButton
          title="View All Orders"
          containerStyles="text-[white] flex justify-center items-center py-2 px-2 md:px-4 rounded-[8px] gap-x-2  bg-[#218B07]"
        />
      </div>
      {/* sm:-mx-6 lg:-mx-8 */}
      <div className=" w-[100%] overflow-x-auto bg-[white]  border">
        <div className="flex justify-between items-center w-full min-w-full px-2 py-2">
          <div className="flex gap-x-2 items-center text-sm font-semibold">
            <span>
              <FaCartShopping />
            </span>
            <span>Order</span>
          </div>
          <span>....</span>
        </div>
        <div className=" inline-block min-w-full ">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr className="capitalize bg-[#218B07] text-white">
                  <td
                    scope="col"
                    className="text-sm font-bold text-white px-1 py-1 text-left"
                  >
                    #
                  </td>
                  <td
                    scope="col"
                    className="text-sm  text-white px-1 py-1 font-bold whitespace-nowrap text-left"
                  >
                    Order ID
                  </td>
                  <td
                    scope="col"
                    className="text-sm  text-white px-1 py-1 font-bold text-left"
                  >
                    Order
                  </td>

                  <td
                    scope="col"
                    className="text-sm  text-white px-1 py-1 font-bold text-left"
                  >
                    Address
                  </td>
                  <td
                    scope="col"
                    className="text-sm  text-white px-1 py-1 font-bold text-left"
                  >
                    Phone
                  </td>
                  <td
                    scope="col"
                    className="text-sm  text-white px-1 py-1 font-bold text-left"
                  >
                    Amount
                  </td>
                  <td
                    scope="col"
                    className="text-sm  text-white px-1 py-1 font-bold text-left"
                  >
                    Date
                  </td>
                  <td
                    scope="col"
                    className="text-sm  text-white px-1 py-1 font-bold text-left"
                  >
                    Status
                  </td>
                </tr>
              </thead>
              <tbody>
                {DashboardTableData.map((item, index) => (
                  <tr className="border-b capitalize my-4" key={index}>
                    <td className="px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.id}
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.order_id}
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex gap-x-2">
                        <img
                          className="w-8 h-8 rounded-[10px] object-cover"
                          src={item.image}
                          alt="image"
                        />
                        <div className="">
                          <p className="text-sm font-semibold">{item.order}</p>
                          <span className="text-[#ABABAB] text-sm">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      {truncate(item.address)}
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.phone}
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.amount}
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.date}
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm font-medium ">
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
                        className="text-[#218B07]  gap-x-1 mt-4 font-semibold flex items-center"
                      >
                        <p> view details </p>
                        <span>
                          <AiOutlineArrowRight />
                        </span>
                      </Link>
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

export default Table;
