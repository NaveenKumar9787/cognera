'use client'
import { useEffect } from "react";
import Cookies from "js-cookie";

import { AUTH_TOKEN } from "@/lib/constants";
import { useRouter } from "next/navigation";





const Logout = () => {
  // const { mutate } = useLogoutMutation();
  const { ...router } = useRouter();
 
  const metaTags: any = [
    { name: 'title', content: 'Authentication ' },
    { name: 'description', content: '' },
  ]

  useEffect(() => {
    (async () => {
      localStorage.clear()
      // await socialLoginSignOut({ redirect: false });
      // mutate(undefined, {
      //   onSuccess: () => {
        // setCart(null)
        Cookies.remove(AUTH_TOKEN);
      //  Cookies.remove(LOCATION_ADDRESS);
      //  Cookies.remove(LONGITUDE);
      //  Cookies.remove(LATITUDE);
        // authorize(false);
        router.push('/');
      //   },
      // });
    })();
  }, []);

 
};

export default Logout;

