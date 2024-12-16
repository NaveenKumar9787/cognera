import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";
import { usePathname } from "next/navigation";

const ActiveLink = ({ children, activeClassName, href, ...props }: any) => {
	const pathname = usePathname();
	const child = Children.only(children);
	const childClassName = child.props.className || "";



	const className =
		pathname === href
			? `${childClassName} ${activeClassName}`.trim()
			: childClassName;

	return (
		<>	<Link href={href} {...props} legacyBehavior>
			{React.cloneElement(child, {
				className: className || null,
			})}
		</Link>
		</>
	);
};

export default ActiveLink;
