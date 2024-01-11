'use client'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import {
  SideBarFirstLinks,
  SideBarSecondLinks,
} from '@/components/Utilis/Dummy'
import DashboardHeader from '@/components/MerchantDashboard/DashboardHeader'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
import { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import MHeader from '@/components/MerchantDashboard/MHeader'
import ProtectedRouteWrapper from '@/components/ProtectedRouteWrapper'
import { useSelector, useDispatch } from 'react-redux'
import { useDetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { logout } from '../../user/authSlice'
import AppLoader from '@/components/AppLoader'

const layout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)

  const [details, { isLoading }] = useDetailsMutation()
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state.rootReducers)
  const router = useRouter()
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
    if (auth?.user === 'vendor') {
      fetchDetails()
    } else {
      // If auth.user is not 'vendor', redirect to the previous page
      router.back()
    }
  }, [auth])

  return (
    <div>
      <ProtectedRouteWrapper>
        {isLoading ? (
          <AppLoader color={'#5f8357'} loading={isLoading} />
        ) : (
          <>
            <Sidebar
              SideBarFirstLinks={SideBarFirstLinks}
              SideBarSecondLinks={SideBarSecondLinks}
              color='#218B07'
            />
            <main className='w-[100%]'>
              <MHeader
                SideBarFirstLinks={SideBarFirstLinks}
                SideBarSecondLinks={SideBarSecondLinks}
                color='#218B07'
              />
              <DashboardHeader
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
              <div
                className={`${
                  isSidebarOpen
                    ? 'pl-[260px] w-[100%] bg-[white] min-h-[100vh] pt-[90px]'
                    : 'pl-0 md:pl-[80px] lg:pl-[260px] pt-[90px] w-[100%] pb-6 bg-[white] min-h-[100vh] '
                }`}
              >
                {/* <FaBars
          className='hidden md:block lg:hidden text-xl '
          onClick={toggleSidebar}
        /> */}

                {children}
              </div>
            </main>
          </>
        )}
      </ProtectedRouteWrapper>
    </div>
  )
}

export default layout
