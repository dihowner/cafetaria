import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Categories = ({ itemID }) => {
    const { getMealCategories, getCategoryLoading } = mealsfetch()
    const getcategory = async () => {
        await getMealCategories(itemID)
    }
    useEffect(() => {
        getcategory()
    }, [])
    const {categories } = useSelector((state) => state.rootReducers)
    console.log(categories?.category)
    const category = categories?.category
    return (
        <div>Categories</div>
    )
}

export default Categories