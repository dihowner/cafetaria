import { useRouter } from 'next/navigation';
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
const UnprotectedRouter = () => {
    const { currentUser } = useSelector((state) => state.auth);
    const router = useRouter()
    useLayoutEffect(() => {
        if (!currentUser && !currentUser.data.token) {
            router.push('/')
        }
    }, [router, currentUser])
    return (
        <div>{currentUser && children}</div>
    )
}

export default UnprotectedRouter