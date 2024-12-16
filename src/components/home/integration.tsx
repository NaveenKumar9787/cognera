"use client"
import { getIcon } from '@/lib/get-icon'
import Container from '@/ui/container'
import React, { useState } from 'react'
import homeIcons from '../icons/home-icons'
import commonIcons, { Buttonarrow } from '../icons/common-icons'
import bannerIcons from '../icons/banner-icons'
import Button from '@/app/ui/button'
import { animate, delay, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'

function Integration({ insight, miniTitle }: any) {

    return (

        <div className={`flex flex-col h-full xs:px-5 px-[40px] 2xl:px-[75px] bg-[#E4EAF1]`}>
            <div className="py-16  xs:py-0 xs:py-0">
                <div className="m-auto px-6 pb-[70px] xs:px-0 xs:pb-[10px]">

                    <div className="lg:flex justify-between items-center">
                        <div className="lg:w-4/12 lg:p-0 p-7 xs:py-3 xs:px-0 ">
                            <h1 className="text-[35px] xl:text-[45px] 2xl:text-[56px] font-[500] text-[#001C4D] leading-tight mb-5 capitalize xs:text-[30px]"> Integrate <span className='text-[#008F7F]'> VitalNXT.ai </span> With All Your Health care & Medical devices </h1>
                            <p className="text-[18px] xl:text-[20px] font-[400] text-[#001C4D] mb-5">  Seamlessly integrate a wide range of popular medical and wearable devices into your platform, maximizing health monitoring capabilities </p>

                            <div className="py-5">
                                <Link href={"/integration"}>
                                    <Button className="w-full !h-[46px] xl:min-w-[200px] sm:w-auto sm:min-w-[200px] shadow-lg px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mt-4 focus:outline-none !bg-[#00389B] !rounded-[50px] hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                        Explore more <Buttonarrow />
                                    </Button>
                                </Link>
                            </div>

                        </div>
                        <div className="lg:w-7/12 order-2">
                            <div className="relative z-0 overflow-visible">


                                <div className="grid xs:grid-cols-2 sm:!grid-cols-5 grid-cols-5 xl:grid-cols-5 2xl:gap-[36px] gap-[20px]">

                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/25.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/68.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/82.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/2.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/84.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/83.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/85.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/86.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/42.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/87.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/27.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/88.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/30.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/46.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/89.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/90.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/49.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/21.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/94.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/6.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/91.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/92.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/93.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>

                                    <div className=" bg-[#F2F5F8] translate-y-20 xs:translate-y-0 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/43.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>
                                    <div className=" bg-[#F2F5F8] 2xl:rounded-[24px] rounded-[18px] flex flex-col justify-center fli duration-300 hover:bg-white hover:shadow-xl 2xl:min-h-[180px] 2xl:max-h-[180px] min-h-[125px] max-h-[125px] 2xl:min-w-[180px] min-w-[125px] xs:max-w-[100%] 2xl:max-w-[180px] max-w-[125px]">
                                        <Image src={'/images/integration/100+.png'} alt="CRM logo" width={156} height={150} className=" w-fit p-[15px] mx-auto" />
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>



    )
}
export default Integration
