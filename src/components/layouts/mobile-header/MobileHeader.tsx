import React, { useState } from 'react'
import Image from "next/image"

export default function MobileHeader({
    // menuOpen
}) {
    const [navOpen, setNavOpen] = useState();
    return (
        <div className='flex justify-between items-center '>
            <div className="p-4">
                <Image src={process.env.NEXT_PUBLIC_S3_URL + '/assets/logo--.png'} width={100} height={50} alt="" />
            </div>

            <div onClick={() => setNavOpen(navOpen) } className='flex flex-col p-4'>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600 my-2"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
        </div>
    )
}
