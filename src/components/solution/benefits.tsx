"use client"
import { getIcon } from '@/lib/get-icon'
import Button from '@/app/ui/button'
import Container from '@/ui/container'
import React from 'react'
import homeIcons from '../icons/home-icons'
import { useParallax } from 'react-scroll-parallax'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'
import { Buttonarrow, Customization, Engagement, Security, UserFriendly, Wearables } from '../icons/common-icons'
import Image from 'next/image'

export default function Benefits({ title }: any) {


  return (
    <Container className="relative xs:px-5 px-[40px] 2xl:px-[75px] max-w-full flex flex-col gap-6 justify-center items-start bg-[#F2F5F8]  overflow-hidden">


      <div className="m-auto my-12 px-6 pb-[70px] xs:px-0 xs:pb-[10px]">
        <h1 className="text-[45px] text-center font-[500] text-[#001C4D] 2xl:text-[56px] xs:text-[30px]">Benefits of Using VitalNXT.ai for Your Business</h1>
        <p className="text-[18px] text-center font-[400] text-[#001C4D] lg:text-[20px] 2xl:w-[47%] w-[60%] mx-auto xs:w-[100%]">
          Easily scale your operations and adapt to growing business needs with flexible and robust technology solutions.</p>

        <div className="lg:flex justify-between items-center mt-[70px] xs:mt-[10px]">
          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <Image src={'/images/benefits.png'} alt="" width={564} height={443} className=" w-auto px-0" />
          </div>

          <div className="w-full space-y-0 lg:w-1/2 ">


            <div className="md:flex md:items-start xs:px-0 p-6 border-b border-[#D3E3FF]">
              <span className="inline-block p-2 ">
                <Customization />

              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="2xl:text-[30px] text-[25px] font-[500] text-[#001C4D] capitalize">Customization</h1>

                <p className="mt-3 2xl:text-[20px] text-[16px] text-[#001C4D] leading-[28px]">
                  Tailor solutions to meet the unique needs of your business, ensuring maximum impact and efficiency                </p>
              </div>
            </div>

            <div className="md:flex md:items-start xs:px-0 p-6 border-b border-[#D3E3FF]">
              <span className="inline-block p-2 ">
                <Security />

              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="2xl:text-[30px] text-[25px] font-[500] text-[#001C4D] capitalize">Security and Compliance</h1>

                <p className="mt-3 2xl:text-[20px] text-[16px] text-[#001C4D] leading-[28px]">
                  Benefit from robust security measures and compliance with major data protection regulations, ensuring your data is safe.                </p>
              </div>
            </div>

            <div className="md:flex md:items-start xs:px-0 p-6 border-b border-[#D3E3FF]">
              <span className="inline-block p-2 ">
                <UserFriendly />

              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="2xl:text-[30px] text-[25px] font-[500] text-[#001C4D] capitalize">User-Friendly Interface</h1>

                <p className="mt-3 2xl:text-[20px] text-[16px] text-[#001C4D] leading-[28px]">
                  Enjoy an intuitive and easy-to-use platform designed to make advanced technology accessible to all users.                </p>
              </div>
            </div>


            <div className="md:flex md:items-start xs:px-0 p-6 border-b border-[#D3E3FF]">
              <span className="inline-block p-2 ">
                <Engagement />

              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="2xl:text-[30px] text-[25px] font-[500] text-[#001C4D] capitalize">User-Friendly Interface</h1>

                <p className="mt-3 2xl:text-[20px] text-[16px] text-[#001C4D] leading-[28px]">
                  Enjoy an intuitive and easy-to-use platform designed to make advanced technology accessible to all users.                </p>
              </div>
            </div>


          </div>


        </div>


      </div>


    </Container>
  )
}
