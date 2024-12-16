"use client"
import React, { useEffect, useState } from 'react'

function useYscroll({yScroll}:any) {

    const [shown, setShown] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= 250) {
                setShown(true);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [yScroll]);

    return{shown};
}

export default useYscroll
