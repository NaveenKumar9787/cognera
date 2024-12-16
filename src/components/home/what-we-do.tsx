"use client"
import React, { useState } from 'react'

import Container from '@/ui/container'
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import Carousel from '@/ui/carousel/carousel';
import { getIcon } from '@/lib/get-icon'
import Link from 'next/link'
import Button from '@/app/ui/button'
import bannerIcons from '../icons/banner-icons'
import commonIcons, { Bannercenter, Buttonarrow } from '../icons/common-icons'
import YouTubeVideo from '../modal/youtubeVideo'
import ReactPlayer from 'react-player'

function WhatWeDo({ homeConent }: any) {


  const staticElem = {
    buttonOne: "Book a Demo",
    buttonTwo: "Explore VitalNxtai",
    square: '#26CEC7',
    astrich: '#C84E89',
  };

  const joinProps = { staticElem }
  const [showModal, setShowModal] = useState(false);
  let [isRequestOpen, setIsRequestOpen] = useState(false)
  function closeRequestModal() {
    setIsRequestOpen(false);
  }
  function openRequestModal() {
    setIsRequestOpen(true);
  }

  return (
    <div className="max-w-full bg-[url('/images/banners/whatwedoBG.svg')] bg-cover w-screen xs:pt-4 bg-center pb-5 bg-[#FF8100]">
    <Container className="max-w-full px-10 xl:px-[75px] xs:px-5">
<p className='flex justify-center font-[600] text-[36px] py-[75px] xs:py-[15px] xs:pb-0 text-[#FAFAFA]'>What We Do?</p>
      <div className='w-full flex justify-center items-center pb-[10%] xs:flex-col'>
          <div className='xs:relative xs:top-[35px] '>
            <Image src={`/images/WhatWeDo/WhatWeDo1.svg`} alt={"brandssList"} width={710} height={500} className='w-full h-[450px] lg:h-[400px] md:h-[300px] xs:h-[200px]' />
          </div>
           <div className='w-[40%] xs:w-[85%] border-white rounded-[24px] border-[2px] p-[2%] pl-[5%] flex items-center h-[510px] lg:h-[460px] md:h-[360px] xs:h-auto xs:pb-[15px] -ml-[60px] xs:ml-0 xs:pt-[35px]'>
            <div className="w-full flex flex-col justify-center text-center">
              <h2 className="text-2xl font-bold text-[#FAFAFA] xs:text-[16px] text-left">Tracky Smart Devices Ecosystem</h2>
            <p className="text-[#FAFAFA] mt-4 xs:mt-2 xs:text-[13px] xs:pb-[5px] text-left">
              India’s Premier Smart Medical Devices Ecosystem, offering clinically validated, connected devices for home-based cardiovascular and metabolic care.
            </p>
           </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center pb-[10%] xs:pb-0 xs:flex-col'>
          
        <div className='w-[40%] xs:w-[85%] border-white rounded-[24px] border-[2px] p-[2%] pr-[5%] flex items-center h-[510px] lg:h-[460px] md:h-[360px] xs:h-auto xs:pb-[35px]'>
            <div className="w-full flex flex-col justify-center text-center">
              <h2 className="text-2xl font-bold text-[#FAFAFA] xs:text-[16px] text-left">Tracky Pro:  Cardio Diagnostic</h2>
            <p className="text-[#FAFAFA] mt-4 xs:mt-2 xs:text-[13px] xs:pb-[5px] text-left">
            Tracky Pro is a comprehensive solution for home-based cardiovascular testing, enabling remote diagnostics, monitoring, and AI-enhanced analysis. It brings convenience to patients and empowers cardiologists with real-time data for better care management.  </p>
           </div>
        </div>
        <div className='xs:relative xs:bottom-[35px] '>
            <Image src={`/images/WhatWeDo/WhatWeDo2.svg`} alt={"brandssList"} width={710} height={500} className='w-full -ml-[60px] xs:ml-0 h-[450px] lg:h-[440px] md:h-[300px] xs:h-[200px]' />
          </div>
      </div>

      <div className='w-full flex justify-center items-center pb-[10%] xs:flex-col'>
          <div className='xs:relative xs:top-0 '>
            <Image src={`/images/WhatWeDo/WhatWeDo3.svg`} alt={"brandssList"} width={710} height={500} className='w-full h-[450px] lg:h-[400px] md:h-[300px] xs:h-[200px]' />
          </div>
           <div className='w-[40%] xs:w-[85%] border-white rounded-[24px] border-[2px] p-[2%] pl-[5%] flex items-center h-[510px] lg:h-[460px] md:h-[360px] xs:h-auto xs:pb-[15px] -ml-[60px] xs:ml-0 xs:pt-[35px] xs:-mt-[35px]'>
            <div className="w-full flex flex-col justify-center text-center">
              <h2 className="text-2xl font-bold text-[#FAFAFA] xs:text-[16px] text-left">Tracky Pro Sleep</h2>
            <p className="text-[#FAFAFA] mt-4 xs:mt-2 xs:text-[13px] xs:pb-[5px] text-left">
            Offering a complete solution for sleep apnea diagnosis and management, using internationally accredited products and services for accurate and effective care.  </p>
           </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center pb-[10%] xs:pb-0 xs:flex-col'>
          
          <div className='w-[40%] xs:w-[85%] border-white rounded-[24px] border-[2px] p-[2%] pr-[5%] flex items-center h-[510px] lg:h-[460px] md:h-[360px] xs:h-auto xs:pb-[35px]'>
              <div className="w-full flex flex-col justify-center text-center">
                <h2 className="text-2xl font-bold text-[#FAFAFA] xs:text-[16px] text-left">Trunu</h2>
              <p className="text-[#FAFAFA] mt-4 xs:mt-2 xs:text-[13px] xs:pb-[5px] text-left"> Trunu complements wellness by offering a range of targeted nutritional supplements specially designed to improve cardiovascular health. These scientifically-backed formulations provide essential nutrients that support heart function and overall wellness, creating a balanced approach to health management.
                </p></div>
          </div>
          <div className='xs:relative xs:bottom-[35px] '>
              <Image src={`/images/WhatWeDo/WhatWeDo4.svg`} alt={"brandssList"} width={710} height={500} className='w-full -ml-[60px] xs:ml-0 h-[450px] lg:h-[440px] md:h-[300px] xs:h-[200px]' />
            </div>
        </div>

        <div className='w-full flex justify-center items-center pb-[10%] xs:pb-3 xs:flex-col'>
          <div className='xs:relative xs:top-0 '>
            <Image src={`/images/WhatWeDo/WhatWeDo5.svg`} alt={"brandssList"} width={710} height={500} className='w-full h-[450px] lg:h-[400px] md:h-[300px] xs:h-[200px]' />
          </div>
           <div className='w-[40%] xs:w-[85%] border-white rounded-[24px] border-[2px] p-[2%] pl-[5%] flex items-center h-[510px] lg:h-[460px] md:h-[360px] xs:h-auto xs:pb-[15px] -ml-[60px] xs:ml-0 xs:pt-[35px] xs:-mt-[35px]'>
            <div className="w-full flex flex-col justify-center text-center">
              <h2 className="text-2xl font-bold text-[#FAFAFA] xs:text-[16px] text-left">VitalNXT</h2>
            <p className="text-[#FAFAFA] mt-4 xs:mt-2 xs:text-[13px] xs:pb-[5px] text-left">
            VitalNXT.ai is a cloud-based platform that integrates health and fitness devices through real-time API connections. It consolidates data from various Bluetooth-enabled devices into a single app, providing users with a comprehensive view of their health.  </p>
           </div>
        </div>
      </div>

      </Container>
      </div>
  )
}

export default WhatWeDo
