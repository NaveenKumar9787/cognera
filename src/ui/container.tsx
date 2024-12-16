"use client"
import cn from "classnames";
interface Props {
	className?: string;
	children?: any;
	el?: HTMLElement;
	clean?: boolean;
	variant?: string;
}

const Container: React.FC<Props> = ({
	children,
	className,
	el = "div",
	clean,
	variant,
}) => {
	const rootClassName = cn(className, { "mx-auto": !clean, });

	let Component: React.ComponentType<
		React.HTMLAttributes<HTMLDivElement>
	> = el as any;
	return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
