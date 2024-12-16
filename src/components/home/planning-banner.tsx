"use client"
import { getIcon } from '@/lib/get-icon'
import Button from '@/app/ui/button'
import Container from '@/ui/container'
import React from 'react'
import homeIcons from '../icons/home-icons'
import { useParallax } from 'react-scroll-parallax'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'
import { Buttonarrow, Wearables } from '../icons/common-icons'

export default function PlanningBanner() {

  // const parallax = useParallax<HTMLDivElement>({
  //     translateX: [150, -180, 'easeInOut'],
  //     opacity: [0, 1, 'easeOutBack'],

  //   });

  //   const parallaxTwo =  useParallax<HTMLDivElement>({
  //     translateY: [200,0, 'easeInOut'],
  //     opacity: [0, 1, 'easeOutBack'],
  //   });

  return (
    <Container className="relative xs:px-5 px-[40px] 2xl:px-[75px] max-w-full xs:h-auto xs:py-10 flex flex-col gap-6 justify-center items-start bg-[#F5FFFE] h-[607px] overflow-hidden">
      <div className="2xl:text-[56px] xs:px-0 text-[45px] xs:text-2xl font-[500] xs:text-center text-[#001C4D]"> Integrate your application <br />  with your users' wearables</div>
      <span >
      <Link href={"/sign-in"}><Button className="w-full !h-[46px] xl:min-w-[200px] shadow-lg px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mt-4 focus:outline-none !bg-[#00389B] !rounded-[50px] hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
          Get Started <Buttonarrow />
        </Button></Link>
      </span>
      <div className='absolute top-0 right-0 xs:hidden'>
        <Wearables />
      </div>
    </Container>
  )
}
