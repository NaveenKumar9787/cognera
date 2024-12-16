import { getIcon } from '@/lib/get-icon';
import React from 'react'
import homeIcons from '../icons/home-icons';
import Image from 'next/image';

const Card = ({ title, description, classIcon, textColor,image }: any) => {
  return (

    <div className={`relative flex flex-col items-center justify-center ${textColor} xs:w-full `}>
    <div className={`icon-container ${classIcon} pb-[30px] xs:pb-[15px] xs:pt-[15px]`}>
      {/* {getIcon({ iconList: homeIcons, iconName: image })} */}
      <Image src={`/images/banners/${image}.svg`} alt={"trackySites"} width={100} height={60} className="scaled-image xs:w-[70px]"  />
    </div>
    <div className={`relative left-[25px] xl:left-[25px] md:left-[25px] xs:left-0 xs:w-[40%] `}>
    <h2 className={`w-full flex justify-center items-center font-[700] text-[18px] xl:text-[18px] md:text-[14px] xs:text-[14px] `}>{title}</h2>
    <p className={`text-center font-[400] text-[14px] xl:text-[14px] md:text-[10px] xs:text-[10px] mt-2`}>{description}</p>
    </div>
  </div>

    // <div className={`flex flex-col items-center justify-center p-2 `}>
    //     <div className=''>
    //     {getIcon({ iconList: homeIcons, iconName: image })}
    //     </div>
    //   <h2 className={`font-[700] text-[18px] ${textColor}`}>{title}</h2>
    //   <p className={`text-center font-[400] text-[14px] mt-2 ${textColor}`}>{description}</p>
    // </div>
    
  );
};


export default Card;