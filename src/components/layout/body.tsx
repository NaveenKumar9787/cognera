"use client"

import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

function Body({ children }: { children: React.ReactNode }) {
  const router = usePathname();

  return (
    <body className={`${router === "/contact-us" ? "bg-[#E4EAF1] max-w-[1920px] mx-auto" : "bg-[#D3E3FF] max-w-[1920px] mx-auto"} ${router === "/about-us" ? "bg-[#EEF4FF] max-w-[1920px] mx-auto" : "bg-[#D3E3FF] max-w-[1920px] mx-auto"} ${router === "/blogs" && "bg-[#e4eaf1]"}`}>
      {children}
    </body>
  )
}

export default Body
