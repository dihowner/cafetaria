'use client'
import ClientDashboaredHeader from '@/components/ClientDasboard/ClientDashboaredHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import {
  clientSideBarFirstLinks,
  clientSideBarSecondLinks,
} from '@/components/Utilis/Dummy'
import { useContext } from 'react'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
import MClientHeader from '@/components/ClientDasboard/MClientHeader'
import ProtectedRouteWrapper from '@/components/ProtectedRouteWrapper'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDetailsMutation, useUserdetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import AppLoader from '@/components/AppLoader'
import { logout } from '@/user/authSlice'
import { toast } from 'react-toastify'

// useRouter
const layout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarCreateContext)
  const { auth } = useSelector((state) => state.rootReducers)
  const [userdetails, { isLoading }] = useUserdetailsMutation()
  const router = useRouter()
  const fetchDetails = async () => {
    try {
      const response = await userdetails(auth?.token).unwrap()
      dispatch(setDetails(response))
    } catch (err) {
      // console.log(err)
      if (err.status === 401) {
        dispatch(logout())
        toast.error(err?.data?.message + ' ' + 'Please Login Again')
        router.push('/client/login')
      } else {
        toast.error(err.error)
      }
    }
  }
  // Check if the user role is 'user', otherwise redirect to the previous page
  useEffect(() => {
    if (auth.user !== 'user') {
      // You can customize the redirection logic based on your requirements
      router.back()
      return null // Prevent rendering the rest of the layout
    } else {
      fetchDetails()
    }
  }, [auth])

  return (
    <div>
      <ProtectedRouteWrapper>
        {isLoading ? (
          <AppLoader color={'#FF9C06'} loading={isLoading} />
        ) : (
          <>
            <Sidebar
              SideBarFirstLinks={clientSideBarFirstLinks}
              SideBarSecondLinks={clientSideBarSecondLinks}
              color='#FF9C06'
            />
            <main className='w-[100%]'>
              <MClientHeader
                SideBarFirstLinks={clientSideBarFirstLinks}
                SideBarSecondLinks={clientSideBarSecondLinks}
                color='#FF9C06'
              />
              <ClientDashboaredHeader
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
              <div
                className={`${
                  isSidebarOpen
                    ? 'pl-[260px] w-[100%] bg-[white] pt-[90px] min-h-[100vh]'
                    : 'pl-0 md:pl-[80px] lg:pl-[260px] pt-[90px] w-[100%] pb-6 bg-[white] min-h-[100vh] '
                }`}
              >
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
