// 'use client'
import { useRouter, redirect } from 'next/navigation';
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
const ProtectedRouteWrapper = ({ children }) => {
    const { auth } = useSelector((state) => state.persistedReducer);

    const router = useRouter()
    useLayoutEffect(() => {
        if (!auth?.token) {
            redirect('/client/login')
        }
    }, [router, auth])
    return (
        <div>{auth?.token && children}</div>
    )
}

export default ProtectedRouteWrapper