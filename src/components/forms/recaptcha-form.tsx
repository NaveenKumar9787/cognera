"use client"
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


function RecaptchaForm({ onChange, ref }: any) {
    return (
        <div>
       
            <ReCAPTCHA
                sitekey='6Lcap04iAAAAAGOebcUZz9hI2sJKRfcexCbHS2n_'
                onChange={onChange}
                theme='light'
                ref={ref}
                className='w-full'
            />
        </div>
    )
}

export default RecaptchaForm
