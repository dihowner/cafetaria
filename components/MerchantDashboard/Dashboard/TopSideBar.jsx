import CustomButton from "@/components/CustomButton";
import { useGetStatisticQuery } from "@/redux/Vendor/NewSlices/VendorStatisticSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  AiFillAccountBook,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const TopSideBar = () => {
  const [boardData, setBoardata] = useState(null);
  const { auth } = useSelector((state) => state.rootReducers);
  const { data, isLoading, isFetching } = useGetStatisticQuery({
    id: auth.vendor_id,
    token: auth.token,
  });

  useEffect(() => {
    try {
      if (isLoading ?? isFetching) return;
      setBoardata(data);
    } catch (err) {
      console.log("error", err);
    }
  }, []);

  return (
    <div className="width flex items-cente flex-col lg:flex-row gap-x-8 gap-y-4 ">
      <div className="flex flex-col w-[100%] lg:w-[70%] border p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6 w-full">
          <div className="py-3 px-2 flex justify-center items-center flex-col gap-y-2 rounded-[10px] border">
            <div className="flex justify-center items-center gap-x-2">
              <span className="bg-[#E1510D] text-[white] p-2 text-base">
                <AiFillAccountBook />
              </span>
              <h4 className="text-base text-[#5B5B5B99]">Account balance</h4>
            </div>
            <p className="text-lg font-bold text-center">
              {boardData?.wallet_balance}
            </p>
          </div>

          <div className="py-3 px-2 flex justify-center items-center flex-col gap-y-2 rounded-[10px] border">
            <div className="flex justify-center items-center gap-x-2">
              <span className="bg-[#218B07] text-[white] p-2 text-base">
                <AiOutlineShoppingCart />
              </span>
              <h4 className="text-base text-[#5B5B5B99]">
                Total items delivered
              </h4>
            </div>
            <p className="text-lg font-bold text-center">
              {boardData?.total_order_delivered}
            </p>
          </div>

          <div className="py-3 px-2 flex justify-center items-center flex-col gap-y-2 rounded-[10px] border">
            <div className="flex justify-center items-center gap-x-2">
              <span className="bg-[#218B07] text-[white] p-2 text-base">
                <AiOutlineShoppingCart />
              </span>
              <h4 className="text-base text-[#5B5B5B99]">
                Total order dispatched
              </h4>
            </div>
            <p className="text-lg font-bold text-center">
              {boardData?.total_order_dispatched}
            </p>
          </div>

          <div className="py-3 px-2 flex justify-center items-center flex-col gap-y-2 rounded-[10px] border">
            <div className="flex justify-center items-center gap-x-2">
              <span className="bg-[#218B07] text-[white] p-2 text-base">
                <AiOutlineShoppingCart />
              </span>
              <h4 className="text-base text-[#5B5B5B99]">
                Total order pending
              </h4>
            </div>
            <p className="text-lg font-bold text-center">
              {boardData?.total_order_pending}
            </p>
          </div>

          <div className="py-3 px-2 flex justify-center items-center flex-col gap-y-2 rounded-[10px] border">
            <div className="flex justify-center items-center gap-x-2">
              <span className="bg-[#218B07] text-[white] p-2 text-base">
                <AiOutlineShoppingCart />
              </span>
              <h4 className="text-base text-[#5B5B5B99]">
                Pending wallet balance
              </h4>
            </div>
            <p className="text-lg font-bold text-center">
              {boardData?.pending_wallet_balance}
            </p>
          </div>
        </div>

        <div className="graph">Expecting graph here soon.....</div>
      </div>

      <div className="flex flex-col gap-y-2 ">
        <div className="border rounded-lg py-2 px-2 flex flex-col gap-y-4">
          <h3 className="text-lg font-semibold">Notification</h3>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col  gap-y-2 p-2 border-b">
              <span className="bg-[#FF9C06] p-2 text-white w-[40%] rounded-md flex justify-center items-center text-sm ">
                New order
              </span>
              <p className="text-sm">
                You just received a new order from Abayomi daniels
              </p>
            </div>
            <div className="flex flex-col gap-y-2 p-2 border-b">
              <span className="bg-[#FF9C06] p-2 text-white w-[40%] rounded-md flex justify-center items-center text-sm">
                New order
              </span>
              <p className="text-sm">
                You just received a new order from Abayomi daniels
              </p>
            </div>
            <div className="flex flex-col gap-y-2 p-2 border-b">
              <span className="bg-[#FF9C06] p-2 text-white w-[40%] rounded-md flex justify-center items-center text-sm">
                New order
              </span>
              <p className="text-sm">
                You just received a new order from Abayomi daniels
              </p>
            </div>
          </div>
          <CustomButton
            title="View all notifications"
            containerStyles="bg-[#218B07]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-sm w-[50%] md:w-[30%]  lg:w-[100%]"
          />
        </div>
        <div className=" border flex flex-col py-4 px-6 rounded-lg ">
          <div className="py-3 px-2 flex justify-center items-center flex-col gap-y-2 rounded-[10px] ">
            <div className="flex justify-center items-center gap-x-2">
              <span className="bg-[#FF9C06] text-[white] p-2 text-lg">
                <AiOutlineStar />
              </span>
              <h4 className="text-sm text-[#5B5B5B99]">Satisfaction rating</h4>
            </div>
            <p className="text-xl font-bold text-center">4.9</p>
          </div>
          <CustomButton
            title="View product rating"
            containerStyles="bg-[#218B07]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-sm w-[50%] md:w-[30%]  lg:w-[100%]"
          />
        </div>
      </div>
      {/* <div className="py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[10px] border ">
                <div className="flex justify-center items-center gap-x-4">
                    <span className='bg-[#FF9C06] text-[white] p-2 text-3xl'><AiOutlineStar /></span>
                    <h4 className='text-2xl text-[#5B5B5B99]'>Satisfaction rating</h4>
                </div>
                <p className='text-4xl font-bold text-center'>
                    90%
                </p>
           </div>
          */}
    </div>
  );
};

export default TopSideBar;
