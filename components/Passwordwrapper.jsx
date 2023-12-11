import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
const Passwordwrapper = ({ children }) => {
    const router = useRouter()
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (!storedEmail) {
            router.push('/client/login')
        }
    }, [router])
    return (
        <div>{children}</div>
    )
}

export default Passwordwrapper