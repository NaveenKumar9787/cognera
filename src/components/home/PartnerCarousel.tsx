import Image from 'next/image'
import React from 'react'
export default function PatnersScroll({  }: any) {

 const imagesList = [
    {id:'001', image:'client-1.webp', alt:'VitalNxtai Clients'},
    {id:'002', image:'client-2.webp', alt:'VitalNxtai Clients'},
    {id:'003', image:'client-3.webp', alt:'VitalNxtai Clients'},
    {id:'004', image:'client-4.webp', alt:'VitalNxtai Clients'},
    {id:'005', image:'client-5.webp', alt:'VitalNxtai Clients'},
    {id:'006', image:'client-6.webp', alt:'VitalNxtai Clients'},
    {id:'007', image:'client-7.webp', alt:'VitalNxtai Clients'},
    {id:'008', image:'client-8.webp', alt:'VitalNxtai Clients'},
    {id:'009', image:'client-9.webp', alt:'VitalNxtai Clients'},
    {id:'010', image:'client-10.webp', alt:'VitalNxtai Clients'},
    {id:'011', image:'client-11.webp', alt:'VitalNxtai Clients'},
    {id:'012', image:'client-12.webp', alt:'VitalNxtai Clients'},
    {id:'013', image:'client-13.webp', alt:'VitalNxtai Clients'},
    {id:'014', image:'client-14.webp', alt:'VitalNxtai Clients'},
    {id:'015', image:'client-15.webp', alt:'VitalNxtai Clients'},
    {id:'016', image:'client-16.webp', alt:'VitalNxtai Clients'},
    {id:'017', image:'client-17.webp', alt:'VitalNxtai Clients'},
 ]
 
    return (
        <div className="w-full inline-flex flex-nowrap py-2 overflow-hidden">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 xs:[&_li]:mx-0 [&_img]:max-w-none">
                {imagesList.map((image: any, index:any) => (
                    <li key={index + image?.id + 'partners_lists'}><Image src={`/images/home/partners/${image?.image}`} alt={image.alt} width={170} height={75} className='xs:w-28 w-auto' /></li>
                ))}
            </ul>
            {/* <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {imagesList.map((image: any, i:any) => (
                    <li><Image key={image?.id + 'partners_list'} src={`/images/home/partners/${image?.image}`} alt={image.alt} width={170} height={75}  /></li>
                ))}
            </ul> */}
        </div>




    )
}
