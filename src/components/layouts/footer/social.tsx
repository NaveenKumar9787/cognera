import { getIcon } from '@/lib/get-icon'
import React from 'react'
import footerIcons from '../../icons/footer-icons'

function Social() {
    const footerSocial = [
        { image: 'FacebookIcon', link: "https://www.facebook.com/Tracky4u" },
        { image: 'InstaIcon', link: "https://www.instagram.com/my_tracky/" },
        { image: 'LinkedinIcon', link: "https://www.linkedin.com/feed/" },
        { image: 'TwitterIcon', link: "https://twitter.com/mytracky" },
        // { image: 'PappIcon', link: "/" },
        { image: 'YoutubeIcon', link: "https://youtube.com" },
        
    ]

    return (
        <div className='flex xs:flex-wrap lg:justify-end'>
            {/* <div className='flex text-[15px] font-medium leading-none items-center mr-10 xs:mb-3'>Find us on</div> */}
            <ul className='flex items-center justify-center gap-10 xs:gap-3'>
                {footerSocial.map((res, index) =>
                    <li key={index + "SE"} className='w-8 flex items-center justify-center'>
                        <a href={res.link ? res.link : ""} target="_blank" aria-label={index + "Socials"} className='p-2'>{getIcon({ iconList: footerIcons, iconName: `${res?.image}` })} </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Social