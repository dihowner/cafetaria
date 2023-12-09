'use client'
import Passwordwrapper from '@/components/Passwordwrapper';
import { useRouter } from 'next/navigation';



const layout = ({ children }) => {

    return (
        <div>
            <Passwordwrapper>
                {children}
            </Passwordwrapper>
        </div>
    )
}

export default layout