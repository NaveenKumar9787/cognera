"use client"
import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import ContentBoxText from '../home/content-box-text'
import ContentBoxImage from '../home/content-box-image'

export default function ContentBox({props, order,freeH, pageConent,last}:any) {
    return (
        <Parallax className="sticky top-12 xs:py-0 bg-white">
            <div className={`bg-white grid xs:grid-cols-1 lg:grid-cols-2 py-10 xs:py-5 gap-5 ${last === true ? "" : "border-b" }`} >
                <div className={`order-${order} col-span-1 lg:pr-0 xl:pr-10 xs:pr-0`}>
                    <ContentBoxText props={props} />
                </div>
                <div className="col-span-1">
                    <ContentBoxImage props={props} order={order} />
                </div>
            </div>
        </Parallax>
    )
}
