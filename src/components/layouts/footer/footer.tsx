"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Social from './social'
import dynamic from 'next/dynamic'
import { getIcon } from '@/lib/get-icon'
import commonIcons, { Buttonarrow } from '../../icons/common-icons'
import footerIcons from '../../icons/footer-icons'
import Container from '@/ui/container'
import Input from '@/ui/input'
import { usePathname } from 'next/navigation'
import NewsletterForm from '@/components/forms/newsletter-form'

// import Cookies from '@/components/common/Cookies'
// import { string } from 'yup'
// const Talk = dynamic(() => import('./talk'))



function Footer() {

  const pathname = usePathname()

  const [containerLoading, setContainerLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setContainerLoading(true)
    }, 30000)
  }, [])

  let footer = [
    {
      title: 'Our Product',
      items: [
        { title: "Tracky", link: "https://www.mytracky.com/" },
        { title: "Tracky Pro Sleep", link: "https://www.trackyprosleep.com/" },
        { title: "Tracky Pro Cardio", link: "https://www.trackyprocardio.com/" },
        { title: "Trunu", link: "https://www.mytracky.com/?category_id=trunu" },
        { title: "Vital.Nxt", link: " https://vitalnxt.ai/" },
        // { title: "About us", link: "/about-us" },
        // { title: "Contact us", link: "/contact-us" },


      ]
    },
    // {
    //   title: 'Our Terms',
    //   items: [
    //     // { title: "Privacy Policy", link: "/cms/privacy-policy" },
    //     { title: "Terms & Conditions", link: "" },
    //   ]
    // },


  ]

  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    localStorage.cookie_accept ? setCookie(false) : setCookie(true);
  }, [])


  let [isRequestOpen, setIsRequestOpen] = useState(true)
  function closeRequestModal() {
    setIsRequestOpen(false);
  }
  function openRequestModal() {
    setIsRequestOpen(true);
  }


  return (
    <div className={`${pathname === "/sign-in" ? "hidden" : ""} max-w-full px-0 relative bg-[#FCE7D8]`}>
      <Container className='max-w-full px-10 xl:px-[75px] xs:px-5 relative pt-14 xs:pt-5'>
        {/* <Talk /> */}
            {/* {getIcon({ iconList: commonIcons, iconName: 'HeaderLogo', className: 'xs:w-40' })} */}

        <div className='relative font-secondary text-sm text-[#5c5252] font-medium'>

          <div className='flex xs:flex-col justify-between relative'>

            {/* <Link href="/" > */}
            {/* {getIcon({ iconList: commonIcons, iconName: 'HeaderLogo', className: "m-auto" })} */}
          <div className='flex flex-col gap-[25px] w-[35%] xs:w-full'>
          <Link href="/" >
            {getIcon({ iconList: commonIcons, iconName: 'HeaderLogo', className: 'xs:w-40' })}
            </Link>
            <div className='2xl:text-[15px] text-[14px] xs:text-sm font-[400] text-[#000] w-full'>
                <ul>
                  At Drstore Healthcare Services India Pvt Ltd, our mission is to revolutionize preventive healthcare by providing innovative solutions that empower individuals to take proactive control of their health. We are dedicated to offering high-quality products and services that cater to the diverse needs of our customers, ensuring convenience, reliability, and peace of mind.
                </ul>
            </div>
           

            </div>
            {footer.map((main, i) =>
              <div key={i + " footer_links"} className='flex-nowrap mb-5 xs:mt-3'>
                <div className='2xl:text-[24px] text-[22px] xs:text-sm font-[500] text-[#001C4D] mb-6 xs:mb-3'>{main.title}</div>
                <ul>
                  {
                    main.items.map((v, index) =>
                      <li key={index + "footer_link_navigation"} className='flex items-center gap-3 mb-0'>
                        {/* {getIcon({ iconList: footerIcons, iconName: 'MenuIcon', className: 'xs:w-3 xs:h-3' })} */}
                        <Link href={v?.link} className='2xl:text-[20px] text-[16px] xs:text-sm font-[300] text-[#2B1818] px-0 xs:py-1 py-3'>{v?.title}</Link>
                      </li>

                    )
                  }

                </ul>

              </div>
            )}
             <div className='2xl:text-[15px] text-[14px] xs:text-sm font-[400] text-[#000] flex flex-col gap-[10px] w-[35%] xs:w-full'>
            <span className='font-[600] text-[18px] pb-[20px]'>Our Contact Information</span>
            <ul className='flex items-center gap-[10px]'>
            {getIcon({ iconList: commonIcons, iconName: 'Message', className: 'xs:w-40' })}
              info@mytracky.com</ul>
            <ul className='flex items-center gap-[10px]'>
            {getIcon({ iconList: commonIcons, iconName: 'Phone', className: 'xs:w-40' })}
              +91 8976023799</ul>
            <ul className='flex items-center gap-[10px]'>
            {getIcon({ iconList: commonIcons, iconName: 'Location', className: 'xs:w-40' })}
              SA 44, 2nd Floor Lake City Mall, Ghod Bunder Road, Kapurbawdi, Thane, Maharashtra, INDIA 400607</ul>
            </div>
            {/* <NewsletterForm /> */}
          </div>
        </div>
      </Container>

      <Container className='max-w-full xl:px-[75px] xs:px-5 mt-16'>
        <div className='lg:flex justify-between lg:flex-wrap mt-3 py-5 xs:px-5 text-[15px] border-t border-[#E4E4E7] px-10'>
        {/* <div className=' w-full flex justify-between '>  */}
          <span className='text-[#001C4D] text-[16px] font-[400]'> Copyright © DrStore 2023.</span>
          <div className='flex xs:flex-wrap xs:justify-start my:5 gap-2'>
            <Social />
          </div>
          </div>
        {/* </div> */}
      </Container>







    </div>
  )
}

export default Footer