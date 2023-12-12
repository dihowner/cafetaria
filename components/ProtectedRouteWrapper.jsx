// 'use client'
import { useRouter, redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader';
const ProtectedRouteWrapper = ({ children }) => {

    const { auth } = useSelector((state) => state.rootReducers);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Replace this condition with your actual authentication check
        if (!auth?.token) {
            redirect('/client/login');
        }

        setLoading(false);
    }, [auth]);

    // Show loader while checking authentication
    if (loading) {
        return (
            // console.log("Loadin"),
            <Loader />
        )
    }

    return <div>{children}</div>;
}
export default ProtectedRouteWrapper
//     const { auth } = useSelector((state) => state.rootReducers);
//     const [isAuth, setIsAuth] = useState(true)
// const router = useRouter()
//     useEffect(() => {
//         if (!auth?.token) {
//             setIsAuth(false)
//             redirect('/client/login')
//         }
//     }, [router, auth])

//     return (
//         <div>{isAuth && children}</div>
//     )
// }
// If not authenticated, redirect to login
// if (!auth?.token) {
//     return null; // or you can show an error message
// }

// If authenticated, render the Dashboard (or any other authenticated content)