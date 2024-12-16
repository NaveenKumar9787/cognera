"use client"
import React, { useState } from 'react'
import Container from '@/ui/container'
import Image from 'next/image';

function WorkProcess({ homeConent }: any) {


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


  return (
    <div className=" bg-no-repeat max-w-full  xs:pt-4 pb-5 w-screen bg-[#E2F3E3]">
      {/* <Container className="max-w-full px-10 xl:px-[75px] xs:px-5"> */}
        <section className="">
          <div className="container xs:px-0 py-10 mx-auto xs:py-2 px-1">
            <h1 className="text-[30px] text-center font-[500] text-[#001C4D] 2xl:text-[36px] xs:text-[30px]">Virtual lab: Book cardio & sleep diagnostics at home</h1>

            <p className="text-[22px] text-center font-[700] text-[#001C4D] lg:text-[22px] 2xl:w-[47%] w-[60%] mx-auto xs:w-[100%] pb-[25px] xs:pb-[25%]">How Does It Work?</p>


            <div className="flex timeline relative justify-between px-[15px] items-start xs:flex xs:items-center xs:flex-col mt-8 mb-[35px] xl:gap-2 lg:gap-2 md:gap-0">
              {/* <div className="timeline relative"> */}
              <div className="timeline-item xs:pb-[40%]">
                  <div className="flex flex-col w-[230px] xl:w-[230px] lg:w-[200px] md:w-[140px]">
                      <div className=" date-label-left relative z-10">
                        <Image src={'/images/works/work1.svg'} alt="CRM logo" width={208} height={199} className="w-[230px] h-[230px] xl:w-[230px] xl:h-[230px] lg:w-[200px] lg:h-[200px] md:w-[140px] md:h-[140px]" />
                      </div>
                    <div className="mt-0 md:mt-0 flex items-center md:px-[5px] timeline-full-line1 relative">
                      <div className="event event-description-right ltr:float-left xs:pl-0 rtl:float-right ltr:text-left rtl:text-right">
                        <h5 className="2xl:text-[18px] text-[18px] xs:text-[15px] text-[#001C4D] mb-1 font-[500] xs:flex xs:justify-center">Personalized QR code</h5>
                        <p className="timeline-subtitle xs:text-[14px] text-[15px] mt-1 mb-0 text-[#6D7E9A] xs:flex xs:justify-center xs:text-center">Each doctor gets a unique QR code that links directly to their personalized lab portal.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-item xs:pb-[40%]">
                  <div className="flex flex-col w-[230px] xl:w-[230px] lg:w-[200px] md:w-[140px]">
                      <div className="date-label-left relative z-10">
                        <Image src={'/images/works/work2.svg'} alt="CRM logo" width={208} height={199} className=" w-[230px] h-[230px] xl:w-[230px] xl:h-[230px] lg:w-[200px] lg:h-[200px] md:w-[140px] md:h-[140px] z-50" />
                      </div>
                    <div className="mt-0 md:mt-0 flex items-center md:px-[5px] timeline-full-line relative">
                      <div className="event event-description-right ltr:float-left xs:pl-0 rtl:float-right ltr:text-left rtl:text-right">
                        <h5 className="2xl:text-[18px] text-[18px] xs:text-[15px] text-[#001C4D] mb-1 font-[500] xs:flex xs:justify-center">Patients Scan the QR Code</h5>
                        <p className="timeline-subtitle xs:text-[14px] text-[15px] mt-1 mb-0 text-[#6D7E9A] xs:flex xs:justify-center xs:text-center">Patients use their smartphones or any QR code scanner to access the virtual lab portal.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item xs:pb-[40%]">
                  <div className="flex flex-col w-[230px] xl:w-[230px] lg:w-[200px] md:w-[140px]">
                      <div className="date-label-left relative z-10">
                        <Image src={'/images/works/work3.svg'} alt="CRM logo" width={208} height={199} className=" w-[230px] h-[230px] xl:w-[230px] xl:h-[230px] lg:w-[200px] lg:h-[200px] md:w-[140px] md:h-[140px]" />
                      </div>
                    <div className="mt-0 md:mt-0 flex items-center md:px-[5px] timeline-full-line relative">
                      <div className="event event-description-right ltr:float-left xs:pl-0 rtl:float-right ltr:text-left rtl:text-right">
                        <h5 className="2xl:text-[18px] text-[18px] xs:text-[15px] text-[#001C4D] mb-1 font-[500] xs:flex xs:justify-center">Patients Select the Tests</h5>
                        <p className="timeline-subtitle xs:text-[14px] text-[15px] mt-1 mb-0 text-[#6D7E9A] xs:flex xs:justify-center xs:text-center">Patients browse through a comprehensive list of available tests and select the ones they need based on their health requirements or doctor's advice. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-item xs:pb-[40%]">
                  <div className="flex flex-col w-[230px] xl:w-[230px] lg:w-[200px] md:w-[140px]">
                      <div className="date-label-left relative z-10">
                        <Image src={'/images/works/work4.svg'} alt="CRM logo" width={208} height={199} className=" w-[230px] h-[230px] xl:w-[230px] xl:h-[230px] lg:w-[200px] lg:h-[200px] md:w-[140px] md:h-[140px]" />
                      </div>
                    <div className="mt-0 md:mt-0 flex items-center md:px-[5px] timeline-full-line relative">
                      <div className="event event-description-right ltr:float-left xs:pl-0 rtl:float-right ltr:text-left rtl:text-right">
                        <h5 className="2xl:text-[18px] text-[18px] xs:text-[15px] text-[#001C4D] mb-1 font-[500] xs:flex xs:justify-center">Dr Store Handles the Rest</h5>
                        <p className="timeline-subtitle xs:text-[14px] text-[15px] mt-1 mb-0 text-[#6D7E9A] xs:flex xs:justify-center xs:text-center">Once the patients have selected their tests, our expert team takes over. They manage the  home visits and all subsequent procedures, ensuring a smooth and hassle-free process for both patients and doctors.</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="timeline-item xs:pb-[10%]">
                  <div className="flex flex-col w-[230px] xl:w-[230px] lg:w-[200px] md:w-[140px]">
                      <div className="date-label-left1 relative z-10">
                        <Image src={'/images/works/work5.svg'} alt="CRM logo" width={208} height={199} className=" w-[230px] h-[230px] xl:w-[230px] xl:h-[230px] lg:w-[200px] lg:h-[200px] md:w-[140px] md:h-[140px]" />
                      </div>
                    <div className="mt-0 md:mt-0 flex items-center md:px-[5px] timeline-full-line relative">
                      <div className="event event-description-right ltr:float-left xs:pl-0 rtl:float-right ltr:text-left rtl:text-right">
                        <h5 className="2xl:text-[18px] text-[18px] xs:text-[15px] text-[#001C4D] mb-1 font-[500] xs:flex xs:justify-center">Doctors Receive Results</h5>
                        <p className="timeline-subtitle xs:text-[14px] text-[15px] mt-1 mb-0 text-[#6D7E9A] xs:flex xs:justify-center xs:text-center">Once the tests are completed, the results are sent directly to the doctor's portal. This ensures quick and efficient diagnosis and treatment planning.</p>
                      </div>
                    </div>
                  </div>
                </div>




              {/* </div> */}
            </div>

            <p className="text-[18px] text-center font-[400] text-[#001C4D] lg:text-[20px] mx-auto">This streamlined process ensures that patients can easily select the necessary tests, while our expert team handles the rest, making it convenient for both patients and doctors.</p>


          </div>
        </section>




      {/* </Container> */}



    </div>
  )
}

export default WorkProcess
