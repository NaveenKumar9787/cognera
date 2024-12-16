import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex xs:flex-col px-20 xs:px-5 py-14 xs:pt-5 xs:pb-10'>
      <div className='w-2/4 xs:w-full flex flex-col items-start justify-center xs:order-2'>
        <div className='w-[80%] xs:w-full'>
          <h1 className="text-left 2xl:text-[56px] xl:text-[45px] text-[40px] xs:text-[30px] font-medium leading-[78.40px] mb-5 xs:mt-10">Who We Are?</h1>
          <p className="2xl:text-2xl text-[20px] font-normal leading-[33.60px] xs:text-[16px]">
            We are a team of passionate tech experts dedicated to enhancing your experience through real-time API integration, providing seamless connectivity across your favorite health and fitness devices. VitalNXT.ai aims to streamline your digital experience by integrating all your devices into a single app.<br /><br />
            Our innovative solution ensures seamless connectivity, allowing you to manage and control all your health care smart devices from one central platform
          </p>
        </div>
      </div>
      <div className='w-2/4 xs:w-full'>
        <Image src={"/images/about-us/banner.png"} alt='vitalNXT' width={750} height={750} className='sm:w-[57%] sm:mx-auto' />
      </div>
    </div>
  )
}
