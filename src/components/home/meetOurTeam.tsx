"use client"
import { getIcon } from '@/lib/get-icon'
import Button from '@/app/ui/button'
import Container from '@/ui/container'
import React from 'react'
import homeIcons from '../icons/home-icons'
import { useParallax } from 'react-scroll-parallax'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'
import { Buttonarrow, Customization, Engagement, Security, UserFriendly, Wearables } from '../icons/common-icons'
import Image from 'next/image'

export default function MeetOurTeam({ title }: any) {

  const partnersList = [
    // {
    //   image: "MeetOurTeam/Meet5.png",
    //   name: "Neeraj Katare",
    //   description:"Founder & MD"
    // },
    {
      image: "MeetOurTeam/Meet6.png",
      name: "Megha Katare",
      description:"Co-Founder"
    },
    {
      image: "MeetOurTeam/Meet7.jpeg",
      name: "Sukhendu Patnaik",
      description:"Co-Founder & ED Ex Director Supply Chain of Abbott"
    },
    {
        image: "MeetOurTeam/Meet1.png",
        name: "Raj Gopal",
        description:"CTO at Drstore"
    },
    {
      image: "MeetOurTeam/Meet4.jpg",
      name: "Nirmesh",
      description:"prakash Advisor, Boom partner"
    },
    {
      image: "MeetOurTeam/Meet8.jpg",
      name: "Amit Maloo",
      // description:"General,Laparoscopic,Robotic & LASER Surgeon at Apollo Hospital"
    },
    {
      image: "MeetOurTeam/Meet9.JPG",
      name: "Ranjit Singh Chugh",

      // description:"General,Laparoscopic,Robotic & LASER Surgeon at Apollo Hospital"
    },
    {
      image: "MeetOurTeam/Meet10.jpg",
      name: "Arun Seth",
      // description:"General,Laparoscopic,Robotic & LASER Surgeon at Apollo Hospital"
    },
    {
      image: "MeetOurTeam/Meet11.jpg",
      name: "Dr Rahul Gupta",
      // description:"General,Laparoscopic,Robotic & LASER Surgeon at Apollo Hospital"
    },
    {
        image: "MeetOurTeam/Meet2.png",
        name: "Dr Nitesh Jhawar",
        description:"General,Laparoscopic,Robotic & LASER Surgeon at Apollo Hospital"
    },
    {
        image: "MeetOurTeam/Meet3.png",
        name: "Ashish Mishra",
        description:"Associate Director Abbott"
    }
   
   
    
]
  return (
    <Container className="relative xs:px-2 px-[40px] 2xl:px-[75px] max-w-full flex flex-col gap-6 justify-center items-start bg-[#C6E7C6]  overflow-hidden">


      <div className="m-auto my-12 px-6 pb-[70px] xs:px-0 xs:pb-[10px]">
      <h1 className="text-[45px] text-center font-[500] text-[#001C4D] 2xl:text-[56px] xs:text-[30px] pb-10">Investors, Advisors & Core Team.</h1>
        {/* <h1 className="text-[45px] text-center font-[500] text-[#001C4D] 2xl:text-[56px] xs:text-[30px]">Meet our Team</h1> */}
        {/* <p className="text-[18px] text-center font-[400] text-[#001C4D] lg:text-[20px] 2xl:w-[47%] w-[60%] mx-auto xs:w-[100%]">
        The dedicated professionals behind your healthcare journey.</p> */}
      <div className='w-full p-[30px] pr-[15%] xs:pr-[30px] border border-white flex items-center xs:flex-col gap-2'>
        <div className='w-[30%] xs:w-full flex justify-center items-center'>
      <div className="relative rounded-lg overflow-hidden">
        <Image src={`/images/MeetOurTeam/Meet5.jpg`} alt={"MeetOurTeam"} width={250} height={250} className='xs:w-[200px] xs:h-[200px] w-[250px] h-[250px]' />
        <div className="absolute bottom-0  w-full text-center py-2 px-[10px]">
          <div className='bg-white bg-opacity-70 shadow-lg'>
          <h2 className="text-lg font-semibold xs:text-[14px] leading-normal">Neeraj Katare</h2>
          {/* <p className="text-sm text-gray-600 xs:text-[12px] leading-normal">{image?.description}</p> */}
          </div>
        </div>
        </div>
        </div>
        <div className='w-[70%] xs:w-full flex'>
        <p className="text-[18px] text-left font-[400] text-[#001C4D] lg:text-[20px] mx-auto flex justify-start">
        At DrStore, we are building the future of cardiac care! Our mission is to tackle the growing burden of cardiac diseases through cutting-edge research, AI, innovative technology, and an unwavering commitment to excellence. We strive to provide high-quality, accessible care that creates a lasting impact on the health of individuals in India & globally.</p>
        </div>
      </div>
        <div className="grid grid-cols-5 xs:hidden gap-2 xs:gap-5 py-[3%] justify-center items-center pt-10">
        {partnersList.slice(0,5).map((image: any, index: any) => (
          // <div key={index} className="p-2">
          //   <Image src={`/images/${image?.image}`} alt={"brandssList"} width={285} height={285} className='xs:w-28 xs:h-28 w-[250px] h-[235px]' />
          // </div>
          <div className="flex justify-center items-center">
      <div className="relative rounded-lg overflow-hidden">
       
        <Image src={`/images/${image?.image}`} alt={"MeetOurTeam"} width={285} height={285} className='xs:w-[200px] xs:h-[180px] w-[250px] h-[235px]' />
        <div className="absolute bottom-0  w-full text-center py-2 px-[10px]">
          <div className='bg-white bg-opacity-70 shadow-lg'>
          <h2 className="text-lg font-semibold xs:text-[14px] leading-normal">{image?.name}</h2>
          {/* <p className="text-sm text-gray-600 xs:text-[12px] leading-normal">{image?.description}</p> */}
          </div>
        </div>
      </div>
         </div>
        ))}
      </div>
      <div className="grid grid-cols-5 xs:hidden gap-2 xs:gap-5 py-[3%] justify-center items-center">
        {partnersList.slice(5,10).map((image: any, index: any) => (
          // <div key={index} className="p-2">
          //   <Image src={`/images/${image?.image}`} alt={"brandssList"} width={285} height={285} className='xs:w-28 xs:h-28 w-[250px] h-[235px]' />
          // </div>
          <div className="flex justify-center items-center">
      <div className="relative rounded-lg overflow-hidden">
       
        <Image src={`/images/${image?.image}`} alt={"MeetOurTeam"} width={285} height={285} className='xs:w-[200px] xs:h-[180px] w-[250px] h-[235px]' />
        <div className="absolute bottom-0  w-full text-center py-2 px-[10px]">
          <div className='bg-white bg-opacity-70 shadow-lg'>
          <h2 className="text-lg font-semibold xs:text-[14px] leading-normal">{image?.name}</h2>
          {/* <p className="text-sm text-gray-600 xs:text-[12px] leading-normal">{image?.description}</p> */}
          </div>
        </div>
      </div>
         </div>
        ))}
      </div>
      <div className="hidden xs:grid xs:grid-cols-2 gap-2 xs:gap-5 py-[3%] justify-center items-center">
        {partnersList.map((image: any, index: any) => (
          // <div key={index} className="p-2">
          //   <Image src={`/images/${image?.image}`} alt={"brandssList"} width={285} height={285} className='xs:w-28 xs:h-28 w-[250px] h-[235px]' />
          // </div>
          <div className="flex justify-center items-center">
      <div className="relative rounded-lg overflow-hidden">
       
        <Image src={`/images/${image?.image}`} alt={"MeetOurTeam"} width={285} height={285} className='xs:w-[200px] xs:h-[180px] w-[250px] h-[235px]' />
        <div className="absolute bottom-0  w-full text-center py-2 px-[10px]">
          <div className='bg-white bg-opacity-70 shadow-lg'>
          <h2 className="text-lg font-semibold xs:text-[14px] leading-normal">{image?.name}</h2>
          {/* <p className="text-sm text-gray-600 xs:text-[12px] leading-normal">{image?.description}</p> */}
          </div>
        </div>
      </div>
         </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-2 xs:grid-cols-2 gap-10 xs:gap-5 px-[15%] py-[3%] xs:px-[5%] justify-center items-center">
        {partnersList.slice(8,10).map((image: any, index: any) => (
          <div className="flex justify-center items-center">
          <div className="relative rounded-lg overflow-hidden">
           
            <Image src={`/images/${image?.image}`} alt={"MeetOurTeam"} width={285} height={285} className='xs:w-[200px] xs:h-[180px] w-[250px] h-[235px]' />
            <div className="absolute bottom-0  w-full text-center py-2 px-[10px]">
              <div className='bg-white bg-opacity-70 shadow-lg'>
              <h2 className="text-lg font-semibold xs:text-[14px] leading-normal">{image?.name}</h2>
              </div>
            </div>
          </div>
        </div>
          // <div key={index} className="p-2">
          //   <Image src={`/images/${image?.image}`} alt={"brandssList"} width={285} height={285} className='xs:w-28 w-[250px] xs:h-28  h-[235px]' />
          // </div>
        ))}
      </div> */}

      </div>


    </Container>
  )
}
