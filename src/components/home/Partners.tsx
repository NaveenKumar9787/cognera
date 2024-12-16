import React from 'react'
import Image from 'next/image'

function Partners(props: any) {
  const partners = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const breakpoints = {
    "1500": {
      slidesPerView: 7,
      spaceBetween: 28,
    },
    "1025": {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    "768": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "480": {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    "0": {
      slidesPerView: 2,
      spaceBetween: 12,
    },
  };
  return (
    <div className="py-5 xs:py-2">

      <div className='flex flex-col md:flex-row col-12 md:col-12 py-2 lg:pb-5 text-center mt-0'>
        <div className='col-span-12 md:col-span-6 md:basis-1/2 xs:relative'>
          <div className='flex justify-end xs:absolute xs:-top-8 xs:right-0'>
            <Image src="/images/home/globe-line.webp" width={120} height={12} alt='globe line' className='self-end' />
          </div>
          <p className="text-[21px] xs:text-base font-medium mt-0 mb-4 text-700 line-height-3 text-left xs:mt-5 relative top-[-41px]">We are honoured to be recognized for our product accomplishments. We are proud to be recognized as a good performer and the reputation that we have earned within and across the industries in which we operate.</p>
        </div>
        <div className='col-span-12 md:col-span-6 md:basis-1/2 flex justify-center items-center'>
      
        </div>
      </div>
    </div>
  )
}

export default Partners