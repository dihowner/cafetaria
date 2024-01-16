'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Headerr/Header'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  useDetailsMutation,
  useUserdetailsMutation,
  useVendordetailsMutation,
} from '@/redux/Vendor/detailsApiSlice'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import Loader from '@/components/Loader'
import { logout } from '@/user/authSlice'
const layout = ({ children }) => {
  const { auth } = useSelector((state) => state.rootReducers)
  
  const [vendordetails, { isLoading: vendorDetailsLoading }] =
    useVendordetailsMutation()
  const [userdetails, { isLoading: userDetailsLoading }] =
    useUserdetailsMutation()
  const dispatch = useDispatch()
  const fetchDetails = async () => {
    try {
      const response = await userdetails(auth?.token).unwrap()
      dispatch(setDetails(response))
    } catch (err) {
      // console.log(err)
      // toast.error(err?.data?.message + ' ' + 'Please Login Again' || err.error)
      if (err.status === 401) {
        dispatch(logout())
        toast.error(err?.data?.message + ' ' + 'Please Login Again')
        router.push('/vendor/login')
      } else {
        toast.error(err.error)
      }
    }
  }
  const fetchVendorDetails = async () => {
    try {
      const response = await vendordetails(auth?.token).unwrap()
      dispatch(setDetails(response))
    } catch (err) {
      // console.log(err)
      // toast.error(err?.data?.message + ' ' + 'Please Login Again' || err.error)
      if (err.status === 401) {
        dispatch(logout())
        toast.error(err?.data?.message + ' ' + 'Please Login Again')
        router.push('/vendor/login')
      } else {
        toast.error(err.error)
      }
    }
  }
 useEffect(() => {
   const fetchData = async () => {
     try {
       if (auth?.user === 'user') {
         await fetchDetails()
       } else if (auth?.user === 'vendor') {
         await fetchVendorDetails()
       }
     } catch (err) {
       // Handle errors if necessary
     }
   }

   fetchData()
 }, [auth, fetchDetails, fetchVendorDetails])
  return (
    <div>
      {isLoading  ? (
        <Loader />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </div>
  )
}

export default layout
