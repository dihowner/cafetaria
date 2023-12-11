// 'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const UnprotectedRouter = ({ children }) => {
    const { auth } = useSelector((state) => state.rootReducers);
    console.log(auth)

    const router = useRouter()
    useEffect(() => {
        if (auth?.token) {
            if (auth?.user === 'user') {
                router.push('/client/dashboard')
            } else if (auth?.user === 'vendor') {
                router.push('/vendor/dashboard')
            }
        }
    }, [router, auth])
    return (
        <div>{!auth?.token && children}</div>
    )
}

export default UnprotectedRouter