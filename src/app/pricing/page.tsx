import Container from '@/ui/container'
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import TabBox from '@/components/pricing/tab-box'

export default function Pricing() {

    const plans = ["Monthaly", "Yearly"]
    const pricingList = [
        {
            title: 'Starter',
            price: '$999 / mo',
            features: [
                'Integrations', 'Authentication Widget', "SDK", "Streaming", "Documentation", "Data Generator", "Destinations(S3, MongoDB, Kafka)", "Debugger",
                "Integration Health", "Processes(FHIR, FIT Files, and more)", "Custom Destinations"
            ]
        },
        {
            title: 'Growth',
            price: '$999 / mo',
            features: [
                'Integrations', 'Authentication Widget', "SDK", "Streaming", "Documentation", "Data Generator", "Destinations(S3, MongoDB, Kafka)", "Debugger",
                "Integration Health", "Processes(FHIR, FIT Files, and more)", "Custom Destinations"
            ]
        },
        {
            title: 'Enterprise',
            price: '$999 / mo',
            features: [
                'Integrations', 'Authentication Widget', "SDK", "Streaming", "Documentation", "Data Generator", "Destinations(S3, MongoDB, Kafka)", "Debugger",
                "Integration Health", "Processes(FHIR, FIT Files, and more)", "Custom Destinations"
            ]
        },
    ]

    return (
        <Container className='pt-[12rem] xs:pt-2'>
            <div className='px-20 xs:px-5 py-14 pt-0 xs:pt-5 xs:pb-10'>

                <h1 className="text-center m-auto w-[70%] xl:w-[43%] xs:w-[100%] xs:leading-[50px] 2xl:text-[56px] xl:text-[45px] text-[40px] xs:text-[30px] font-medium leading-[78.40px] mb-5 xs:mt-10">We have got a pricing plan that’s perfect you business</h1>


                <TabGroup className="max-w-[1330px] m-auto">
                    <TabList className="flex w-fit m-auto justify-center border border-[#C9D5E3] rounded-3xl">
                        {plans?.map((plan: any, index: any) => (
                            <Tab className="text-lg data-[selected]:bg-[#008F7F] data-[selected]:data-[hover]:bg-[#008F7F] outline-none data-[selected]:text-white data-[hover]:bg-[#008F7F20] px-5 py-2 w-40 rounded-3xl">{plan}</Tab>
                        ))}
                    </TabList>

                    <TabPanels className="mt-10">
                        <TabPanel className={"flex gap-20 xs:block"}><TabBox props={pricingList} /></TabPanel>
                        <TabPanel className={"flex gap-20 xs:block"}><TabBox props={pricingList} /></TabPanel>
                    </TabPanels>
                </TabGroup>



            </div>


        </Container>
    )
}
