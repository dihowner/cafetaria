import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation, useRegisterMutation } from "@/redux/userApiSlice";
import { setCredentials } from "@/redux/user/authSlice";
import { toast } from 'react-toastify';
import axios from 'axios';
export const UseAuth = () => {
  const [login, { isLoading: loginLoading }] = useLoginMutation()
  const [register, { isLoading: registerLoading }] = useRegisterMutation()
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const useLogin = async (email, password) => {
    try {
      const response = await login({ email, password })
      if (response.status === 200) {
        const userData = await response.json
        dispatch(setCredentials({ ...response }));
        toast.success(message)
        console.log(userData)
      } else {
        const userData = await response.json
        console.log(userData)

      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }
  const useSignUp = async (data) => {
    try {

      const response = await register.mutateAsync(data)
      console.log(response)
      if (response.Status) {
        const responseData = await response.json(); // Parse the JSON data
        console.log('yessss', responseData)
        // console.log('yess', response.json())

        toast.success('Registration successful')
        console.log(userData)
      } else {
        const response = await response.json();
        toast.error('registration failed' + "" + response.data.message)
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }
  return { useLogin, loginLoading, useSignUp, registerLoading }
}
