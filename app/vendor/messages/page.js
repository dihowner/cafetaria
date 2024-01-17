import React from 'react'
import AppLoader from '@/components/AppLoader'
import { useVendordetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import { useEffect, useState } from 'react'
import { logout } from '@/user/authSlice'
import { toast } from 'react-toastify'

const page = () => {
  const [vendordetails, { isLoading }] = useVendordetailsMutation()
  const dispatch = useDispatch()
  const [error, setError] = useState()
  const { auth } = useSelector((state) => state.rootReducers)
  const router = useRouter()
  const fetchDetails = async () => {
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
        setError(err.error)
      }
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [auth])
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      {isLoading ? (
        <AppLoader color={'#5f8357'} loading={isLoading} />
      ) : (
        <>{error && error ? <div className=''>{error}</div> : <>page</>}</>
      )}
    </div>
  )
}

export default page
