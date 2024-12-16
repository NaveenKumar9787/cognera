"use client"
import React from 'react';
import { GetServerSideProps } from 'next';
import { Disclosure as HeadlessDisclosure } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Container from '@/ui/container';
import { DownIcon } from '../icons/common-icons';


type DisclosureItem = {
  id: number;
  question: string;
  answer: string;
};



const plans = [
  {
    id: 1,
    question: "01 What is Vitalnxt.ai?",
    answer: "Vitalnxt.ai is an advanced health management platform that integrates data from various healthcare devices and wearables to provide comprehensive health monitoring and personalized insights. It leverages AI to analyze health data and offers real-time alerts, personalized recommendations, and seamless communication with healthcare providers."
  },
  {
    id: 2,
    question: "02 How does Vitalnxt.ai work with my healthcare devices?",
    answer: "Vitalnxt.ai connects with a wide range of healthcare devices such as blood pressure monitors, glucometers, and pulse oximeters. By syncing data from these devices, the platform provides a unified health dashboard where you can track and analyze all your health metrics in one place."
  },
  {
    id: 3,
    question: "03 Which wearable and healthcare device brands are compatible with Vitalnxt.ai?",
    answer: "Vitalnxt.ai supports integration with many popular brands, including but not limited to: Wearables: Fitbit, Apple Watch, Garmin, Samsung Healthcare Devices: Omron, Accu-Chek, Philips, Medtronic Check our website for a complete list of compatible devices."
  },
  {
    id: 4,
    question: "04 Can I share my health data with my doctor?",
    answer: "Yes, Vitalnxt.ai allows you to securely share your health data with your healthcare providers. This feature ensures your doctors have access to the most accurate and up-to-date information, facilitating better diagnosis and personalized care."
  },
  {
    id: 5,
    question: "05 Is my data secure with Vitalnxt.ai?",
    answer: "Absolutely. Vitalnxt.ai employs robust security measures to protect your health data. Your information is encrypted and stored securely, and it is shared only with your explicit consent. We prioritize your privacy and comply with all relevant data protection regulations."
  },
  {
    id: 6,
    question: "06 What if I experience issues with device integration?",
    answer: "If you encounter any problems with device integration, our support team is here to help. Visit our support page for troubleshooting guides, FAQs, and contact information to get assistance from our experts."
  },
  {
    id: 7,
    question: "07 Is there a cost associated with using Vitalnxt.ai?",
    answer: "Vitalnxt.ai offers various subscription plans to cater to different needs. Visit our pricing page to learn more about the available plans and choose the one that best suits your health monitoring requirements."
  }
];


export default function Faq() {

  return (
    <Container className="relative px-[40px] xs:px-5 2xl:px-[75px] max-w-full flex flex-col gap-6 justify-center items-start bg-[#FBFCFE] min-h-[800px] overflow-hidden">
      <div className="py-16 xs:py-2">
        <div className="m-auto px-6 pb-[70px] xs:px-0 xs:pb-[10px]">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-4/12 lg:p-0 p-7 xs:py-3 xs:px-0 ">
              <div className="2xl:text-[56px] text-[45px] xs:text-2xl font-[500] xs:text-center text-[#001C4D] xs:px-5 leading-[67px]">
                Frequently Asked
                Question
              </div>
              <p className='2xl:text-[24px] text-[21px] text-[#001C4D] mt-3 leading-[33px]'>
                Discover everything about VitalNXT.ai and find answers to the most frequently asked questions
              </p>

            </div>
            <div className="lg:w-7/12 order-2">
              <div className="w-[80%] mx-auto xs:w-full">
                {plans?.map((item) => (
                  <HeadlessDisclosure as="div" className="p-6 xs:px-0 border-b border-[#D3E3FF]" key={item.id} defaultOpen={item.id === 1}>
                    {({ open }) => (
                      <>
                        <HeadlessDisclosure.Button className="group flex w-full items-center text-left justify-between">
                          <span className="2xl:text-[24px] text-[20px] xs:pr-4 font-[400] xs:text-[16px] text-[#001C4D] ">
                            {item.question}
                          </span>
                          <DownIcon
                            className={`size-5 xs:!min-w-[15px] xs:!max-w-[15px] fill-white/60 group-hover:fill-white/50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                          />
                        </HeadlessDisclosure.Button>
                        <HeadlessDisclosure.Panel className="mt-2 2xl:text-[20px] text-[16px] leading-[32px] text-[#71819D]">
                          {item.answer}
                        </HeadlessDisclosure.Panel>
                      </>
                    )}
                  </HeadlessDisclosure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

