'use client'

import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
const Modal = ({ isOpen, close, children }) => {
    if (!isOpen) return null
    return (
        <>
            {' '}
            <Transition appear as={Fragment} show={isOpen}>
                <Dialog as='div' className='relative z-10 ' onClose={close}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>
                    <div className='fixed inset-0 z-10 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                                enterTo='opacity-100 translate-y-0 sm:scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            >
                                <Dialog.Panel className='relative transform overflow-y-scroll rounded-lg bg-[#FAFAFA] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl p-4 flex flex-col gap-y-2 h-[700px] w-[100%]'>
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal