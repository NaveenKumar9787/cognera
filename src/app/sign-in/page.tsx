import SigninForm from '@/components/forms/singin-form'
import Container from '@/ui/container'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SignUp() {

  return (
    <Container className='max-w-full flex xs:flex-col'>

      <div className='relative w-2/4 xs:w-full bg-[#00389B] flex flex-col justify-center xs:justify-between items-center h-screen xs:pt-5'>
        <Link className="xs:flex xs:justify-center" href="/"><Image src={"/logo-big.png"} alt='Logo' width={580} height={145} className='absolute xs:static xs:translate-x-0 xs:translate-y-0 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 xs:w-2/4 lg:w-[64%]' /></Link>
        <Image src={"/puls-img.png"} alt='Logo' width={680} height={149} className='mt-auto mr-auto xs:m-0 pb-12 xs:pb-3 lg:w-[64%] xs:w-3/4' />
      </div>

      <div className='w-2/4 bg-white xs:w-full flex items-center xs:absolute xs:top-2/4 xs:-translate-y-2/4'>
            <SigninForm />
      </div>

    </Container>


  )
}
