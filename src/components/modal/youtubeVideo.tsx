import { useState } from "react";


export default function YouTubeVideo({isVisible, onClose, children}:any) {

    if( !isVisible) return null 

    const [youTubeLink, setYoutubeLink] = useState();

    // setYoutubeLink(youTubeLink)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex h-screen justify-center items-center backdrop-blur-sm z-50">

      <div className="flex flex-col">
      <button onClick={onClose} className="text-xl text-white place-self-end">X</button>
      <div className="h-[170px] md:w-[800px] md:h-[450px]  bg-white">{children}</div>
      </div>
    </div>
  )
}
