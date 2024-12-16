"use client"
import Carousel from '@/ui/carousel/carousel';
import Container from '@/ui/container';
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ContactForm from '../forms/contact-form';
export default function BlogsHome({ props, arrows }: any) {

    const breakpoints = {
        "1720": {
            slidesPerView: 4,
            spaceBetween: 28,
            //        touchRatio: 0,
        },
        "1400": {
            slidesPerView: 4,
            spaceBetween: 28,
        },
        "1025": {
            slidesPerView: 3,
            spaceBetween: 28,
        },
        "768": {
            slidesPerView: 1,
        },
        "500 ": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "360": {
            slidesPerView: 1,
            spaceBetween: 12,
        },
    };


    const partnersList = [
        {"id":"1", "title":"DrStore gets pre-series A funding from Equanimity Venture", "discription":"DrStore is India’s first & only Group Purchase Organisation (GPO) for clinics, small to medium size nursing homes & hospitals.","banner_image":"blog1.svg", "btn_link":""},
    {"id":"2", "title":"Our aim is to expand pan India in the next few months-Neeraj Katare, CEO, DrStore", "discription":"Group purchase organisation (GPO) simplifies the healthcare value chain by aggregating supply and demand sides for targeted segments...","banner_image":"blog2.svg", "btn_link":""},
    {"id":"3", "title":"Medical supplies and services marketplace DrStore raises pre-Series A capital", "discription":"Mumbai-based DrStore, which operates an eponymous business-to-business marketplace for medical supplies, has raised...","banner_image":"blog3.svg", "btn_link":""},
    {"id":"4", "title":"The power of many: How hospitals sourcing aggregation will be the key for healthy India", "discription":"While many states in the country are doing a commendable job of providing health insurance, to make universal affordable healthcare...","banner_image":"blog4.svg", "btn_link":""},
   
    ]

    return (
        <Container className="py-5 xs:py-0 px-10 xl:px-[75px] bg-[#F8FFFE] xs:px-3 xs:mt-0">

<h3 className="text-[40px] font-[600] text-gray-800 mt-1 flex justify-center pb-5">
        Blogs
        </h3>

            <Carousel
                onTouch={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                loop={true}
                className={`mx-0 pagination-center col-span-12 self-end xs:h-full border-b-[3px]  border-t-[3px] boder-black py-5`}
                buttonClassName={""}
                spaceBetween={32}
                swiperNav={arrows}
                buttonPosition={"inside"}
                centeredSlides={false}
                pagination={false}
                breakpoints={breakpoints}
            >
                <div className="flex items-center justify-center md:justify-start border-b border-t  py-5 m-auto ">
                    {partnersList?.map((blog: any, index: any) => (
                        <SwiperSlide key={index} virtualIndex={index} className="flex justify-center">

<div className="max-w-sm rounded-lg overflow-hidden">
 <Image src={`/images/blogs/${blog?.banner_image}`} width={430} height={325} alt='Blogs Banner' />

      <div className="p-4">
        <p className="text-gray-500 text-sm">Jan 2024</p>
        <h3 className="text-xl font-semibold text-gray-800 mt-1 min-h-[110px] xs:min-h-fit">
        {blog?.title}
        </h3>
        <p className="text-gray-600 mt-2 min-h-[110px] xs:min-h-fit">
        {blog?.discription}
        </p>
        <p className="text-green-600 hover:text-green-800 font-semibold mt-4 inline-block" >
          Read more →
        </p>
      </div>
    </div>

                        </SwiperSlide>
                    ))}
                </div>
            </Carousel>

            <div className='px-[2%] py-[4%]' id="contactUS">
        <div className='flex xs:flex-col min-h-96 bg-[#DBE8FF]'>

        <div className='w-2/4 xs:w-full'>

          <div className='flex items-end h-full '>

            <div className='pl-[75px] xs:pl-5 mt-12 xs:mt-5' >
              <div className="2xl:text-[56px] xl:text-[45px] text-[40px] xs:text-[30px] font-medium leading-[67.20px]">Contact us</div>
              <div className="w-[82%] text-[#001C4D] text-xl italic  my-[14px] leading-7 ">Have a question for us or feedback? Please fill out the form to reach us.</div>

              <div className='mt-14 xs:mt-8 xs:mb-0'>
            <Image src={"/images/contact-us/contactUs.svg"} alt={"brandssList"} width={600} height={400} className='xs:w-28' />
               
              </div>

            </div>

          </div>

        </div>
        <div className='w-2/4 xs:w-full px-16 xs:px-5'>
          <ContactForm />
        </div>
        </div>
        </div>
        </Container>
    )
}
