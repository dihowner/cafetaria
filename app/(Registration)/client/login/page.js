"use client";
import CustomButton from "@/components/CustomButton";
import InputsCustom from "@/components/InputsCustom";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiRadioCircle } from "react-icons/bi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GiPadlock } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import RegSidebar from "@/components/RegSidebar";
import { UseAuth } from "@/components/Utilis/Fetch/AuthFetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Loader from "@/components/Loader";
// Link
const page = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { useLogin, loginLoading } = UseAuth();
  const { auth } = useSelector((state) => state.rootReducers);

  // const router = useRouter()
  const roles = "user";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isvalid) {
      await useLogin(email, password, roles);
    } else {
      toast.error("please fill out the field");
    }
  };
  const isvalid = email && password;
  console.log(auth);
  useEffect(() => {
    if (auth && auth?.token && auth?.user === "user") {
      router.push("/client/dashboard");
    }
  }, [router, auth]);
  return (
    <div className="flex justify-center bg-[#F6F6F6] w-[100%] py-8 min-h-[100vh]">
      <div className="flex flex-col justify-center items-center md:flex-row bg-[white] w-[80%] gap-x-6 gap-y-6 px-4 py-2 ">
        <div className="bg-[#FF9C06] flex flex-col px-4 justify-center items-center rounded-3xl text-white w-[100%] sm:w-[100%] md:w-[50%] py-16 h-full relative">
          <div className="absolute top-0 left-0 p-4">
            <FaBars
              className="text-3xl"
              onClick={() => {
                setToggle(true);
              }}
            />
          </div>
          <div className="w-[80%] flex flex-col justify-center items-center gap-y-3">
            <h1 className="text-4xl lg:text-6xl  text-center font-bold">
              You Made the right choice
            </h1>
            <div className="w-[80%] flex justify-center items-center">
              <img src="/Images/Rectangle 84 (1).png" />
            </div>
            <p className="text-center">
              No stress with cafeteria the best app that enables you to shop
              from home
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] h-full flex flex-col justify-center gap-y-6">
          <div className="flex justify-end">
            <Link href="/" className="logo w-[20%]">
              <Image
                src="/cafetarialogo.png"
                alt="logo"
                width={118}
                height={18}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex justify-center h-full flex-col">
            <div className="flex flex-col gap-y-3">
              <h3 className="text-2xl font-bold">Login</h3>
              <span>
                Don’t have an account?{" "}
                <Link href="/client/signup" className="text-[#FF9C06]">
                  sign up
                </Link>{" "}
              </span>
            </div>
            <div className="flex flex-col gap-y-4">
              <p>Sign in as</p>
              <div className="flex gap-x-4 w-[100%] flex-col sm:flex-row gap-y-4 md:w-[50%]">
                <CustomButton
                  title="Customer"
                  containerStyles="bg-[#FF9C06] text-white flex justify-center items-center py-2 px-4 rounded-[8px] gap-x-4"
                  Icon={<BiRadioCircle />}
                />
                <CustomButton
                  title="Merchant"
                  containerStyles="text-[#00000087] flex justify-center items-center py-2 px-4 rounded-[8px] gap-x-4 border"
                  Icon={<BiRadioCircle />}
                  handleClick={() => router.push("/vendor/login")}
                />
              </div>
              <form
                action=""
                className="flex flex-col gap-y-6 w-[100%] md:w-[60%]"
                onSubmit={handleSubmit}
              >
                <InputsCustom
                  title="Email Address"
                  value={email}
                  onchange={setEmail}
                  type={"email"}
                  Icon={<HiOutlineEnvelope />}
                />
                <InputsCustom
                  title="Password"
                  value={password}
                  onchange={setPassword}
                  type="password"
                  Icon={<GiPadlock />}
                />
                <div className="flex gap-x-3 items-center flex-col lg:flex-row gap-y-2">
                  <CustomButton
                    title={loginLoading ? "loading...." : "Login"}
                    containerStyles="bg-[#FF9C06] text-white flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4"
                    type="submit"
                  />
                  <span>
                    Forgot password?{" "}
                    <Link
                      href="/client/forgetpassword"
                      className="text-[#FF9C06]"
                    >
                      click here
                    </Link>{" "}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RegSidebar setToggle={setToggle} toggle={toggle} />
    </div>
  );
};

export default page;
