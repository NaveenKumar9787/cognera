import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'

export default function Integrations({props}:any) {
    
  return (
    <div className="col-span-3 relative">
    <SectionHeading title={props?.title} description={props?.description}  /> 
    <ol className='flex xs:flex-wrap justify-center'>
        {props?.logos.map((item:any, index:any) => (
            <li key={index + 'indegarations'} className='xs:w-2/4'><Image src={`/images/${item?.list}`} width={350} height={250} alt={item?.alt} className='xs:w-full' /></li>
        ))}
    </ol>
</div>
  )
}
