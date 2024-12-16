"use client"
import { getIcon } from '@/lib/get-icon'
import Button from '@/app/ui/button'
import Container from '@/ui/container'
import React from 'react'
import homeIcons from '../icons/home-icons'
import { useParallax } from 'react-scroll-parallax'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'
import { Buttonarrow, Wearables } from '../icons/common-icons'
import Image from 'next/image'

export default function Simplifies({ title }: any) {


  return (
    // <Container className="relative px-[40px] xs:px-5 2xl:px-[75px] max-w-full flex flex-col gap-6 justify-center items-start bg-[#FFE7CA] 2xl:min-h-[1000px] md:min-h-[600px] overflow-hidden">
      <div>
      <Image src={'/images/Monitor.svg'} alt="simplifies" width={916} height={966} className="w-full pr-0" />
      </div>
    // </Container>
  )
}
