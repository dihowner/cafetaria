import InputsCustom from '@/components/InputsCustom'
import Modal from '@/components/Modal'
import Upload from '@/components/Upload'
import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

const StoreCreation = ({ isOpenModal, setIsOpenModal }) => {
    return (
        <div >
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid />
                    </span>
                </div>
                <div className="">
                    <h1>Create a store</h1>
                    <div className='flex justify-center flex-col items-center width'>
                        <form action="">
                            <Upload />
                            <InputsCustom 
                            // title={}
                            />
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default StoreCreation