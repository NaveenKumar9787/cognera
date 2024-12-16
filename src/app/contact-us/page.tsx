
import ContactForm from '@/components/forms/contact-form'
import Faq from '@/components/home/faq'
import contactIcons from '@/components/icons/contact-icons'
import { getIcon } from '@/lib/get-icon'
import Link from 'next/link'
import React from 'react'

function ContactUs() {
  return (

    <div>

      <div className='flex xs:flex-col min-h-96 mt-44 xs:mt-10'>

        <div className='w-2/4 xs:w-full'>

          <div className='flex items-center h-full'>

            <div className='pl-[75px] xs:pl-5 my-12 xs:my-5'>
              <div className="2xl:text-[56px] xl:text-[45px] text-[40px] xs:text-[30px] font-medium leading-[67.20px]">Contact us</div>
              <div className="w-[82%] text-[#001C4D] text-xl font-normal  my-[14px] leading-7">Have a question for us or feedback? Please fill out the form to reach us.</div>

              <div className='my-14 xs:mt-8 xs:mb-0'>
                <div className="text-3xl xs:text-2xl font-medium leading-9 mb-9">Our Contact Information</div>
                <ul className='leading-7'>
                  <li className="flex gap-4 text-teal-600 text-xl font-normal underline mb-5"><Link className='flex items-center gap-5 text-teal-600' href={"mailto:support@vitalnxt.com"}>{getIcon({ iconList: contactIcons, iconName: "MailIcon" })} support@vitalnxt.com</Link></li>
                  <li className="flex gap-4 text-xl font-normal mb-5">{getIcon({ iconList: contactIcons, iconName: "PhoneIcon" })} +91 8828443100</li>
                  <li className="flex gap-4 text-xl font-normal mb-5 xs:mb-0">{getIcon({ iconList: contactIcons, iconName: "PlaceIcon", className: "w-[62px]" })} No. 602 Unnati, 15th Cross, Outer Ring Road, 24th Main Road, 1st Phase, J. P. Nagar, Bengaluru – 560078</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
        <div className='w-2/4 xs:w-full px-16 xs:px-5'>
          <ContactForm />
        </div>
      </div>

      <div className='w-full bg-white'>

        <Faq />

      </div>


    </div>

  )
}

export default ContactUs
