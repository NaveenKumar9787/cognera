"use client"
import Container from '@/ui/container'
import React from 'react'
import Image from 'next/image'
import useYscroll from '../common/functions';

export default function ContentBoxImage({props,order,freeH}:any) {
  const {shown} = useYscroll({})
  const boxBg = props?.boxBg;  
  return (<>
  {shown &&
        <Container className="max-w-full lg:h-full">
        <div className={`${order === 2 ? "before:right-0" : "before:left-0"} relative ${freeH ? "h-full p-0" : "lg:h-[530px] xl:h-[620px] before:bg-[#ffffff] p-10 xs:p-2.5"} before:bg-[${boxBg}] before:absolute before:top-0 before:w-2/4 before:h-full before:z-0`} style={{backgroundColor:boxBg }}>
        <Image loading='lazy' className={`${freeH ? "border-0" : "border"} relative z-10 w-full lg:h-full lg:object-cover border-[#686868]`} src={`/images/${props?.image}`} alt={props?.alt} width={750} height={550} />
        </div>
      </Container>
}
      </>
    )
}
