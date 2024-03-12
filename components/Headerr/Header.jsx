"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// import Logo from '../../public/'
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation";
import CustomButton from "../CustomButton";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsWechat, BsChatDots } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useDetailsMutation } from "@/redux/Vendor/detailsApiSlice";
import { setVendorDetails } from "@/redux/Vendor/Slices/detailsSlice";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const { auth } = useSelector((state) => state.rootReducers);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (auth?.token) {
      setIsAuth(true);
    }
  }, [isAuth, auth]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 90; // Adjust this value as needed
      if (scrollTop > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();

  return (
    <div
      className={`${
        isFixed
          ? "w-[100%] flex justify-center items-center bg-[#F6F6F6] py-3 transition-all duration-75 fixed z-[999] shadow-md"
          : "w-[100%] flex justify-center items-center bg-[white] py-3 transition-all duration-75 shadow-md "
      }`}
    >
      <div className="flex width justify-between items-center">
        <Link href="/" className="logo w-[20%]">
          <Image
            src="/cafetarialogo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        {/* <ul className=" gap-x-3 text-lg hidden md:flex">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "font-bold"
                  : "font-medium hover:font-bold ease-in duration-300"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/restuarant"
              className={`${
                pathname === "/restuarant"
                  ? "font-bold"
                  : "font-medium hover:font-bold ease-in duration-300"
              }`}
            >
              Resturants
            </Link>
          </li>
          <li>
            <Link
              href="/stores"
              className={`${
                pathname === "/stores"
                  ? "font-bold"
                  : "font-medium hover:font-bold ease-in duration-300"
              }`}
            >
              Groceries
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "font-bold"
                  : "font-medium hover:font-bold ease-in duration-300"
              }`}
            >
              About
            </Link>
          </li>
        </ul> */}

        {isAuth ? (
          <>
            {auth?.user === "user" ? (
              <div className="flex gap-x-6">
                <CustomButton
                  title="Cart 16"
                  containerStyles=" hidden md:flex text-[white] flex justify-center bg-[#FF9C06] items-center py-2 px-2 rounded-[5px] gap-x-4 border"
                  Icon={<AiOutlineShoppingCart />}
                  handleClick={() => router.push("/client/cart")}
                  disable_btn={false}
                />
                <div className="md:flex justify-center hidden items-center gap-x-2">
                  <div className="bg-[#C9C9C9] rounded-[10px] py-2 px-2 text-3xl h-12 w-12  text-[#FFFFFF]">
                    <BsWechat />
                  </div>
                  <div className="bg-[#C9C9C9] rounded-[8px] text-lg h-12 w-12 text-[#FFFFFF]">
                    <img
                      src="/Rectangle 87.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div
                  className="md:flex items-center gap-x-4 capitalize  text-4xl hidden  "
                  onClick={() => router.push("/client/dashboard")}
                >
                  <FaBars />
                </div>
              </div>
            ) : (
              <>
                <div className="md:flex justify-center hidden items-center gap-x-2">
                  {/* Adetunji, I want to add cursor to all here and links
                  Is auth is confirm redirection to dashbouard automatically */}
                  <div className="bg-[#C9C9C9] rounded-[10px] py-2 px-2 text-3xl h-12 w-12 text-[#FFFFFF]">
                    <BsWechat />
                  </div>
                  <div className="bg-[#C9C9C9] rounded-[8px] text-lg h-12 w-12 text-[#FFFFFF]">
                    <img
                      src="/Rectangle 87.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <Link
                    href="/vendor/dashboard"
                    className="md:flex items-center gap-x-4 capitalize  text-4xl hidden  "
                  >
                    <FaBars />
                  </Link>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="loginandsigup hidden md:flex gap-x-4 justify-center items-center">
            <Link href="/client/login" className="login font-semibold text-lg">
              Login
            </Link>
            <Link
              href="/client/signup"
              className="signup bg-[#FF9C06] flex justify-center items-center text-white rounded-[8px] py-2 w-[100px]"
            >
              Sign up
            </Link>
          </div>
        )}
        <div className="flex gap-x-8 flex-row-reverse items-center md:hidden">
          <RxHamburgerMenu
            className="inline-block md:hidden hamburger text-4xl "
            onClick={() => {
              setToggle(true);
            }}
          />{" "}
          {/* {auth?.user === 'user' ? (
            <div>
              <CustomButton
                title='Cart 16' containerStyles='text-[white] md:hidden  flex justify-center bg-[#FF9C06] items-center py-2 px-2 rounded-[5px] gap-x-4 border'
                Icon={<AiOutlineShoppingCart />}
                handleClick={() => router.push('/client/cart')}
                disable_btn={false}
              />
            </div>
          ) : null} */}
          {/* <>
            {auth?.user === 'user' ?
              <div>
                <CustomButton
                  title='Cart 16' containerStyles='text-[white] md:hidden  flex justify-center bg-[#FF9C06] items-center py-2 px-2 rounded-[5px] gap-x-4 border'
                  Icon={<AiOutlineShoppingCart />}
                  handleClick={() => router.push('/client/cart')}
                  disable_btn={false}
                />
              </div>

              // <p>"jjsjj"</p>
              : null}
          </> */}
          {/* <CustomButton
            title='Cart 16' containerStyles='text-[white] md:hidden  flex justify-center bg-[#FF9C06] items-center py-2 px-2 rounded-[5px] gap-x-4 border'
            Icon={<AiOutlineShoppingCart />}
            handleClick={() => router.push('/client/cart')}
            disable_btn={false}
          /> */}
        </div>
      </div>

      {/* {toggle && (
        <div className="mediumscreen block md:hidden">
          <ul className="flex gap-y-6 flex-col text-lg">
            <ImCancelCircle
              onClick={() => {
                setToggle(false);
              }}
              className="close"
            />
            <li>
              <Link
                href="/"
                className="font-medium hover:font-bold ease-in duration-300"
                onClick={() => {
                  setToggle(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/restuarant"
                className="font-medium hover:font-bold ease-in duration-300"
                onClick={() => {
                  setToggle(false);
                }}
              >
                Resturants
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="font-medium hover:font-bold ease-in duration-300"
                onClick={() => {
                  setToggle(false);
                }}
              >
                stores
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium hover:font-bold ease-in duration-300"
                onClick={() => {
                  setToggle(false);
                }}
              >
                About
              </Link>
            </li>
            {isAuth ? (
              <>
                {auth?.user === "user" ? (
                  <CustomButton
                    title="Dashboard"
                    containerStyles="text-[#FF9C06] md:hidden  flex justify-center bg-[white] items-center py-2 px-2 rounded-[5px] gap-x-4 border"
                    handleClick={() => router.push("/client/dashboard")}
                    disable_btn={false}
                  />
                ) : (
                  <>
                    <CustomButton
                      title="Dashboard"
                      containerStyles="text-[#FF9C06] md:hidden  flex justify-center bg-[white] items-center py-2 px-2 rounded-[5px] gap-x-4 border"
                      handleClick={() => router.push("/vendor/dashboard")}
                      disable_btn={false}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <Link
                    href="/client/login"
                    className="login font-semibold text-lg"
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/client/signup"
                    className="signup bg-[#218B07] flex justify-center align-center text-white rounded-sm  w-[100px] py-4 "
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Header;
