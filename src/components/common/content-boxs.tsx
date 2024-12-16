"use client"
import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import ContentBoxText from '../home/content-box-text'
import ContentBoxImage from '../home/content-box-image'
import { getIcon } from '@/lib/get-icon'
import solutionIcons from '../icons/solution-icons'

function ContentBoxs({ pageConent }: any) {

  return (
    <>
        <div className="grid xs:grid-cols-1 lg:grid-cols-5 py-0 xs:py-0 gap-0">

          <div className="col-span-2 relative">
            <ContentBoxImage props={pageConent} freeH={true} />
            <h5 className="absolute w-full top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10 px-20 xs:p-10 text-center text-orange-100 text-5xl font-bold leading-[60px]">{pageConent?.title}</h5>
          </div>

          <div className='col-span-3'>
            <div className='grid grid-cols-2 xs:grid-cols-1 p-0 h-full'>
              {pageConent?.lists?.map((list: any, index: number) => (
                <div key={index + "Izoware features"} className='flex flex-col justify-center items-center border p-8 first:border-t-0 [&>*:nth-child(2)]:border-t-0'>
                  {getIcon({ iconList: solutionIcons, iconName: `${list?.icon}`, className: 'h-16 mb-10' })}
                  {list.title && <h5 className="text-center text-black text-2xl font-bold pb-4">{list?.title}</h5>}
                  <p className="text-center text-black text-xl font-medium lg:min-h-20 2xl:min-h-min leading-8" dangerouslySetInnerHTML={{__html:list?.list}} />
                </div>
              ))}
            </div>
          </div>

        </div>
    </>
  )
}

export default ContentBoxs

