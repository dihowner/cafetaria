'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Headerr/Header'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import Loader from '@/components/Loader'
import { logout } from '@/user/authSlice'
const layout = ({ children }) => {
  const { auth } = useSelector((state) => state.rootReducers)
  const [details, { isLoading }] = useDetailsMutation()
  const dispatch = useDispatch()
  const fetchDetails = async () => {
    try {
      const response = await details(auth?.token).unwrap()
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
    if (auth?.user === 'vendor' && auth?.user === 'vendor') {
      fetchDetails()
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
