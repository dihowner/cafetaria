import { useRouter } from 'next/navigation';
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
const ProtectedRouteWrapper = ({ children }) => {
    const { currentUser } = useSelector((state) => state.auth);
    const router = useRouter()
    useLayoutEffect(() => {
        if (currentUser && currentUser.data.role === 'user') {
            router.push('/client/dashboard')
        }
    }, [router, currentUser])
    return (
        <div>{currentUser && children}</div>
    )
}

export default ProtectedRouteWrapper