// 'use client'
import { useRouter, redirect } from 'next/navigation';
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader';
const ProtectedRouteWrapper = ({ children }) => {
    const { auth } = useSelector((state) => state.rootReducers);
    const [isAuth, setIsAuth] = useState(true)
    const router = useRouter()
    useEffect(() => {
        if (!auth?.token) {
            setIsAuth(false)
            redirect('/client/login')
        }
    }, [router, auth])
    return (
        <div>{isAuth && children}</div>
    )
}

export default ProtectedRouteWrapper