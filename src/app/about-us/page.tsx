import Header from '@/components/common/header'
import PlanningBanner from '@/components/home/planning-banner'
import { AIIcon, Aidriven, Apiplatform, Appdevelopement, Appstore, CollaborationIcon, InnovationIcon, IntegrityIcon } from '@/components/icons/common-icons'
import Container from '@/ui/container'
import Image from 'next/image'
import React from 'react'

function AboutUs() {
  return (
    <Container className='pt-48 xs:pt-20 max-w-full'>
      <Header />

      <div className="w-full bg-white py-16 xs:py-5">
        <h2 className="text-center xs:text-left xs:px-5 2xl:text-[56px] xl:text-[45px] text-[40px] xs:text-[30px] font-medium xs:leading-[33px] leading-[67.20px] xs:mb-5">Our Mission</h2>
        <p className="w-[80%] xs:w-[92%] xl:w-[76%] m-auto text-center xs:text-left xs:leading-[30px] xs:mx-5  2xl:text-2xl text-[20px] font-normal leading-[33.60px] xs:text-[16px]">Our mission is to transform how businesses work using smart automation and data insights. We provide tools to help companies improve their operations, connect better with customers, and grow sustainably, making advanced technology easy and useful for everyone.</p>
      </div>


      <div className='flex xs:flex-col px-20 xs:px-5 py-14 xs:py-5 bg-white'>

        <div className='w-2/4 xs:w-full 2xl:pr-36 pr-[3rem]  xs:pr-0'>
          <h2 className="2xl:text-[56px] xl:text-[45px] text-[40px] xs:text-[30px] font-medium xs:leading-[33px] xs:mb-4 leading-[67.20px] mb-8">Our Story</h2>
          <p className="2xl:text-2xl text-[20px] font-normal leading-[33.60px] xs:text-[16px]">
            VitalNXT.ai began with a vision to simplify and enhance business operations through innovative technology solutions. Founded by passionate tech enthusiasts, we understood the challenges businesses face with advanced technologies like AI and automation.<br /><br />
            Our mission is to develop intuitive solutions that empower businesses to streamline processes and make informed decisions. We focus on creating powerful yet user-friendly tools that optimize operations and drive growth.<br /><br />
            Driven by our commitment to innovation, we anticipate customer needs and stay ahead of industry trends. Every milestone at VitalNXT.ai reflects our dedication to transforming businesses and making a positive impact in the digital landscape.<br /><br />
            Join us on our journey to revolutionize business processes with intelligent automation and data-driven strategies. Discover how VitalNXT.ai can empower your business to thrive in today's competitive environment.
          </p>
        </div>
        <div className='w-2/4 xs:w-full xs:mt-10'>
          <Image src={"/images/about-us/content-box-img-1.jpg"} alt='' width={850} height={850} className='w-full sm:w-[57%] sm:mx-auto' />
        </div>
      </div>

      <div className="w-full px-20 xs:px-5 py-10 bg-[#E4EAF1]">

        <div>
          <h3 className="2xl:text-[56px] xl:text-[45px] text-[40px] xs:text-[30px] text-center font-medium leading-[67.20px]">Our core value</h3>
          <p className="m-auto w-[80%] xs:w-full xs:mt-5 xl:w-[56%] w text-center text-xl font-light leading-7">We are committed to delivering top-quality solutions and services, continually improving to meet and surpass industry standards.</p>
        </div>

        <div className="flex items-center justify-center py-20 sm:pb-0">
          <div className="grid grid-cols-1 gap-36 gap-y-[4.5rem] sm:gap-8 xs:gap-y-0 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

            <div className="w-[88%] xs:w-full relative bg-white py-6 px-6 rounded-[12px] my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full shadow-xl bg-transparent left-[20px] -top-[50px]">
                <InnovationIcon />
              </div>
              <div className="mt-8">
                <p className="text-[#001C4D] text-[24px] font-[500] my-2">Innovation</p>
                <div className="text-[#001C4D] text-[20px] font-[400] w-[80%] xs:w-full mt-1">
                  <p>Continuously pushing the boundaries of health technology.</p>
                </div>
              </div>
            </div>

            <div className="w-[88%] xs:w-full relative bg-white translate-y-[75px] sm:translate-y-[0px] py-6 px-6 rounded-[12px] my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full shadow-xl bg-transparent left-[20px] -top-[50px]">
                <IntegrityIcon />
              </div>
              <div className="mt-8">
                <p className="text-[#001C4D] text-[24px] font-[500] my-2">Integrity</p>
                <div className="text-[#001C4D] text-[20px] font-[400] w-[80%] xs:w-full mt-1">
                  <p>Building trust through transparency and honesty.</p>
                </div>
              </div>
            </div>

            <div className="w-[88%] xs:w-full relative bg-white py-6 px-6 rounded-[12px] my-4 shadow-xl xs:mt-44 sm:!mt-[5rem]">
              <div className=" text-white flex items-center absolute rounded-full shadow-xl bg-transparent left-[20px] -top-[50px]">
                <AIIcon />
              </div>
              <div className="mt-8">
                <p className="text-[#001C4D] text-[24px] font-[500] my-2">Customer-Centric</p>
                <div className="text-[#001C4D] text-[20px] font-[400] w-[80%] xs:w-full mt-1">
                  <p>Focusing on user needs and experiences.</p>
                </div>
              </div>
            </div>

            <div className="w-[88%]  sm:!mt-[5rem] xs:w-full relative bg-white translate-y-[75px] sm:translate-y-[0px] py-6 px-6 rounded-[12px] my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full shadow-xl bg-transparent left-[20px] -top-[50px]">
                <CollaborationIcon />
              </div>
              <div className="mt-8">
                <p className="text-[#001C4D] text-[24px] font-[500] my-2">Collaboration</p>
                <div className="text-[#001C4D] text-[20px] font-[400] w-[90%] xs:w-full mt-1">
                  <p>Working together to achieve more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







      <PlanningBanner />



    </Container>
  )
}

export default AboutUs
