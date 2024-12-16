// import Container from "@/components/ui/container";
"use client"
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import commonIcons from "@/components/icons/common-icons";
import { getIcon } from "@/lib/get-icon";

import Breadcrumb from "@/components/common/breadcrumb";
import { usePathname } from "next/navigation";
import Button from "@/app/ui/button";
import { AUTH_TOKEN } from "@/lib/constants";
import Cookies from "js-cookie";


// import dynamic from "next/dynamic";
// import MobileHeader from "../mobile-header/MobileHeader";
interface Props {
  variant?: "default" | "modern";
}

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const Header: React.FC<Props> = ({ variant = "default" }) => {
  const pathname = usePathname()

  const [stickyNav, setStickyNav] = useState("shadow-none");
  const [mobileHeader, setMobileHeader] = useState(false);
  const menuRef = useRef(null);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      let addShadow;
      let top = window.scrollY;
      if (top > 50) {
        addShadow = "shadow-none";
      }
      else {
        addShadow = "shadow-none";
      }
      return setStickyNav(addShadow)
    }

  }
  const siteHeaderRef = useRef() as DivElementRef;

  
  return (
    <div className={`${pathname === "/sign-in" ? "hidden" : ""} fixed max-w-[1920px] w-full xs:top-[0px] top-[30px] z-50 lg:px-10 2xl:px-[75px]`}>
      <header id="siteHeader" ref={siteHeaderRef} className={`${stickyNav} bg-transparent `}>

        <div className='flex justify-between items-center xs:items-start md:hidden w-full bg-white/80 pb-1 xs:px-5'>
          <div className="p-4 xs:p-1">
            <Link href={'/'}>
              {getIcon({ iconList: commonIcons, iconName: 'HeaderLogo', className: "m-auto xs:w-[50px] xs:h-[40px]" })}
            </Link>
          </div>

          <div onClick={() => setMobileHeader(!mobileHeader)} className='flex flex-col w-12 h-12 justify-center items-center'>
            <span className={`${mobileHeader ? 'rotate-45 w-5' : 'w-8'} block h-0.5 bg-gray-600 transition-transform`}></span>
            <span className={`${mobileHeader ? 'hidden' : ''} block h-0.5 w-6 bg-gray-600 my-1`}></span>
            <span className={`${mobileHeader ? '-rotate-45 w-4 relative -top-[2px]' : ''} block h-0.5 w-5 bg-gray-600 transition-transform`}></span>
          </div>
        </div>

        <div className={`${mobileHeader ? "overflow-auto h-screen md:h-auto md:overflow-visible xs:pt-0" : 'hidden md:block md:h-auto'} ${pathname === "/contact-us" ? "bg-[#FAFAFA56]" : "bg-[#E9F0FC]" || pathname === "/about-us" ? "bg-[#FFFFFF] backdrop-blur-sm" : "bg-[#E9F0FC]"} rounded-[16px] mx-auto transition-all backdrop-blur-sm xs:backdrop-blur-0 xs:rounded-none xs:bg-white`}>
          <ul className="md:flex justify-between items-center text-base font-semibold px-10 xs:px-0 xs:mt-5 h-[100px]">

            <li onClick={() => setMobileHeader(!mobileHeader)} className="flex-none w-auto hidden md:flex md:justify-center">
              <Link href={'/'}>
                {getIcon({ iconList: commonIcons, iconName: 'HeaderLogo', className: "m-auto" })}
              </Link>
            </li>
            <li className="">
              <ul className="flex justify-end gap-10 xs:gap-3 md:items-center flex-col md:flex-row w-full xs:px-4">
                <li onClick={() => setMobileHeader(!mobileHeader)}>
                <Link href={"https://www.mytracky.com/"}>
                  <p>Tracky</p>
                  </Link>
                  {/* <Link href={'/solutions'} className={`${pathname === '/solutions' ? "text-[#00389B]" : "text-[#05070A]"}`}>Solutions</Link> */}
                </li>
                <li onClick={() => setMobileHeader(!mobileHeader)}>
                <Link href={"https://www.trackyprosleep.com/"}>
                  <p>Tracky Pro Sleep</p>
                  </Link>
                  {/* <Link prefetch={false} href={'/about-us'} className={`${pathname === '/about-us' ? "text-[#00389B]" : "text-[#05070A]"}`}>About us</Link> */}
                </li>
                <li onClick={() => setMobileHeader(!mobileHeader)}>
                <Link href={"https://www.trackyprocardio.com/"}>
                  <p>Tracky Pro Cardio</p>
                  </Link>
                  {/* <Link href={'/contact-us'} className={`${pathname === '/contact-us' ? "text-[#00389B]" : "text-[#05070A]"}`}>Contact us </Link> */}
                </li>
                <li onClick={() => setMobileHeader(!mobileHeader)}>
                <Link href={"https://www.mytracky.com/?category_id=trunu"}>
                  <p>Trunu</p>
                  </Link>
                  {/* <Link href={'/contact-us'} className={`${pathname === '/contact-us' ? "text-[#00389B]" : "text-[#05070A]"}`}>Contact us </Link> */}
                </li>
                <li onClick={() => setMobileHeader(!mobileHeader)}>
                <Link href={"https://vitalnxt.ai/"}>
                  <p>Vital.Nxt</p>
                  </Link>
                  {/* <Link href={'/blogs'} className={`${pathname === '/blogs' ? "text-[#00389B]" : "text-[#05070A]"}`}>Blogs</Link> */}
                </li>
                <li onClick={() => setMobileHeader(!mobileHeader)}>
                  <Link href={"#contactUS"} className={`${pathname === '/contact-us' ? "text-[#00389B]" : "text-[#05070A]"}`}>Contact us </Link>
                </li>

              </ul>
            </li>
            <li onClick={() => setMobileHeader(!mobileHeader)}>

              {/* {Cookies.get("auth_token") ?
                <Link href={"/logout"}><Button className="w-full xs:w-auto xs:min-w-[150px] xs:!mt-4 xs:mx-auto !mt-0 !h-[46px] xl:min-w-[200px] px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mt-4 focus:outline-none !bg-[#008F7F] !shadow-[-1px_3px_0px_0px_rgba(0,114,101,1)] !rounded-[50px] hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Sign out
                </Button></Link> :
                <Link href={"/sign-in"}><Button className="w-full xs:w-auto xs:min-w-[150px] xs:!mt-4 xs:mx-auto !mt-0 !h-[46px] xl:min-w-[200px] px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mt-4 focus:outline-none !bg-[#008F7F] !shadow-[-1px_3px_0px_0px_rgba(0,114,101,1)] !rounded-[50px] hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Sign in
                </Button></Link>
              } */}
            </li>

          </ul>
        </div>

      </header>

      {/* {pathname !== "/" && <Breadcrumb />} */}



    </div>
  );
};

export default Header;






