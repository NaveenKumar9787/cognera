"use client"
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export function convertBreadcrumbTitle(string: string) {
    return string
        .replace(/-/g, " ")
        .replace(/oe/g, "ö")
        .replace(/ae/g, "ä")
        .replace(/ue/g, "ü")
        .toLowerCase();
}

function useBreadcrumb() {
    const router = useRouter();
    const pathname = usePathname()
    const [breadcrumbs, setBreadcrumbs] = useState<any>(null);
    const linkPath = pathname.split("/");
    useEffect(() => {
        if (router) {
            linkPath.shift();
            const pathArray = linkPath.map((path:any, i:any) => {
                // Remove query parameters if they exist
                const pathWithoutQuery = path.split("?")[0];

                return {
                    breadcrumb: convertBreadcrumbTitle(pathWithoutQuery),
                    href: "/" + linkPath.slice(0, i + 1).join("/"),
                };
            });

            setBreadcrumbs(pathArray);
        }
    }, [
        //router, 
        //pathname, 
        linkPath]);

    

    return breadcrumbs;
}

export default useBreadcrumb