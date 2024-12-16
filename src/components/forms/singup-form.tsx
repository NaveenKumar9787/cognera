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
import Link from 'next/link'
import commonIcons from '../icons/common-icons'
import SigninForm from './singin-form'
import { useRegisterMutation } from '@/framework/rest/register/register.query'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is not valid"),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone is required"),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirm_password: yup.string().nullable().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
})

export default function SignupForm({ }: any) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(contactSchema) });
    const { mutate: contact, isIdle: isLoading, } = useRegisterMutation();
    const recaptchaRef = useRef<HTMLFormElement>(null);
    const router = useRouter();


    const onSubmit = (data: any) => {
        // const token = captchaRef.current.getValue();

        console.log(data);
        contact({ ...data, phone: data?.phone.toString(), token: token }, {
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
                toast.error(error?.response?.data?.message);
            }
        });
    };


    const [enabled, setEnabled] = useState(true);
    const [token, setToken] = useState("")



    const [show, setShow] = useState(false)
    const handleShow = (e: any) => {
        setShow(true)
    }

    return (
        <>
            {!show ?
                <Container className='w-8/12 lg:w-full xs:w-full px-44 xs:p-5 xs:m-5 lg:px-36 bg-white relative rounded-lg xs:h-[calc(100vh-20%)] xs:overflow-auto'>

                    <div className='w-full h-full'>
                        <div className='flex flex-col gap-5'>
                            <h1 className="w-full xs:w-auto  text-2xl xs:text-xl font-semibold leading-none tracking-normal">Sign Up / Register</h1>
                        </div>

                        <div className='mb-14 xs:mb-5'>
                            <form className="" onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                                    <Input placeholder='Name *' className='w-full bg-[#F6F6F6]' {...register("name")} errorKey={errors.name?.message} />
                                </div>
                                <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                                    <Input placeholder='Email *' className='w-full bg-[#F6F6F6]' {...register("email")} errorKey={errors.email?.message} />
                                </div>
                                <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                                    <Input placeholder='Phone *' maxLength={10} pattern="[1-9]{1}[0-9]{9}" className='w-full bg-[#F6F6F6]' {...register("phone")} errorKey={errors.phone?.message} />
                                </div>
                                <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                                    <Input placeholder='Password *' type="password" className='w-full bg-[#F6F6F6]' {...register("password")} errorKey={errors.password?.message} />
                                    {/* {errors.password?.message && <p className="text-red-500">{errors.password?.message}adsa</p>} */}
                                </div>
                                <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                                    <Input placeholder='Confirm Password *' type="confirm_password" {...register("confirm_password")}  className='w-full bg-[#F6F6F6]' errorKey={errors.confirm_password?.message} />
                                </div>

                                <div className='text-right w-auto'>
                                    <Button className='w-full ml-auto !px-20' type="submit">Submit</Button>
                                </div>
                            </form>
                        </div >

                        {/* <div className='relative flex justify-center items-center w-full after:absolute after:bg-[#C9D5E3] after:w-full after:h-[1px] my-2'><span className='absolute -top-3 z-10  flex justify-center w-14 h-14 bg-white'>or</span></div> */}

                        <div className='flex flex-col pt-10 xs:pt-2'>
                            {/* <div className="text-left text-gray-800 text-base font-normal leading-snug">Sign In with</div>

                            <ul className='flex gap-5 xs:gap-2 justify-between my-3'>
                                <li className='w-1/3'>
                                    <div className="flex gap-2 justify-center items-center h-12 w-full bg-neutral-50 rounded-md border border-slate-200">
                                        {getIcon({ iconList: commonIcons, iconName: "GoogleIcon", className:"xs:w-4 xs:h-4" })}
                                        <div className="text-center text-gray-800 text-base xs:text-sm font-light leading-snug">Google</div>
                                    </div>
                                </li>
                                <li className='w-1/3'>
                                    <div className="flex gap-2 justify-center items-center h-12 bg-neutral-50 rounded-md border border-slate-200">
                                        {getIcon({ iconList: commonIcons, iconName: "GitHubIcon", className:"xs:w-4 xs:h-4" })}
                                        <div className="text-center text-gray-800 text-base xs:text-sm font-light leading-snug">Github</div>
                                    </div>
                                </li>
                                <li className='w-1/3'>
                                    <div className="flex gap-2 justify-center items-center h-12 bg-neutral-50 rounded-md border border-slate-200">
                                        {getIcon({ iconList: commonIcons, iconName: "AppleIcon", className:"xs:w-4 xs:h-4" })}
                                        <div className="text-center text-gray-800 text-base xs:text-sm font-light leading-snug">Apple</div>
                                    </div>
                                </li>
                            </ul> */}

                            <div className='flex xs:flex-col justify-center gap-5 xs:gap-3 pt-20 xs:pt-0 xs:pb-0'>
                                <div className="text-center text-gray-800 text-xl xs:text-base font-normal leading-7">New to VitalNXT.ai?</div>
                                <div className="text-center text-blue-900 text-xl xs:text-lg font-medium underline leading-7 underline-offset-4 cursor-pointer" onClick={handleShow}>Sign In</div>
                            </div>

                        </div>
                    </div>
                </Container >

                :

                <SigninForm />
            }

        </>
    )
}



