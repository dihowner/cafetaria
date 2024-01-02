"use client"
import SeconSide from '@/components/ClientDasboard/Dashboard/SeconSide'
import TopSide from '@/components/ClientDasboard/Dashboard/TopSide'
import React, { useEffect } from 'react'
import { MdDashboard } from 'react-icons/md'
import { useStatisticMutation } from '@/redux/statiscsApiSlice'
import { useDispatch } from 'react-redux'
import { setStat } from '@/redux/DashBoard/StatisticSlice'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
// toast/
const page = () => {
  const { auth } = useSelector((state) => state.rootReducers);
  const { stat } = useSelector((state) => state.rootReducers)
  const [statistic, { isLoading: staticLoading }] = useStatisticMutation()
  const dispatch = useDispatch();
  const id = typeof window !== 'undefined' && localStorage.getItem('Id') ? JSON.parse(localStorage.getItem('Id')) : null

  const fetchstat = async () => {
    try {
      const response = await statistic(id).unwrap()
      dispatch(setStat(response))
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }
  useEffect(() => {
    if (auth?.token) {
      fetchstat()
    }
  }, [auth?.token])
  // console.log(stat)
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <div className='flex justify-between width md:items-center flex-col md:flex-row gap-y-6 p-4'>
        <div className='flex items-center text-lg  gap-x-4 capitalize  p-4 border-2 bg-[#FAFAFA] rounded-lg'>
          <span>
            <MdDashboard />
          </span>
          <span>dashboard</span>
        </div>
      </div>
      <TopSide />
      <SeconSide />
    </div>
  )
}

export default page