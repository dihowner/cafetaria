'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Headerr/Header'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDetailsMutation } from '@/redux/Vendor/vendorsApiSlice'
import { setVendorDetails } from '@/redux/Vendor/Slices/vendordetailsSlice'
import Loader from '@/components/Loader'
const layout = ({ children }) => {
  const { auth } = useSelector((state) => state.rootReducers)
  const [details, { isLoading }] = useDetailsMutation()
  const dispatch = useDispatch()
  const fetchVendorDetails = async () => {
    try {
      const response = await details(auth?.token).unwrap()
      dispatch(setVendorDetails(response))
    } catch (err) {
      // console.log(err)
      // toast.error(err?.data?.message + ' ' + 'Please Login Again' || err.error)
      if (err.status === 401) {
        dispatch(logout())
      }
    }
  }
  const fetchUserDetails = async () => {
    try {
      const response = await details(auth?.token).unwrap()
      // dispatch(setVendorDetails(response))
    } catch (err) {
      // console.log(err)
      // toast.error(err?.data?.message + ' ' + 'Please Login Again' || err.error)
      if (err.status === 401) {
        dispatch(logout())
      }
    }
  }
  useEffect(() => {
    if (auth?.user === 'vendor') {
      fetchVendorDetails()
    } else if (auth?.user === 'user') {
      fetchUserDetails()
    }
  }, [])
  return (
    <div>
      {isLoading ? (
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
