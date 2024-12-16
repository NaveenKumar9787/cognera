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
import Link from 'next/link'
import commonIcons from '../icons/common-icons'
import SignupForm from './singup-form'
import { useSigninMutation } from '@/framework/rest/register/register.query'
import Cookies from 'js-cookie'
import { AUTH_TOKEN } from '@/lib/constants'



const contactSchema = yup.object().shape({
    username: yup.string().required("username is required").email("username is not valid"),
    password: yup.string().required("Password is required").typeError("Enter correct password"),
})

export default function SigninForm({ }: any) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(contactSchema) });
    const { mutate: signin, isIdle: isLoading, } = useSigninMutation();
    const recaptchaRef = useRef<HTMLFormElement>(null);
    const router = useRouter();


    const onSubmit = (data: any) => {
        
        
        
        console.log(data);
        signin({ ...data, login_type: "email", token: token }, {
            onSuccess: (d) => {
                toast.success(d?.data?.message);
                const token = d?.data?.data?.token;
                console.log(token, 'token');
                //toast.success("Request has been sent successfully");
                router.push("/");
                reset();
                Cookies.set(AUTH_TOKEN, token, {
                    expires: false ? 365 : undefined,
                  });
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
                            <h1 className="w-full xs:w-auto    text-2xl xs:text-xl font-semibold leading-none tracking-normal">Sign In</h1>
                        </div>

                        <div>
                            <form className="" onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                                    <Input placeholder='Email' className='w-full bg-[#F6F6F6]' {...register("username")} errorKey={errors.username?.message} />
                                </div>
                                <div className='flex xs:flex-wrap gap-5 my-6 xs:my-4'>
                                    <Input placeholder='Password' type="password" className='w-full bg-[#F6F6F6]' {...register("password")} errorKey={errors.password?.message} />
                                </div>

                                <div className='text-right w-auto'>
                                    <Button className='w-full ml-auto !px-20' type="submit">Submit</Button>
                                </div>
                            </form>
                            {/* <Link href={""} className='flex justify-center text-[#00389B] w-full text-center py-8 underline'>Forgot password?</Link> */}
                        </div >

                        {/* <div className='relative flex justify-center items-center w-full after:absolute after:bg-[#C9D5E3] after:w-full after:h-[1px] my-2'><span className='absolute -top-3 z-10  flex justify-center w-14 h-14 bg-white'>or</span></div> */}

                        <div className='flex flex-col pt-10 xs:pt-2'>
                            {/* <div className="text-left text-gray-800 text-base font-normal leading-snug">Sign In with</div>

                            <ul className='flex gap-5 xs:gap-2 justify-between my-3'>
                                <li className='w-1/3'>
                                    <div className="flex gap-2 justify-center items-center h-12 w-full bg-neutral-50 rounded-md border border-slate-200">
                                        {getIcon({ iconList: commonIcons, iconName: "GoogleIcon", className: "xs:w-4 xs:h-4" })}
                                        <div className="text-center text-gray-800 text-base xs:text-sm font-light leading-snug">Google</div>
                                    </div>
                                </li>
                                <li className='w-1/3'>
                                    <div className="flex gap-2 justify-center items-center h-12 bg-neutral-50 rounded-md border border-slate-200">
                                        {getIcon({ iconList: commonIcons, iconName: "GitHubIcon", className: "xs:w-4 xs:h-4" })}
                                        <div className="text-center text-gray-800 text-base xs:text-sm font-light leading-snug">Github</div>
                                    </div>
                                </li>
                                <li className='w-1/3'>
                                    <div className="flex gap-2 justify-center items-center h-12 bg-neutral-50 rounded-md border border-slate-200">
                                        {getIcon({ iconList: commonIcons, iconName: "AppleIcon", className: "xs:w-4 xs:h-4" })}
                                        <div className="text-center text-gray-800 text-base xs:text-sm font-light leading-snug">Apple</div>
                                    </div>
                                </li>
                            </ul> */}

                            <div className='flex xs:flex-col justify-center gap-5 xs:gap-3 pt-20 xs:pt-5 xs:pb-0'>
                                <div className="text-center text-gray-800 text-xl xs:text-base font-normal leading-7">New to VitalNXT.ai?</div>
                                <div className="text-center text-blue-900 text-xl xs:text-lg font-medium underline leading-7 underline-offset-4 cursor-pointer" onClick={handleShow}>Sign Up</div>
                            </div>

                        </div>
                    </div>
                </Container >

                :

                <SignupForm />
            }

        </>
    )
}



