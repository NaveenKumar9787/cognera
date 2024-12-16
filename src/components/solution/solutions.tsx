"use client"
import React, { useState } from 'react'
import Container from '@/ui/container'
import Image from 'next/image';
import Button from '@/app/ui/button'
import commonIcons, { Bannercenter, Buttonarrow, PlusIcon, SearchIcon1 } from '../icons/common-icons'

import Input from '@/ui/input';
import Solutions from '../home/solutions';
import PlanningBanner from '../home/planning-banner';
import Benefits from './benefits';
import Link from 'next/link';



function SoluctionsList({ homeConent }: any) {


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
    <>
      <div className=" bg-no-repeat max-w-full xs:pt-4 pb-0 w-screen ">
        <div className='bg-[#EEF4FF]  pt-[150px] xs:pt-[50px]'>
          <Container className="max-w-full px-10 xl:px-[75px] xs:px-5 ">
            <section className="">
              <div className="container xs:px-0 px-6 py-10 mx-auto xs:py-2">
                <h1 className="text-[40px] xl:leading-[78px] leading-[65px] xl:w-[80%] w-[85%] mx-auto text-center font-semibold text-[#001C4D] capitalize 2xl:text-[56px] xs:w-[100%] xs:text-[30px] xs:leading-[45px]">Seamlessly connect with all fitness and health wearables, sensors, and apps using a single API. </h1>
                <div className='flex gap-6 items-center justify-center mt-6 mb-[40px]'>
                <Link href={"/contact-us"}><Button className="w-full !h-[46px] sm:w-auto xl:min-w-[200px]  shadow-lg px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mt-4 focus:outline-none !bg-[#00389B] !rounded-[50px] hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Connect with us  <Buttonarrow />
                  </Button></Link>

                </div>

                <div className="mt-8 xl:mt-12 relative pb-[10px] pt-[0px] flex items-center justify-center">
                  <Image src={'/images/soluction-header.png'} alt="CRM logo" width={1622} height={563} className=" w-auto px-8" />
                </div>

              </div>
            </section>
          </Container>
        </div>
        <Solutions />
        <Benefits />
        <PlanningBanner />

      </div >
    </>
  )
}

export default SoluctionsList
