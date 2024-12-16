import Container from '@/ui/container'
import Image from 'next/image'
import React from 'react'
import data from '@/data/blogs.json'

export default function PrivacyPolicy() {
  return (
    <Container className='max-w-full px-[75px] min-h-screen pt-48 xs:pt-20 mb-[60px] xs:px-5 '>
      {/* <div className='flex xs:flex-col gap-5'>
        <h1 className="w-2/4 xs:w-full flex items-center text-[#001c4d] xs:text-2xl xl:text-4xl 2xl:text-5xl font-semibold leading-[67.20px] pr-20 xs:pr-0">Harnessing AI for Enhanced Customer Engagement at VitalNXT.ai</h1>
        <div className="w-2/4 xs:w-full text-[#001C4D] xs:text-base lg:text-lg 2xl:text-2xl font-normal leading-[33.60px] ml-0">In today's fast-paced digital landscape, businesses must stay ahead of the curve to maintain a competitive edge. One of the most significant advancements in recent years is the integration of artificial intelligence (AI) to enhance customer engagement. At VitalNXT.ai, we are leveraging the power of AI to create more meaningful, personalized, and efficient interactions with our customers. Here’s how AI is revolutionizing customer engagement and how VitalNXT.ai is at the forefront of this transformation.</div>
      </div>

      <div className='py-8 my-8 xs:py-0'>
        <Image src="/images/banners/blogs.jpg" width={1770} height={600} alt='Blogs Banner' />
      </div> */}

      {data?.map((blog, id) => (
        <div key={id} className='flex xs:flex-col gap-5 mb-24 xs:mb-10 group'>
          <div className="w-2/4 xs:w-full flex items-center text-[#001c4d] text-5xl font-medium leading-[67.20px] lg:pr-2 xl:pr-10 2xl:pr-20 xs:px-0 group-even:pl-0 xs:group-even:pl-0 group-even:pr-0 group-even:order-2 xs:group-even:order-none">
            <Image src={`/images/blogs/${blog?.banner_image}`} width={1770} height={600} alt='Blogs Banner' />
          </div>
          <div className="w-2/4 flex flex-col justify-center xs:w-full text-[#001c4d] text-2xl font-normal leading-[33.60px] ml-0 lg:group-odd:px-5 xl:group-odd:px-10 2xl:group-odd:px-20 group-even:pr-28 xs:group-odd:px-0 xs:group-even:px-0">
            <h2 className="text-[#001c4d] xs:text-2xl xl:text-3xl 2xl:text-5xl font-semibold leading-[56px] mb-3">{blog?.title}</h2>
            <div className="text-[#001c4d] xs:text-base lg:text-lg 2xl:text-2xl font-normal leading-[33.60px]">{blog?.discription}</div>
          </div>
        </div>
      ))}
    </Container>
  )
}

