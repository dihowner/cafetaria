import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation, useRegisterMutation, useCompleteRegistrationMutation, useRequestResetpasswordMutation, useVerifypasswordTokenMutation, useVerifyNewpasswordMutation } from "@/redux/userApiSlice";
import { setToken } from "@/user/authSlice";
// import { setEmail } from "@/user/forgotpassSlice";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
export const UseAuth = () => {
  const [login, { isLoading: loginLoading }] = useLoginMutation()
  const [register, { isLoading: registerLoading }] = useRegisterMutation()
  const [completeRegistration, { isLoading: completeRegistrationLoading }] = useCompleteRegistrationMutation()
  const [RequestResetpassword, { isLoading: RequestResetpasswordLoading }] = useRequestResetpasswordMutation()
  const [verifypasswordToken, { isLoading: verifypasswordTokenLoading }] = useVerifypasswordTokenMutation()
  const [verifyNewpassword, { isLoading: verifyNewpasswordLoading }] = useVerifyNewpasswordMutation()
  // const { auth } = useSelector((state) => state.persistedReducer);
  const router = useRouter()

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const useLogin = async (email, password, roles) => {
    try {
      const response = await login({ email, password, roles }).unwrap()

      dispatch(setToken(
        response

      ));
      router.push('/vendor/dashboard')

      toast.success('Login successful')

    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }
  const useSignUp = async (data) => {
    try {

      await register(data).unwrap()
        .then((res) => {
          router.push('/vendor/otp')

          toast.success('Registration successful.... kindly check your email for verification process')
        })

    } catch (err) {
      // console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  }
  const useCompleteRegistration = async (data) => {
    try {

      await completeRegistration({ 'token': data }).unwrap()
        .then((res) => {
          toast.success('Your account has been verified. Kindly proceed to login')
          router.push('/vendor/login')

        })

    } catch (err) {
      // console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  }
  const useRequestResetpassword = async (data) => {
    try {

      await RequestResetpassword(data).unwrap()
        .then((res) => {
          // dispatch(setEmail(

          // ))
          toast.success('An email has been sent to your email address containing your reset password guideline. Thank You')
          router.push('/vendor/verifyResetPasswordToken')

        })

    } catch (err) {
      // console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  }
  const verifyToken = async (data) => {
    try {

      await verifypasswordToken(data).unwrap()
        .then((res) => {
          // toast.success('Your account has been verified. Kindly proceed to login')
          router.push('/vendor/resetpassword')

        })

    } catch (err) {
      // console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  }
  const verifynewpassword = async (data) => {
    try {

      await verifyNewpassword(data).unwrap()
        .then((res) => {
          // toast.success('Your account has been verified. Kindly proceed to login')
          router.push('/vendor/login')

        })

    } catch (err) {
      // console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  }
  return { useLogin, loginLoading, useSignUp, registerLoading, useCompleteRegistration, completeRegistrationLoading, useRequestResetpassword, RequestResetpasswordLoading, verifypasswordTokenLoading, verifyToken, verifynewpassword, verifyNewpasswordLoading }
}
