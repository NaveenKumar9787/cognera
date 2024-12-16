"use client"
import { getIcon } from '@/lib/get-icon'
import Container from '@/ui/container'
import React, { useState } from 'react'
import homeIcons from '../icons/home-icons'
import commonIcons, { Aidriven, Apiplatform, Appdevelopement, Appstore, Buttonarrow, EndToEnd, IntegrityIcon, Wellness } from '../icons/common-icons'
import Button from '@/app/ui/button'
import Image from 'next/image'

import Link from 'next/link'

export default function Solutions({ props, videoBox }: any) {


    return (

        <div className={`flex flex-col xs:px-5  px-[40px] 2xl:px-[75px] !bg-[#DBE8FF]`}>
            <div className="py-16  xs:py-0 ">
                <div className="m-auto px-6 pb-[70px] xs:px-0 xs:pb-[10px]">

                    <div className="lg:flex justify-between items-center">
                        <div className="lg:w-4/12 lg:p-0 p-7 xs:py-3 xs:px-0 ">
                            <h1 className="text-[35px] xs:pb-3 xl:text-[45px] 2xl:text-[56px] font-[500] text-[#001C4D] leading-tight mb-5 xs:mb-0 capitalize xs:text-[30px] xs:flex xs:justify-center xs:pt-[15px]">Why Choose Drstore? </h1>



                        </div>
                        <div className="lg:w-8/12 order-2">
                            <div className="flex items-center justify-center">
                                <div className="grid grid-cols-1 gap-[40px] xs:gap-[20px] gap-y-[3.5rem] md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

                                    <div className="relative bg-white py-6 px-6 xs:py-3 xs:px-3 rounded-[12px] my-4 shadow-xl flex items-center gap-[10px]">
                                        <div className="">
                                            <Apiplatform />
                                        </div>
                                        <div className="">
                                            {/* <p className="text-[#001C4D] 2xl:text-[24px] text-[20px] font-[500] my-2">API Platform for Medical Devices</p> */}
                                            <div className="text-[#001C4D] 2xl:text-[20px] text-[16px] font-[400] w-[80%] mt-1">
                                                <p>Smart Medical devices ecosystem</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative bg-white translate-y-[75px] xs:translate-y-[0px] py-6 px-6 xs:py-3 xs:px-3 rounded-[12px] my-4 shadow-xl flex items-center gap-[10px]">
                                        <div className=" ">
                                            <IntegrityIcon />
                                        </div>
                                        <div className="">
                                            {/* <p className="text-[#001C4D] 2xl:text-[24px] text-[20px] font-[500] my-2">Health and Wellness App Development</p> */}
                                            <div className="text-[#001C4D] 2xl:text-[20px] text-[16px] font-[400] w-[80%] mt-1">
                                                <p>AI-Interpreted reports</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative bg-white py-6 px-6 xs:py-3 xs:px-3 rounded-[12px] my-4 shadow-xl flex items-center gap-[10px]">
                                        <div className=" ">
                                            <Aidriven />
                                        </div>
                                        <div className="">
                                            {/* <p className="text-[#001C4D] 2xl:text-[24px] text-[20px] font-[500] my-2">AI-Driven Guided Interpretation</p> */}
                                            <div className="text-[#001C4D] 2xl:text-[20px] text-[16px] font-[400] w-[80%] mt-1">
                                                <p>Innovative products for comprehensive cardiac monitoring</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative bg-white translate-y-[75px] xs:translate-y-[0px] py-6 px-6 xs:py-3 xs:px-3 rounded-[12px] my-4 shadow-xl flex items-center gap-[10px]">
                                        <div className=" ">
                                            <Appstore />
                                        </div>
                                        <div className="">
                                            {/* <p className="text-[#001C4D] 2xl:text-[24px] text-[20px] font-[500] my-2">Web and App Store Design</p> */}
                                            <div className="text-[#001C4D] text-[20px] font-[400] w-[90%] mt-1">
                                                <p>Cardiac comorbidity management</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="relative bg-white py-6 px-6 xs:py-3 xs:px-3 rounded-[12px] my-4 shadow-xl flex items-center gap-[10px]">
                                        <div className=" ">
                                            <EndToEnd />
                                        </div>
                                        <div className="">
                                            {/* <p className="text-[#001C4D] 2xl:text-[24px] text-[20px] font-[500] my-2">AI-Driven Guided Interpretation</p> */}
                                            <div className="text-[#001C4D] 2xl:text-[20px] text-[16px] font-[400] w-[80%] mt-1">
                                                <p>End-to-end supply chain & fulfillment capability</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative bg-white translate-y-[75px] xs:translate-y-[0px] py-6 px-6 xs:py-3 xs:px-3 rounded-[12px] my-4 shadow-xl flex items-center gap-[10px]">
                                        <div className=" ">
                                            <Wellness />
                                        </div>
                                        <div className="">
                                            {/* <p className="text-[#001C4D] 2xl:text-[24px] text-[20px] font-[500] my-2">Web and App Store Design</p> */}
                                            <div className="text-[#001C4D] text-[20px] font-[400] w-[90%] mt-1">
                                                <p>API integration with wellness apps</p>
                                            </div>
                                        </div>
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
