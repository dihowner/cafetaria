// 'use client'
import { useRouter } from 'next/navigation';
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
const UnprotectedRouter = ({ children }) => {
    const { auth } = useSelector((state) => state.persistedReducer);
    console.log(auth)

    const router = useRouter()
    useLayoutEffect(() => {
        if (auth?.token) {
            if (auth?.role === 'user') {
                router.push('/client/dashboard')
            } else if (auth?.role === 'vendor') {
                router.push('/vendor/dashboard')
            }
        }
    }, [router, auth])
    return (
        <div>{!auth?.token && children}</div>
    )
}

export default UnprotectedRouter