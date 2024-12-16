
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import IntegrationForm from '../forms/integration-form'
import Button from '@/app/ui/button'
import { CloseIcon } from '../icons/common-icons'

export default function IntegrationModal({ setIsOpen, isOpen }: any) {





    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/50">
                    <div className="w-2/6 xs:w-full relative border bg-white p-12 xs:p-5 rounded-lg">
                        <Button variant='smoke' onClick={() => setIsOpen(false)} className='shadow-none absolute top-0 right-0 z-10 px-4 xs:px-2'><CloseIcon className=' stroke-[#001C4D] w-5 h-5 xs:w-4 xs:h-4' /></Button>
                        <IntegrationForm />
                    </div>
                </div>
            </Dialog>
        </>
    )
}
