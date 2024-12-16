import React from 'react'

export default function SectionHeading({ title, subTitle, description, titleClass, className, despClass }: any) {
    return (
        <div className={`${className} bg-white pb-2 xs:p-0 w-full`}>
            <h2 className={`${titleClass ? titleClass : "pt-8 text-center text-[#424242]"} ${className} w-3/4 xs:w-full lg:w-full m-auto pb-1 xs:py-5 xs:px-0 lg:px-40 xl:px-52  text-5xl xs:text-2xl font-extrabold leading-[55px] xs:text-left`}><span dangerouslySetInnerHTML={{ __html: title }} />
                {subTitle && <div className="text-center text-stone-900 text-[21px] font-medium leading-7 tracking-wide mt-2 xs:text-left" dangerouslySetInnerHTML={{ __html: subTitle }}></div>}</h2>
            {description && <div className={`${despClass ? despClass : "text-[#6D1178]"} lg:px-52 text-center text-[21px] xs:text-base font-medium leading-7 tracking-wide mt-2 xs:text-left`}>{description}</div>}
        </div>
    )
}
