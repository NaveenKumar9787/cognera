"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import Container from '@/ui/container'
import Image from 'next/image';
import Link from 'next/link'
import data from '@/data/integration-brand.json'
import Button from '@/app/ui/button'
import commonIcons, { Bannercenter, Buttonarrow, PlusIcon, SearchIcon1 } from '../icons/common-icons'

import Input from '@/ui/input';
import IntegrationModal from '../modal/integration-modal';
import IntegrationBrands from './integration-brands';

interface iDefault {
  defaultValue: string | null
}

function IntegrationList({ homeConent, defaultValue }: any) {


  const staticElem = {
    buttonOne: "Book a Demo",
    buttonTwo: "Explore VitalNxtai",
    square: '#26CEC7',
    astrich: '#C84E89',
  };

  const joinProps = { staticElem }
  const [showModal, setShowModal] = useState(false);
  let [isRequestOpen, setIsRequestOpen] = useState(false)
  function closeRequestModal() {
    setIsRequestOpen(false);
  }
  function openRequestModal() {
    setIsRequestOpen(true);
  }

  let [isOpen, setIsOpen] = useState(false)


  console.log(data, 'integrationBrands');


  const [inputValue, setValue] = useState(defaultValue)

  const [profileData, setProfileData] = useState<Array<{ id: number; name: string; img: string; }>>([]);

  const handleSearch = () => {
    if (inputValue) return (inputValue);
    if (!inputValue) return "";
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  const handleKeyPress = (event: { key: any; }) => {
    if (event.key === "Enter") return handleSearch()
  }

  useEffect(() => {
    const filteredData = data.filter((item: any) => item.name.toLowerCase().includes(handleSearch().toLowerCase()));
    setProfileData(filteredData);
  }, [inputValue])


  console.log(profileData, "profileData");

  return (
    <div className=" bg-no-repeat max-w-full pt-[150px] xs:pt-4 pb-5 w-screen bg-[#E4EAF1]">
      <Container className="max-w-full px-10 xl:px-[75px] xs:px-5">
        <section className="">
          <div className="container xs:px-0 px-6 py-10 mx-auto xs:py-2 xs:pt-[3.5rem]">
            <h1 className="text-[40px] xl:leading-[78px] leading-[65px] xl:w-[80%] w-[85%] mx-auto text-center font-semibold text-[#001C4D] capitalize 2xl:text-[56px] xs:w-[100%] xs:text-[30px] xs:leading-[45px]">Seamlessly connect with all fitness and health wearables, sensors, and apps using a single API. </h1>
            <div className='flex gap-6 xs:flex-col items-center justify-center mt-6 mb-[40px]'>
              <Link href={"/contact-us"}>
                <Button className="w-full !h-[46px] sm:w-auto xl:min-w-[200px]  shadow-lg px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mt-4 focus:outline-none !bg-[#00389B] !rounded-[50px] hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Connect with us  <Buttonarrow />
                </Button>
              </Link>
              <Button onClick={() => setIsOpen(true)} className="w-full xs:w-auto !h-[46px] sm:w-auto xl:min-w-[200px]  shadow-lg px-6 py-2.5 text-sm font-medium tracking-wider !text-[#001C4D] transition-colors duration-300 transform md:w-auto md:mt-4 focus:outline-none !bg-[#fff] !rounded-[50px] hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                <PlusIcon />  Add your brand
              </Button>
            </div>

            <div className="relative mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row w-[50%] xs:w-[100%]">
              <Input name='search' placeholder='Search' className='w-full rounded-[16px] xl:!min-w-[495px] mx-auto mb-5'
                value={inputValue ?? ""} onChange={handleChange} onKeyDown={handleKeyPress}
              />
              <div className='absolute top-[12px] right-[20px] xs:top-0'>
                <SearchIcon1 />
              </div>
            </div>

            {inputValue ?

              <ul className="grid grid-cols-7 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 flex-wrap gap-10 xs:gap-5 mt-8 xl:mt-12 relative pb-[60px] pt-[40px] xs:py-0">
                {profileData?.map((item: any, index: number) => (
                  <li key={index} className={`${item?.link ? "border border-[#00389b]" : ""} bg-[#F2F5F8] rounded-xl h-[140px] xs:h-[80px] w-[195px] xs:w-[95px] flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl max-h-[180px]`}>
                    <Link href={item?.link} target='_blank'><Image src={`/images/integration/${item.img}`} alt={item?.name} width={156} height={150} className="h-fit m-auto w-fit p-8" /></Link>
                  </li>
                ))}
              </ul>
              :


              <IntegrationBrands setIsOpen={setIsOpen} />

            }

          </div>
        </section>


        <IntegrationModal setIsOpen={setIsOpen} isOpen={isOpen} />

      </Container>



    </div>
  )
}

export default IntegrationList
