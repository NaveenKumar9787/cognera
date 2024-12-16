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
import Card from './card';

function IndexBanner({ homeConent }: any) {


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
    // <div className=" bg-no-repeat max-w-full pt-[150px] xs:pt-4 pb-5 w-screen bg-[#FFFFFF]">
    <div>
            <div className="max-w-full h-[1000px] xs:h-[400px] bg-[url('/images/banners/banner.svg')] bg-no-repeat bg-cover w-screen pt-[150px] xs:pt-4 bg-center pb-5 bg-[#F5F5F5] xs:bg-[#F5F5F5]">
      
    </div>

      <Container className="xs:px-0">
      {/* <div className="max-h-screen grid grid-cols-6 items-center justify-center bg-gray-100 pb-[30px] px-[5rem] 2xl:px-[20rem] xl:px-[10rem] lg:px-[5rem] md:px-10 xs:px-0"> */}
      <div className="max-h-screen grid grid-cols-6 items-center justify-center bg-gray-100 pb-[30px] px-[5rem] 2xl:px-[20rem] xl:px-[10rem] lg:px-[5rem] md:px-10 xs:px-0 xs:w-full xs:flex xs:flex-wrap xs:max-h-full xs:bg-[url('/images/mobilebg.svg')] xs:bg-center xs:bg-no-repeat">
    
     {/* <div className=""> */}
      <div className="xs:w-full">
          <Card 
            title="Tracky Pro Sleep" 
            image="BgTimeLine1"
            description="Remote monitoring & diagnostics for Sleep Apnea" 
            classIcon="svg-line" 
            textColor="xs:flex-row-reverse xs:justify-end xs:gap-0 xs:pb-[50px]" 
          />
    </div>
    {/* <img 
        src="/images/LeftToRightTimeLine" 
        alt="Connecting" 
        className="w-40 h-40 object-cover rounded-full m-4"
      /> */}
      <div className='mt-[100%] xs:mt-0 xs:w-full'>

          <Card 
            title="VitalNXT" 
            image="BgTimeLine2"
            description="Get access to all health data at one spot with Real time API integration" 
            classIcon="svg-line1"
            textColor="xs:flex-row xs:justify-end xs:gap-[40px] xs:pb-[50px]"
          />
    </div>

      <div className='xs:w-full'>

          <Card 
            title="Virtual Lab" 
            image="BgTimeLine3"
            description="Book cardio & sleep diagnostics at home with Tracky's Virtual lab model" 
            classIcon="svg-line"
            textColor="xs:flex-row-reverse xs:justify-end xs:gap-0 xs:pb-[50px]"
          />
    </div>

      <div className='mt-[100%] xs:mt-0 xs:w-full'>

          <Card 
            title="Trunu"
            image="BgTimeLine4"
            description="Nutritional supplements specially designed for cardiovascular health" 
            classIcon="svg-line1" 
            textColor="xs:flex-row xs:justify-end xs:gap-[40px] xs:pb-[50px]"
          />
    </div>

      <div className='xs:w-full'>

          <Card 
            title="Tracky Pro Cardio" 
            image="BgTimeLine5"
            description="Remote monitoring & diagnostics for Cardiometabolic disorders" 
           classIcon="svg-line" 
            textColor="xs:flex-row-reverse xs:justify-end xs:gap-0 xs:pb-[50px]"
          />
    </div>

      <div className='mt-[100%] xs:mt-0 xs:w-full'>

          <Card 
            title="Smart devices" 
            image="BgTimeLine6"
            description="Oximeter, Thermometer, Spirometer, BP monitor, BCA Scale" 
            classIcon=""
            textColor="xs:flex-row xs:justify-end xs:gap-[40px]"
          />
      </div>
      {/* </div> */}
      </div>
      </Container>

       {/* <Container className="max-w-full px-10 xl:px-[75px] xs:px-5 bg-[#FFFFFF]">
        <section className="">
          <div className="container xs:px-0 px-6 py-[10%] mx-auto xs:py-2">
          
            <div className="mt-8 xl:mt-12 lg:flex lg:items-center relative xs:pb-[20px] pb-[120px] xs:pt-[10px] pt-[60px]">
              <div className="grid w-full grid-cols-1 gap-8 lg:w-1/3 xl:gap-16 md:grid-cols-2 sm:grid-cols-2">


                <div className="border-[1px] border-[#E5795C] xs:w-[95%]  rounded-xl absolute xs:relative xs:mx-auto w-min xs:top-0 xs:left-0 top-[12%] 2xl:left-[15%] left-[3%]">
                <div className="flex relative -left-[10px] -top-[5px] flex-col p-4 xs:p-3 rounded-xl bg-[#FECCBE] shadow-xl -translate-x-[0.5rem] -translate-y-[0.5rem] xl:min-w-[300px] min-w-[300px] md:w-auto">
                  <p className="text-[#D93003] text-[24px] xl:text-[20px] xs:text-[18px] text-center font-[500] leading-[15px] mb-[10px]">
                  Smart devices
                 </p>
                 <p className="text-[#000000] text-center text-[14px] xl:text-[14px] xs:text-[15px] mt-2 !mb-[20px]">
                 Oximeter, Thermometer, Spirometer,  BP monitor, BCA Scale
                 </p>
                </div>
                </div>

                <div className="border-[1px] xs:mb-[35px] xs:w-[95%] border-[#F18642]  rounded-xl absolute xs:relative xs:mx-auto w-min bottom-[12%] xs:top-0 xs:left-0 2xl:left-[17%] left-[7%]">
                <div className="flex relative -left-[10px] -top-[5px] flex-col p-4 rounded-xl bg-[#FFDBBB] shadow-xl -translate-x-[0.5rem] -translate-y-[0.5rem] xl:min-w-[300px] min-w-[300px] md:w-auto">
                  <p className="text-[#DE6213] text-[24px] xl:text-[20px] xs:text-[18px] text-center font-[500] leading-[15px] mb-[10px]">
                  Tracky Pro Cardio
                 </p>
                 <p className="text-[#000000] text-center text-[14px] xl:text-[14px] xs:text-[15px] mt-2 !mb-[20px]">
                 Remote monitoring & diagnostics for Cardiometabolic disorders
                 </p>
                </div>
                </div>

              </div>



              <div className="lg:flex lg:w-1/3 lg:justify-center sm:w-[55%] sm:mx-auto">
              <div className="border-[1px] xs:mb-[35px] xs:w-[95%] border-[#F4B86F]  rounded-xl xs:relative absolute xs:mx-auto w-min -top-[25%] xs:top-0  z-50">
                 <div className="flex relative -left-[10px] -top-[5px] flex-col p-4 rounded-xl bg-[#FDD6A8] shadow-xl -translate-x-[0.5rem] -translate-y-[0.5rem] xl:min-w-[300px] min-w-[300px] md:w-auto">
                  <p className="text-[#CF7404] text-[24px] xl:text-[20px] xs:text-[18px] text-center font-[500] leading-[15px] mb-[10px]">
                  Tracky pro Sleep
                 </p>
                 <p className="text-[#000000] text-center text-[14px] xl:text-[14px] xs:text-[15px] mt-2 !mb-[20px]">
                  Remote monitoring & diagnostics for Sleep Apnea
                 </p>
                </div>
              </div>
                <Image width={450} height={270} className="flex-shrink-0 object-cover rounded-full xs:mb-[35px]" src="/images/banners/heartCenter.svg" alt="" />
             
                <div className="border-[1px] xs:mb-[35px] xs:w-[95%] border-[#35586C]  rounded-xl absolute xs:mx-auto xs:relative w-min -bottom-[25%] xs:top-0">
                <div className="flex relative -left-[10px] -top-[5px] flex-col p-4 rounded-xl bg-[#90C7DC] shadow-xl -translate-x-[0.5rem] -translate-y-[0.5rem] xl:min-w-[300px] min-w-[300px] md:w-auto">
                  <p className="text-[#003D57] text-[24px] xl:text-[20px] xs:text-[18px] text-center font-[500] leading-[15px] mb-[10px]">
                  Virtual Lab
                 </p>
                 <p className="text-[#000000] text-center text-[14px] xl:text-[14px] xs:text-[15px] mt-2 !mb-[20px]">
                 Book cardio & sleep diagnostics at home with Tracky’s Virtual lab model
                 </p>
                </div>
                </div>
              </div>

              <div className="grid w-full grid-cols-1 gap-8 lg:w-1/3 xl:gap-16 md:grid-cols-2  sm:grid-cols-2">

                <div className="border-[1px] border-[#F06743] xs:w-[95%]  rounded-xl xs:relative absolute xs:mx-auto w-min top-[12%] xs:top-0 xs:right-0 2xl:right-[15%] right-[2%]">
                <div className="flex relative -left-[10px] -top-[5px] flex-col p-4 rounded-xl bg-[#FFBFA8] shadow-xl -translate-x-[0.5rem] -translate-y-[0.5rem] xl:min-w-[300px] min-w-[300px] md:w-auto">
                  <p className="text-[#CD3D17] text-[24px] xl:text-[20px] xs:text-[18px] text-center font-[500] leading-[15px] mb-[10px]">
                  Trunu
                 </p>
                 <p className="text-[#000000] text-center text-[14px] xl:text-[14px] xs:text-[15px] mt-2 !mb-[20px]">
                 Nutritional supplements specially designed for cardiovascular health
                 </p>
                </div>
                </div>

               

                <div className="border-[1px] border-[#6BA6C4] xs:w-[95%] rounded-xl absolute xs:mx-auto xs:relative w-min bottom-[12%] xs:top-0 xs:right-0 2xl:right-[18%] right-[6%]">
                <div className="flex relative -left-[10px] -top-[5px] flex-col p-4 rounded-xl bg-[#B8E0F6] shadow-xl -translate-x-[0.5rem] -translate-y-[0.5rem] xl:min-w-[300px] min-w-[300px] md:w-auto">
                  <p className="text-[#1384BE] text-[24px] xl:text-[20px] xs:text-[18px] text-center font-[500] leading-[15px] mb-[10px]">
                  VitalNXT
                 </p>
                 <p className="text-[#000000] text-center text-[14px] xl:text-[14px] xs:text-[15px] mt-2 !mb-[20px]">
                 Book cardio & sleep diagnostics at home with Tracky’s Virtual lab model
                 </p>
                </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Container> */}
    </div>
  )
}

export default IndexBanner
