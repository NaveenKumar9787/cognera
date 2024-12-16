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
import RecaptchaForm from '../forms/recaptcha-form'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation';
import Container from '@/ui/container'

const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is not valid"),
    phone: yup.number().required("Phone is required").typeError("Phone must be a number"),
    subject: yup.string(),
    message: yup.string()
})

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(contactSchema) });
    const { mutate: contact, isIdle: isLoading, } = useContactMutation();
    const recaptchaRef = useRef<HTMLFormElement>(null);
    const router = useRouter();


    const onSubmit = (data: any) => {
        // const token = captchaRef.current.getValue();

        console.log(data);
        contact({ ...data, phone: data?.phone.toString(), token: "" }, {
            onSuccess: (d) => {
                toast.success(d?.data?.message);
                //toast.success("Request has been sent successfully");
                router.push("/");
                reset();
                // setToken("")
                setEnabled(true)
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

    const [enabled, setEnabled] = useState(true);
    const [token, setToken] = useState("")

    console.log(enabled, "enabled");


    function captchaChanged(value: any) {
        setEnabled(false)
        setToken(value)
        console.log('Captcha value:', value);
        // verifyCaptcha(value)
    }


    return (
        <Container className='w-8/12 lg:w-[82%] xs:w-full mb-16 mt-12 xs:mt-5 p-12 xs:p-5 bg-white  relative rounded-lg shadow'>

            <div className='flex flex-col gap-5'>
                <h1 className="w-full xs:w-auto text-2xl font-semibold leading-none tracking-normal">Send us a message</h1>
            </div>

            <div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                        <Input placeholder='Name *' className='w-full bg-[#F6F6F6]' {...register("name")} errorKey={errors.name?.message} />
                    </div>
                    <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                        <Input placeholder='Email *' className='w-full bg-[#F6F6F6]' {...register("email")} errorKey={errors.email?.message} />
                    </div>
                    <div className='flex gap-5 my-6  xs:my-4'>
                        <Input placeholder='Phone Number' className='w-full bg-[#F6F6F6] ' {...register("phone")} maxLength={10} pattern="[1-9]{1}[0-9]{9}" errorKey={errors.phone?.message} />
                    </div>
                    <div className='flex gap-5 my-6  xs:my-4'>
                        <Input placeholder='Subject *' className='w-full bg-[#F6F6F6] ' {...register("subject")} errorKey={errors.subject?.message} />
                    </div>
                    <div className='flex gap-5 my-6  xs:my-4'>
                        {/* <Input placeholder='Subject *' className='w-full bg-[#F6F6F6] rounded' {...register("subject")} errorKey={errors.subject?.message} /> */}
                        <textarea
                            placeholder='Write your message here...'
                            className='w-full h-28 bg-[#F6F6F6] text-sm px-5 py-3 border border-[#E4EAF1] rounded-sm E4EAF1'
                            {...register("message")}
                        >
                        </textarea>
                        {/* {errors.subject?.message && <p className="text-red-500">{errors.subject?.message}</p>} */}

                    </div>
                    {/* 
                    <div className='flex justify-center my-8'>
                        <RecaptchaForm onChange={captchaChanged} ref={recaptchaRef} />
                    </div> */}

                    <div className='text-right w-auto'>
                        <Button disabled={false} className='w-full ml-auto !px-20 !rounded-[10px]' type="submit">Submit</Button>
                    </div>
                </form>
            </div >

        </Container >
    )
}



