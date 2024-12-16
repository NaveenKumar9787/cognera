"use client"
import cn from "classnames";
import React, { InputHTMLAttributes } from "react";
import { getIcon } from '@/lib/get-icon'
import contactIcons from "@/components/icons/contact-icons";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  labelKey?: string;
  placeholderKey?: string;
  name: string;
  errorKey?: any;
  type?: string;
  shadow?: boolean;
  iconList?: any;
  iconName?: string;
  variant?: "normal" | "solid" | "outline" | "iconBox";
}
const classes = {
  root: "block w-full text-sm px-5 py-3 xs:py-2 border border-[#E4EAF1] rounded shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
  normal: "bg-gray-100 border-gray-300 text-base xs:text-sm text-[#757575] xs:!h-[45px] font-normal rounded-md focus:shadow focus:bg-white focus:border-primary",
  solid: "bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 border border-[#DCE0E5] rounded-md text-neutral-700 text-lg !font-medium leading-7",
  iconBox: "bg-white border-0 border-gray-300 focus:outline-none focus:ring-0 focus:border-none h-11 md:h-12",
  outline: "border-[#00389B] px-3 focus:border-heading rounded-[16px] focus-visible:outline-none border bg-transparent",
  shadow: "focus:shadow",
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { className = "block", labelKey, name, errorKey, placeholderKey, iconList, iconName, variant = "normal", shadow = false, type = "text", inputClassName, ...rest },
    ref
  ) => {

    const rootClassName = cn(classes.root,
      {
        [classes.normal]: variant === "normal",
        [classes.solid]: variant === "solid",
        [classes.outline]: variant === "outline",
        [classes.iconBox]: variant === "iconBox",
      },
      {
        [classes.shadow]: shadow,
      },
      inputClassName
    );

    return (
      <div className={className}>
        {labelKey && (
          <label htmlFor={name}
            className="text-base opacity-90 text-neutral-700 font-semibold">
            {labelKey}
          </label>
        )}

        <div className={`${iconName ? 'flex items-center border border-[#DCE0E5] rounded-md mt-2 pl-2' : ''}`} >
          {iconName && getIcon({ iconList: contactIcons, iconName: iconName, className: 'flex-none mx-2' })}
          <input id={name} name={name} type={type} ref={ref} className={rootClassName} autoComplete="off" spellCheck="false"
            // @ts-ignore
            placeholder={placeholderKey} aria-invalid={errorKey ? "true" : "false"} {...rest}
          /></div>
        {errorKey && <p className="my-2 text-xs text-red-500">{errorKey}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
