'use client'
import EachRest from '@/components/Pages/Resturants/EachRest'
import React, { useCallback, useEffect, useState } from 'react'
import { restuarantsDetails } from '@/components/Utilis/Dummy'
import RestaurantMenu from '@/components/RestaurantMenu'
import { randomFetch } from '@/components/Utilis/Fetch/RandomFetch'
import { useDispatch, useSelector } from 'react-redux'
import AppLoader from '@/components/AppLoader'

const page = ({ params }) => {
  console.log(params.id)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => {
    setIsOpenModal(true)
  }
  const [status, setStatus] = useState(' active')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const { getMeals, error } = randomFetch()
  const [mealDetails, setMealsDetails] = useState()
  const all = useCallback(() => {
    getMeals(params.id, status, page, setTotalPages)
  }, [status, page])
  useEffect(() => {
    all()
  }, [status, page])
  const handlePrevPage = () => {
    setPage(page - 1)
    setCurrentNum(page / page)
  }

  const handleNextPage = () => {
    setPage((page) => page + 1)
    setCurrentNum(page * 10)
  }
  const { usermeals } = useSelector((state) => state.rootReducers)
  const allMeals = usermeals?.meals
  // console.log(allMeals)
  return (
    <div>
      <EachRest
        restuarantsDetails={restuarantsDetails}
        open={openModal}
        allMeals={allMeals}
        setMealsDetails={setMealsDetails}
        mealDetails={mealDetails}
      />
      <RestaurantMenu
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        mealDetails={mealDetails}
      />
    </div>
  )
}

export default page
