"use client"
import Button from "@/app/ui/button";
import { getIcon } from "@/lib/get-icon";
import commonIcons from "../icons/common-icons";

export default function TabBox({ props }: any) {

    console.log(props, "propsprops");
    return (
        <>
        {props?.map((item:any) => (
                <div className="border border-[#007265] rounded-[10px] p-10 xs:p-4 xs:my-4">
                    <div className="font-medium text-xl text-[#008F7F]">{item?.title}</div>
                    <p className="text-sm font-light mt-5 !mb-8">Launch your product with unlimited integrations for up to 500 users.</p>
                    <div className="text-5xl font-medium mb-10 blur-md">$699 / mo</div>
                    <Button variant="outline" className="w-full h-auto py-3 !font-normal shadow-[#007265] !border-[#008F7F] !text-[#008F7F] mb-8">Get Started</Button>
                    <div className="mt-8 mb-3 border-t border-[#008F7F] pt-10 xs:pt-3 text-[#001C4D] text-lg">What you will get</div>
                    <ul className="flex flex-col gap-1">
                           {item?.features?.map((item: any, index: number) => (
                                <li className="text-[#001C4D95] xs:text-[14px] text-base flex items-center gap-1">{getIcon({ iconList: commonIcons, iconName: "DickIcon" })} {item}</li>
                            ))}
                                                {/* <li>Authentication Widget</li>
                <li>SDK</li>
                <li>Streaming</li>
                <li>Documentation</li>
                <li>Data Generator</li>
                <li>Destinations (S3, MongoDB, Kafka)</li>
                <li>Debugger</li>
                <li>Integration Health</li>
                <li>Processes (FHIR, FIT Files, and more)</li>
                <li>Custom Destinations</li> */}
                    </ul>
        </div>
            ))}
                </>
    )
}