
import Image from "next/image";
import { lazy, useEffect, useState } from 'react';
import { Metadata } from "next";
import Loading from "@/components/common/loading";
import dynamic from "next/dynamic";



import PatnersScroll from "@/components/common/partner-carousel";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import Integration from "@/components/home/integration";
import Solutions from "@/components/home/solutions";
import WorkProcess from "@/components/home/workprocess";
import Simplifies from "@/components/home/simplifies";
import DataSecurity from "@/components/home/data-security";
import Faq from "@/components/home/faq";
import PlanningBanner from "../components/home/planning-banner";
import FiveGrid from "@/components/common/five-grid";
import MeetOurTeam from "@/components/home/meetOurTeam";
import BlogsHome from "@/components/common/blogs-home";


const IndexBanner = lazy(() => import('@/components/home/index-panner'));
const WhatWeDo = lazy(() => import('@/components/home/what-we-do'));
const Container = lazy(() => import('../ui/container'));


export const metadata: Metadata = {
  title: {
    default: "Smart Medical Device Ecosystem",
    template: "%s - vitalNXT.ai"
  },
  description: "",
  keywords: '',
  themeColor: "#00389B",

  openGraph: {
    title: "Smart Medical Device Ecosystem",
    // description: "Explore the Smart Medical Device Ecosystem by vitalNXT.ai, offering innovative healthcare solutions.",
    url: "https://stage-web.drstore.in/",
    siteName: "VitalNXT.ai",
    images: [
      {
        url: "https://stage-web.drstore.in/logo-header.png", // Full URL to your image
        width: 1200,
        height: 630,
        alt: "VitalNXT.ai - Smart Medical Device Ecosystem"
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Smart Medical Device Ecosystem",
    // description: "Explore the Smart Medical Device Ecosystem by vitalNXT.ai, offering innovative healthcare solutions.",
    images: ["https://stage-web.drstore.in/logo-header.png"] // Full URL to your image
  }
};



export default function Home() {

  const homeConent = [
    {
      topBanner: {
        image: "",
        title: "",
        subTitle: "",
        buttonOne: "",
        buttonTwo: "Explore",
        square: '#26CEC7',
        astrich: '#C84E89',

      }
    },

  ];

  const partners = {
    id: 13,
    path: '',
    partnersList: [
      { id: '001', image: 'home/partners/client-1.png', alt: 'partners' },
      { id: '002', image: 'home/partners/client-2.png', alt: 'partners' },
      { id: '003', image: 'home/partners/client-3.png', alt: 'partners' },
      { id: '004', image: 'home/partners/client-5.png', alt: 'partners' },
      { id: '005', image: 'home/partners/client-1.png', alt: 'partners' },
      { id: '002', image: 'home/partners/client-2.png', alt: 'partners' },
      { id: '003', image: 'home/partners/client-3.png', alt: 'partners' },
      { id: '004', image: 'home/partners/client-5.png', alt: 'partners' },
      { id: '005', image: 'home/partners/client-1.png', alt: 'partners' },
    ]
  }

  const sub_text = { sub_style: "text-[23px] mx-1 font-semibold text-black" }
  const classNames = {
    mainClassName: `bg-[#923f0a]`,
    subClassName: `bg-white border border-[#7A7AC0]`,
  }


  const boxLeft = false;

  return (
    <>
      <IndexBanner homeConent={homeConent} />

      <WhatWeDo homeConent={homeConent} />

      {/* <Integration /> */}

      <Simplifies />

      <WorkProcess homeConent={homeConent} />
      
      <Solutions />


      <FiveGrid props={partners} arrows={false} />



      <div className="py-5 xs:py-0 px-10 xl:px-[75px] bg-[#F8FFFE] xs:px-3 xs:mt-0">
        <h2 className={"xs:px-2 xs:py-4 w-[80%] xs:w-[100%] xs:text-[30px] xs:leading-[40px] leading-[70px] text-[#001C4D] text-left 2xl:text-[56px] text-[45px] font-[500]"} >
        Institutional Partner
        </h2>
        <PatnersScroll props={partners} arrows={false} />
      </div>

        <MeetOurTeam />

        <BlogsHome />

      {/* <DataSecurity homeConent={homeConent} /> */}

      {/* <Faq /> */}

      {/* <Container className="max-w-full px-10 xl:px-[75px] xs:px-5">

        <div className="my-0"> */}

          {/* <ContentBox props={homeConent?.[1]?.apparelsHome} /> */}
          {/* <ContentBox props={homeConent?.[2]?.durablesHome} order={2} />
          <ContentBox props={homeConent?.[3]?.wellnessHome} />
          <ContentBox props={homeConent?.[4]?.decorsHome} order={2} />
          <ContentBox props={homeConent?.[5]?.hypermarketsHome} last={true} /> */}
        {/* </div>
      </Container> */}

      {/* <div><PlanningBanner /></div> */}

    </>



  );
}

