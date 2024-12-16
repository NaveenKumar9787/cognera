"use client"
import { getIcon } from '@/lib/get-icon'
import Container from '@/ui/container'
import React, { useState } from 'react'
import homeIcons from '../icons/home-icons'
import commonIcons from '../icons/common-icons'
import bannerIcons from '../icons/banner-icons'
import Button from '@/app/ui/button'
import { animate, delay, motion } from 'framer-motion'
import Image from 'next/image'

import Link from 'next/link'

export default function ContentBoxText({ props, videoBox }: any) {

    let [isRequestOpen, setIsRequestOpen] = useState(false)
    function closeRequestModal() {
      setIsRequestOpen(false);
    }
    function openRequestModal() {
      setIsRequestOpen(true);
    }

    
    const fadeUpAni = {
        initial: { opacity: 0, y: 100 }, animate: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i } })
    }

    return (
        <Container className={`${videoBox ? "xs:m-0" : ""} flex flex-col max-w-full h-full xl:pl-[0px]`}>

            {props?.title ? <h2 className={`${props?.testimonial ? 'text-4xl xs:text-xl font-semibold' : 'text-neutral-900 text-[32px] xs:text-2xl font-extrabold leading-10'} flex gap-2 pt-10 pb-5 xs:pb-0 xs:pt-0 opacity-90 text-left`}>
                {props?.fillIcon && <div>{getIcon({ iconList: homeIcons, iconName: 'TitleStarIcon', fill: props?.fillIcon, width: 50, height: 50, className: 'xs:w-8' })}</div>} {props?.title}
            </h2>:<div className='w-full h-5'></div>}
            
            {props?.subTitle && <div className="opacity-80 text-black text-[26px] xs:text-base font-semibold leading-[35px] tracking-tight lg:mb-5">{props?.subTitle}</div>}
            {props?.testimonial && <div className='flex items-center gap-3'>
                <div className='rounded-full overflow-hidden w-93 xs:w-16 h-93 xs:h-16 shadow-sm'>
                    {props?.voicerPhoto === "" ?
                        <>{getIcon({ iconList: commonIcons, iconName: 'AvatarIcon', className: 'xs:w-full xs:h-full' })}</> :
                        <Image src={props?.voicerPhoto} alt='' width={100} height={100} />
                    }
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-2xl xs:text-lg font-bold'>{props?.voicerName}</span>
                    <span className='text-lg xs:text-sm font-medium'>- {props?.voicerPosition}</span>
                </div>
            </div>}

            {props?.tag && <div className={`${props?.testimonial ? 'pl-10' : ''} flex flex- col gap-5 xs:gap-2 flex-wrap my-5 xs:my-3`}>
                {props?.tag?.map((name: any, index: any) => (
                    <motion.div variants={fadeUpAni} initial="initial" whileInView='animate' viewport={{ once: false }} custom={index} key={index + 'solution_pages_name'} className="h-9 px-[21px] bg-pink-50 rounded-[5px] border border-neutral-900 justify-start items-center gap-4 inline-flex">
                        <div className="text-neutral-900 text-xs font-bold uppercase leading-tight">{name?.name}</div>
                    </motion.div>
                ))}
            </div>}

            {props?.description && <div className={`${props?.testimonial ? "relative inset-x-10 xs:inset-x-5 xs:mt-10 xs:mx-5 before:bg-[url('/images/testi-quote.svg')] before:bg-no-repeat before:-rotate-180 before:absolute before:w-10 before:h-10 before:-top-3 before:-left-12 xs:before:bg-[length:23px_32px] xs:after:bg-[length:23px_32px] after:bg-[url('/images/testi-quote.svg')] after:bg-no-repeat after:-rotate-0 after:absolute after:w-10 after:h-10 after:-bottom-0 xl:after:-bottom-5 xs:after:-bottom-6 after:-right-0 lg:after:-right-[30px] xl:after:-right-0 w-[88%]" : ""} text-neutral-900 text-lg xs:text-base font-medium xs:mt-3 lg:mt-0 mb-5`}><span dangerouslySetInnerHTML={{ __html: props?.description }}></span></div>}

            {props?.lists && <div className={`${props?.testimonial ? 'pl-10' : ''} flex gap-5 flex-wrap my-5 xs:my-0`}>
                {props?.listTitle && <div className='text-[26px] font-extrabold opacity-80'>{props?.listTitle}</div>}
                {props?.lists?.map((name: any, index: any) => (
                    <li key={index + 'solution_pages_lists'} className="text-lg w-full xs:text-base font-medium justify-start items-start gap-4 inline-flex ">
                        <div className={`${props?.listIcon === false ? 'hidden' : ''} mt-1`}>{getIcon({ iconList: bannerIcons, iconName: "ExploreIcon" })}</div> <span dangerouslySetInnerHTML={{ __html: name?.list }}></span>
                    </li>
                ))}
            </div>}
            {props?.button && <div className="flex xs:flex-wrap gap-10 xs:gap-5 mt-auto mb-11 xs:mb-0 pt-5 xs:justify-center">
                {props?.buttonOne && <Button onClick={openRequestModal} variant="black">{props?.buttonOne} {getIcon({ iconList: homeIcons, iconName: 'ButtonArrowRight' })}</Button>}
                {props?.buttonTwo &&  <Link href={`${props?.link1}`}><Button link="/home" variant="outline">{props?.buttonTwo} {getIcon({ iconList: homeIcons, iconName: 'ButtonArrowRightTop' })}</Button></Link>}
                {props?.buttonArkArrow && <div className='relative'> {getIcon({ iconList: commonIcons, iconName: 'ArkArrowIcon', className: 'absolute -bottom-5 xs:-bottom-8 xs:w-20 xs:hidden' })}</div>}
            </div>}
          
        </Container>


        // <Container className="max-w-full">
        //     <h2 className="flex gap-2 pt-10 pb-5 opacity-90 text-left text-neutral-900 text-5xl font-bold leading-[55px]">{getIcon({ iconList: homeIcons, iconName: 'TitleStarIcon' })}Apparels</h2>
        //     <div className="opacity-80 text-black text-[26px] font-extrabold leading-[35px] tracking-tight">Omnichannel Customer Experience Solutions for Apparel and Fashion</div>

        //     <div className="flex gap-5">
        //         <div className="h-9 my-8 px-[21px] bg-pink-50 rounded-[5px] border border-neutral-900 justify-start items-center gap-4 inline-flex">
        //             <div className="text-neutral-900 text-xs font-bold uppercase leading-tight">Customer Engagement</div>
        //         </div>
        //         <div className="h-9 my-8 px-[21px] bg-pink-50 rounded-[5px] border border-neutral-900 justify-start items-center gap-4 inline-flex">
        //             <div className="text-neutral-900 text-xs font-bold uppercase leading-tight">Operations</div>
        //         </div>
        //     </div>

        //     <div className="text-neutral-900 text-lg font-medium leading-10 mb-5">Personalized omnichannel product rendering – Store, Web, Mobile, Social & Marketplaces to create a rich, holistic Customer Experience. Manage orders seamlessly. Integrate with multiple offers and build loyalty.</div>

        //     <div className="flex gap-10">
        //         <Button variant="black">Book a Demo Today {getIcon({ iconList: homeIcons, iconName: 'ButtonArrowRight' })}</Button>
        //         <Button link="/home" variant="outline">Know More {getIcon({ iconList: homeIcons, iconName: 'ButtonArrowRightTop' })}</Button>
        //     </div>
        // </Container>


    )
}
