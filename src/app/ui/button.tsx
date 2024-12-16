"use client"
import cn from "classnames";
import Link from "next/link";
import React, { forwardRef, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?:
    | "flat"
    | "secondary"
    | "black"
    | "smoke"
    | "normal"
    | "outline"
    | "custom";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
  arrow?:boolean;
  link?:string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref ) => {
  const {
    className,
    variant = "primary",
    children,
    active,
    arrow = false,
    loading = false,
    disabled = false,
    link,
    ...rest
  } = props;

  const rootClassName = cn(
    "font-normal text-[16.5px] xs:text-sm leading-4 tracking-[0.18px] px-8 h-[59px] xs:h-auto xs:py-3 flex gap-5 items-center cursor-pointer text-center transition ease-in-out duration-300 text-center justify-center rounded-[41px] placeholder-white focus-visible:outline-none focus:outline-none focus:bg-opacity-80 shadow-[-1px_3px_0px_0px_rgba(0,37,103,1)]",
    {
      "bg-[#00389B] text-white font-semibold hover:text-white" : variant === "primary",
      "px-5 bg-[#F6E8D5] text-[#251600] font-semibold transform-none normal-case hover:shadow-cart": variant === "secondary",
      "opacity-90 bg-black text-white transform-none normal-case hover:text-white hover:shadow-cart": variant === "black",
      "bg-transparent text-black !font-semibold border-2 border-black": variant === "outline",
      "px-auto text-white ": variant === "custom",
      "cursor-not-allowed": loading,
      "bg-opacity-50 hover:bg-opacity-50 cursor-not-allowed hover:cursor-not-allowed":disabled,
        "relative mt-20 after:-right-[9rem] after:-top-24 after:absolute after:content-none md:after:content-[url('https://izo-prod-websites-assets.s3.amazonaws.com/assets/bg/ark-ico.svg')] after:p-8":arrow,
    },
    className
  );
    

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
      {loading && arrow &&(
        <svg
          className="animate-spin -mr-1 rtl:-ml-1 ml-3 rtl:mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
    </button>
  );
});
Button.displayName = 'Button'; 
export default Button;
