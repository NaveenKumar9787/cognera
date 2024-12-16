
// 'use client'

// import React, { ReactNode } from 'react'

// import { usePathname } from 'next/navigation'
// import Link from 'next/link'

// type TBreadCrumbProps = {
//     homeElement?: ReactNode,
//     separator?: ReactNode,
//     containerClasses?: string,
//     listClasses?: string,
//     activeClasses?: string,
//     capitalizeLinks?: boolean
// }

// const Breadcrumb = ({homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks}: TBreadCrumbProps) => {

//     const paths = usePathname()
//     const pathNames = paths.split('/').filter( path => path )

//     return (
//         <div>
//             <ul className={containerClasses}>
//                 <li className={listClasses}><Link href={'/'}>{homeElement}</Link></li>
//                 {pathNames.length > 0 && separator}
//             {
//                 pathNames.map( (link, index) => {
//                     let href = `/${pathNames.slice(0, index + 1).join('/')}`
//                     let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
//                     let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
//                     return (
//                         <React.Fragment key={index}>
//                             <li className={itemClasses} >
//                                 <Link href={href}>{itemLink}</Link>
//                             </li>
//                             {pathNames.length !== index + 1 && separator}
//                         </React.Fragment>
//                     )
//                 })
//             }
//             </ul>
//         </div>
//     )
// }

// export default Breadcrumb




// "use client"
// import { getIcon } from '@/lib/get-icon'
// import React from 'react'
// import commonIcons, { RightArrowIcon, SingleRightArrowIcon } from '../icons/common-icons'
// import { ROUTES } from '@/utils/routes'
// import useBreadcrumb, { convertBreadcrumbTitle } from '@/utils/use-breadcrumb'
// import ActiveLink from '@/ui/active-link'


// interface Props {
//   children: any
// }

// const BreadcrumbItem: React.FC<Props> = ({ children, ...props }) => {
//   return (<li className='text-[#4C4E64]' {...props}></li>)
// }

// export const BreadcrumbItems = (props: any) => {
//   let children: any = React.Children.toArray(props.children);
//   children = children.map((child: string, index: number) => (
//     <BreadcrumbItem key={index + 'breadcrump'}>{child}</BreadcrumbItem>
//   ));

//   const lastIndex = children.length - 1;

//   children = children.reduce((acc: any, child: string, index: number) => {
//     const notLast = index < lastIndex;
//     if (notLast) {
//       acc.push(
//         child,
//         <span>/</span>
//       );
//     } else {
//       acc.push(child);
//     }
//     return acc;
//   }, []);

//   return (
//     <div className="hidden lg:flex items-center font-normal py-5 text-lg gap-0.5 ">
//       <ol className="hidden lg:flex items-center w-full overflow-hidden">
//         {children}
//       </ol>
//     </div>
//   );
// }

// // const Breadcrumb: React.FC<{ separator?: string; page?: string }> = ({
// //   separator = <RightArrowIcon height={"10px"} width={"5px"} />,
// //   page,
// // }) => {
// //   const breadcrumbs =
// //     page === "category" || !page
// //       ? useBreadcrumb()
// //       : [{ href: "", breadcrumb: page }];
// //   return (
// //     <BreadcrumbItems separator={separator}>
// //       <ActiveLink href={ROUTES.HOME} activeClassName="font-body text-black leading-[21px] text-[13px]">
// //         <a className="font-semibold">{"Home"}</a>
// //       </ActiveLink>

// //       {breadcrumbs?.map((breadcrumb: any,i:any) => (
// //         <ActiveLink
// //           href={breadcrumb.href}
// //           activeClassName="font-body font-semibold text-black leading-[21px] text-[12px]"
// //           key={i+"BC"}
// //         >
// //           <a className="capitalize font-andika font-semibold text-black leading-[21px] text-[12px]">
// //             {convertBreadcrumbTitle(breadcrumb.breadcrumb)}
// //           </a>
// //         </ActiveLink>
// //       ))}

// //     </BreadcrumbItems>
// //   );
// // };


// const Breadcrumb: React.FC<{ separator?: string; page?: string }> = ({ separator = <SingleRightArrowIcon height={"20px"} width={"20px"} />,
//   page, }) => {    
//   const isBreadCrump = useBreadcrumb() ;
//   const breadcrumbs = page === "category" || !page ? isBreadCrump : [{ href: "", breadcrumb: page }];

//   return (
//     <>
//       <ul className='xs:hidden py-10 xs:py-5 flex text-lg gap-0.5 items-center'>
//         <li><ActiveLink href={ROUTES.HOME} activeClassName="text-[#4C4E64]"><a>{getIcon({ iconList: commonIcons, iconName: "HomeIcon" })}</a></ActiveLink></li>
//         <li>{separator}</li>
//         <li><ActiveLink href={''} activeClassName="text-[#4C4E64]"><>Solutions</></ActiveLink></li>
//         <li>{separator}</li>
//         {breadcrumbs?.map((breadcrumb: any, i: any) => (
//           <li key={i + "breadcrumb"}><ActiveLink href={breadcrumb.href} activeClassName="text-[#6D1178]" >
//             <span className="capitalize">{convertBreadcrumbTitle(breadcrumb.breadcrumb)}</span>
//           </ActiveLink></li>
//         ))}
//       </ul></>
//   )
// }


// export default Breadcrumb;


'use client'

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import commonIcons, { SingleRightArrowIcon } from '../icons/common-icons'
import { getIcon } from '@/lib/get-icon'

type BreadCrumbProps = {
    //separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

const Breadcrumb = ({ capitalizeLinks }: BreadCrumbProps) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)
    const separator = <SingleRightArrowIcon height={"20px"} width={"20px"} />
    const listClasses =""
    const activeClasses="text-amber-500"
  
    return (
        <>
    {paths !== "/" ?   
        
        <div className='absolute w-full left-2/4 -translate-x-2/4 xs:hidden px-11 xs:px-5 mx-auto z-10'>
        <ul className="flex py-9 xs:py-5 text-lg gap-0.5 items-center">
            <li className={listClasses}><Link href={'/'}>{getIcon({ iconList: commonIcons, iconName: "HomeIcon" })}</Link></li>
            {pathNames.length > 0 && separator}
            {
                pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses} >
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })
            }
        </ul>
    </div>
     : "" }  
    
    </>

    )
}

export default Breadcrumb
