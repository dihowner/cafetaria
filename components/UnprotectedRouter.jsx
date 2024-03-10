"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
const UnprotectedRouter = ({ children }) => {
  const { auth } = useSelector((state) => state.rootReducers);

  const [isAuth, setIsAuth] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (auth?.token) {
      setIsAuth(false);
      if (auth?.user === "user") {
        router.push("/client/dashboard");
      } else if (auth?.user === "vendor") {
        router.push("/vendor/dashboard");
      }
    }
  }, [auth]);
  return <div>{isAuth && children}</div>;
};

export default UnprotectedRouter;
