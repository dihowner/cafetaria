'use client'
import { useRouter } from 'next/navigation';
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
const UnprotectedRouter = ({ children }) => {
    const { auth } = useSelector((state) => state.persistedReducer);
    console.log(auth?.currentUser)

    const router = useRouter()
    useLayoutEffect(() => {
        if (auth?.currentUser?.token) {
            if (auth?.currentUser?.data?.role === 'user') {
                router.push('/client/dashboard')
            } else if (auth?.currentUser?.data.role === 'vendor') {
                router.push('/vendor/dashboard')
            }
        }
    }, [router, auth])
    return (
        <div>{!auth?.currentUser?.token && children}</div>
    )
}

export default UnprotectedRouter