import React, { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation';
const Passwordwrapper = ({ children }) => {
    const router = useRouter()
    useLayoutEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (!storedEmail) {
            router.push('/client/login')
        }
    }, [router, storedEmail])
    return (
        <div>{storedEmail && children}</div>
    )
}

export default Passwordwrapper