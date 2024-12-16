import React from 'react'
import { Buttonarrow } from '../icons/common-icons'
import Input from '@/ui/input'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNewsletterMutation } from '@/framework/rest/news-letter/newsletter.query';
import { toast } from 'react-toastify';


const newsletterSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is not valid"),
})


export default function NewsletterForm() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(newsletterSchema) });
  const { mutate: newsletter, isIdle: isLoading, } = useNewsletterMutation();

  const onSubmit = (data: any) => {

    newsletter({ ...data }, {
        onSuccess: (d) => {
            toast.success(d?.data?.message);
            //toast.success("Request has been sent successfully");
        //    router.push("/");
            reset();
        },
        onError: (error: any) => {
            toast.success(error?.response?.data?.message);
        }
    });
};
  
  return (
    <div className="">
      <h1 className='2xl:text-[24px] text-[22px] xs:text-sm font-[500] text-[#001C4D] mb-6'>Newsletter</h1>

      <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className=" mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
        <Input {...register("email")} errorKey={errors.email?.message} placeholder='Enter your email address' variant="outline" className='w-full rounded-[4px] xs:!min-w-[325px] !min-w-[375px]  2xl:!min-w-[495px] !bg-transparent border border-[#AFC1D5] mb-5' />

        <button type='submit' className="w-full flex items-center justify-between h-[46px] xl:min-w-[200px] shadow-lg px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mt-4 focus:outline-none bg-[#00389B] rounded-[10px] hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
          Subscribe Now <Buttonarrow />
        </button>
      </div>
      </form>
    </div>
  )
}
