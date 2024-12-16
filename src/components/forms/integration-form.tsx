"use client"
import Button from '@/app/ui/button'
import Input from '@/ui/input'
import Select from '@/ui/select-dropdown'
import React, { useEffect, useRef, useState } from 'react'
import homeIcons from '../icons/home-icons'
import { getIcon } from '@/lib/get-icon'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContactMutation } from '@/framework/rest/contact/contact.query'
import RecaptchaForm from './recaptcha-form'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation';
import Container from '@/ui/container'
import { useIntegrationMutation } from '@/framework/rest/integration/integration.query'





const integrationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is not valid"),
    company_name: yup.string().required("Company name is required"),
})

export default function IntegrationForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(integrationSchema) });
    const { mutate: integration, isIdle: isLoading, } = useIntegrationMutation();
    const recaptchaRef = useRef<HTMLFormElement>(null);
    const router = useRouter();


    const onSubmit = (data: any) => {
        // const token = captchaRef.current.getValue();

        console.log(data);
        integration({ ...data, token: "token" }, {
            onSuccess: (d) => {
                toast.success(d?.data?.message);
               // toast.success("Request has been sent successfully");
                router.push("/");
                reset();
                // setToken("")
               // setEnabled(true)
                //recaptchaRef.current.reset();
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }
            },
            onError: (error: any) => {
                toast.success(error?.response?.data?.message);
            }
        });
    };

    const options = [
        { type: "Product Demo" }, { type: "General Enquiry" }, { type: "Customer Support" }, { type: "Feedback" }
    ]

    // const [enabled, setEnabled] = useState(true);
    // const [token, setToken] = useState("")

    // console.log(enabled, "enabled");


    // function captchaChanged(value: any) {
    //     setEnabled(false)
    //     setToken(value)
    //     console.log('Captcha value:', value);
    //     // verifyCaptcha(value)
    // }

    return (
        <Container className='w-full bg-white relative rounded-lg shadow'>

            <div className='flex flex-col gap-5'>
                <h1 className="w-full xs:w-auto text-2xl xs:text-xl font-semibold leading-none tracking-normal">Submit your integaration</h1>
            </div>

            <div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                        <Input placeholder='Company Name *' className='w-full bg-[#F6F6F6]' {...register("name")} errorKey={errors.name?.message} />
                    </div>
                    <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                        <Input placeholder='Email *' className='w-full bg-[#F6F6F6]' {...register("email")} errorKey={errors.email?.message} />
                    </div>
                    <div className='flex gap-5 my-6  xs:my-4'>
                        <Input placeholder='Integration Name' className='w-full bg-[#F6F6F6] ' {...register("company_name")} errorKey={errors.company_name?.message} />
                    </div>
                    

                    {/* 
                    <div className='flex justify-center my-8'>
                        <RecaptchaForm onChange={captchaChanged} ref={recaptchaRef} />
                    </div> */}

                    <div className='text-right w-auto'>
                        <Button disabled={false} className='w-full ml-auto !px-20 !font-normal h-11' type="submit">Send a request</Button>
                    </div>
                </form>
            </div >

        </Container >
    )
}



