// 'use client'
import { useRouter, redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader';
const ProtectedRouteWrapper = ({ children }) => {
    const { auth } = useSelector((state) => state.rootReducers);

    const router = useRouter()
    useEffect(() => {
        if (!auth?.token) {
            redirect('/client/login')
        }
    }, [router, auth])
    return (
        <div>{auth?.token && children}</div>
    )
}

export default ProtectedRouteWrapper