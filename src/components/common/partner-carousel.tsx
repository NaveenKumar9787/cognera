"use client"
import Carousel from '@/ui/carousel/carousel';
import Container from '@/ui/container';
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function PatnersScroll({ props, arrows }: any) {

    const breakpoints = {
        "1720": {
            slidesPerView: 5,
            spaceBetween: 28,
            //        touchRatio: 0,
        },
        "1400": {
            slidesPerView: 5,
            spaceBetween: 28,
        },
        "1025": {
            slidesPerView: 5,
            spaceBetween: 28,
        },
        "768": {
            slidesPerView: 4,
        },
        "500 ": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "360": {
            slidesPerView: 3,
            spaceBetween: 12,
        },
    };


    const partnersList = [
        {
            image: "partnersList/partnersList1.png"
        },
        {
            image: "partnersList/partnersList2.png"
        },
        {
            image: "partnersList/partnersList3.png"
        },
        {
            image: "partnersList/partnersList4.png"
        },
        {
            image: "partnersList/partnersList5.png"
        },
    ]

    return (
        <Container className="py-2 overflow-hidden mt-10 xs:mt-3 relative">
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
                    {partnersList?.map((image: any, index: any) => (
                        <SwiperSlide key={index} virtualIndex={index} className="flex justify-center">
                            <div className='flex justify-center items-center testin h-full' key={index }><Image src={`/images/${image?.image}`} alt={"partnersList"} width={170} height={75} className='xs:w-28' /></div>
                        </SwiperSlide>
                    ))}
                </div>
            </Carousel>
        </Container>
    )
}
