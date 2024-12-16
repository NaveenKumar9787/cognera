"use client"
import Carousel from '@/ui/carousel/carousel';
import Container from '@/ui/container';
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function FiveGrid({ props, arrows }: any) {

    


    const partnersList = [
        {
            image: "brands/brand1.svg"
        },
        {
            image: "brands/brand2.svg"
        },
        {
            image: "brands/brand3.svg"
        },
        {
            image: "brands/brand4.svg"
        },
        {
            image: "brands/brand5.svg"
        },
        {
            image: "brands/brand6.svg"
        },
        {
            image: "brands/brand7.svg"
        },
        {
            image: "brands/brand8.svg"
        },
        {
            image: "brands/brand9.svg"
        },
        {
            image: "brands/brand10.svg"
        },
        {
            image: "brands/brand11.svg"
        },
        {
            image: "brands/brand12.svg"
        },
        {
            image: "brands/brand13.svg"
        },
        {
            image: "brands/brand14.svg"
        },
        {
            image: "brands/brand15.svg"
        },
        {
            image: "brands/brand16.svg"
        },
        {
            image: "brands/brand17.svg"
        },
        {
            image: "brands/brand18.svg"
        },
        {
            image: "brands/brand19.svg"
        },
        {
            image: "brands/brand20.svg"
        },
        {
            image: "brands/brand21.svg"
        },
        {
            image: "brands/brand22.svg"
        },
        {
            image: "brands/brand23.svg"
        },
        {
            image: "brands/brand24.svg"
        },
        {
            image: "brands/brand25.svg"
        },
        {
            image: "brands/brand26.svg"
        },
        {
            image: "brands/brand27.svg"
        },
        
    ]

    return (
        <div className="grid grid-cols-5 xs:grid-cols-3 gap-10 px-[5%] py-[3%] bg-[#FCE7D8] items-center">
        {partnersList.map((image: any, index: any) => (
          <div key={index} className="p-2">
            {/* <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover"
            /> */}
            <Image src={`/images/${image?.image}`} alt={"brandssList"} width={140} height={70} className='xs:w-28' />
          </div>
        ))}
      </div>
        // <Container className="py-2 overflow-hidden mt-10 xs:mt-3 relative">
          
        // </Container>
    )
}
