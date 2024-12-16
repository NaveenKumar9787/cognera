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


function DataSecurity({ homeConent }: any) {


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
    <div className=" bg-no-repeat max-w-full xs:pt-4 w-screen bg-[#F5FFFE]">
      <Container className="max-w-full px-10 xl:px-[75px] xs:px-5">
        <section className="">
          <div className="container xs:px-0 px-6 py-10 mx-auto xs:py-2">
            <h1 className="text-[45px] xs:text-[35px] leading-[40px] text-center font-semibold text-[#001C4D] capitalize 2xl:text-[56px]">Data Security & Compliance</h1>
            <div className="mt-8 xl:mt-12 lg:flex lg:items-center relative pb-[320px] pt-[60px] xs:py-0 xs:py-6">
              <div className="grid w-full grid-cols-1 gap-8 lg:w-1/3 xl:gap-16 md:grid-cols-2 sm:grid-cols-2">
                <div className="border-[0px] border-[#F4F4F4]  rounded-xl xs:relative xs:w-[100%] xs:top-0 xs:left-0 absolute w-min top-[0%] 2xl:left-[3%] left-[1%]">
                  <div className="flex flex-col 2xl:p-7 p-3 rounded-xl bg-[#E0FFFB] min-w-[250px] xl:min-w-[350px] 2xl:min-h-[300px] min-h-[230px] justify-center">
                    <p className="text-[#007F71] 2xl:text-[28px] xl:text-[24px] text-[22px]  text-left font-[500] leading-[33px]">
                      SOC 2 Type 2
                    </p>
                    <p className="text-[#007F71] xl:text-[20px] text-[16px] 2xl:text-[18px] text-left   font-[400] leading-[28px]">
                      Demonstrates our commitment to maintaining the highest standards of security, availability, processing integrity, confidentiality, and privacy.
                    </p>
                  </div>
                </div>

                <div className="border-[0px] border-[#E9E7FF]  rounded-xl absolute w-min xs:relative xs:w-[100%] xs:top-0 xs:bottom-0 bottom-[15%] 2xl:left-[4%] left-[2%]">
                  <div className="flex flex-col 2xl:p-7 p-3 rounded-xl bg-[#E9E7FF] min-w-[250px] xl:min-w-[350px] 2xl:min-h-[300px] min-h-[230px]  justify-center md:w-auto">
                    <p className="text-[#1100D3] 2xl:text-[28px] xl:text-[24px] text-[22px]  text-left font-[500] leading-[33px]">
                      GDPR
                    </p>
                    <p className="text-[#1100D3] xl:text-[20px] text-[16px] 2xl:text-[18px] text-left   font-[400] leading-[28px]">
                      Adheres to stringent European Union regulations to protect and manage personal data, ensuring privacy and transparency.                    </p>
                  </div>
                </div>

              </div>



              <div className="lg:flex lg:w-2/3 lg:justify-center sm:justify-center sm:flex">
                <Image src={'/images/datasecurity.png'} alt="simplifies" width={900} height={660} className=" w-auto pr-0" />
              </div>

              <div className="grid w-full grid-cols-1 gap-8 lg:w-1/3 xl:gap-16 md:grid-cols-2  sm:grid-cols-2">

                <div className="border-[0px] border-[#F4F4F4]  rounded-xl absolute w-min xs:relative xs:w-[100%] xs:top-0 xs:right-0 2xl:top-[5%] top-[0%] 2xl:right-[6%] right-[2%]">
                  <div className="flex flex-col 2xl:p-7 p-3 rounded-xl bg-[#FFF2E7] min-w-[250px] xl:min-w-[350px] 2xl:min-h-[300px] min-h-[230px] justify-center md:w-auto">
                    <p className="text-[#A44F00] 2xl:text-[28px] xl:text-[24px] text-[22px]  text-left font-[500] leading-[33px]">
                      Full control of your customer data
                    </p>
                    <p className="text-[#A44F00] xl:text-[20px] text-[16px] 2xl:text-[18px] text-left   font-[400] leading-[28px]">
                      We use end-to-end encryption, ensuring that we never see your client's data.
                    </p>
                  </div>
                </div>

                <div className="border-[0px] border-[#F4F4F4]  rounded-xl absolute w-min xs:relative xs:w-[100%] xs:bottom-0 xs:right-0 bottom-[20%] 2xl:right-[6%] right-[2%]">
                  <div className="flex flex-col 2xl:p-7 p-3 rounded-xl bg-[#FFEAEC] min-w-[250px] xl:min-w-[350px] 2xl:min-h-[300px] min-h-[230px] justify-center md:w-auto">
                    <p className="text-[#C03744] 2xl:text-[28px] xl:text-[24px] text-[22px]  text-left font-[500] leading-[33px]">
                      End-to-End Encryption (E2E)
                    </p>
                    <p className="text-[#C03744] xl:text-[20px] text-[16px] 2xl:text-[18px] text-left   font-[400] leading-[28px]">
                      Implements robust encryption protocols to protect data during transmission and storage, preventing unauthorized access.                    </p>
                  </div>
                </div>

                <div className="border-[0px] border-[#F4F4F4]  rounded-xl absolute w-min xs:relative xs:w-[100%] xs:bottom-0 xs:right-0 2xl:bottom-[2%] bottom-[4%] 2xl:right-[40%] right-[36%]">
                  <div className="flex flex-col 2xl:p-7 p-3 rounded-xl bg-[#DCF5FF] min-w-[250px] xl:min-w-[350px] 2xl:min-h-[300px] min-h-[230px] justify-center md:w-auto">
                    <p className="text-[#0080B7] 2xl:text-[28px] xl:text-[24px] text-[22px]  text-left font-[500] leading-[33px]">
                      HIPAA
                    </p>
                    <p className="text-[#0080B7] xl:text-[20px] text-[16px] 2xl:text-[18px] text-left   font-[400] leading-[28px]">
                      Ensures the confidentiality, integrity, and availability of protected health information, safeguarding patient data.                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>




      </Container>



    </div>
  )
}

export default DataSecurity
