import React, { useEffect, useRef } from "react";
import SwiperCore, { } from "swiper";
import 'swiper/css';
import "../../styles/swiper-carousel.css";
import { NavigationOptions } from "swiper/types";
import { Swiper } from "swiper/react";
import { getIcon } from "@/lib/get-icon";
import commonIcons from "@/components/icons/common-icons";
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from "swiper/modules";

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

type CarouselPropsType = {
	className?: string;
	buttonClassName?: string;
	buttonSize?: "default" | "small";
	paginationVariant?: "default" | "circle";
	centeredSlides?: boolean;
	breakpoints?: {} | any;
	pagination?: {} | any;
	navigation?: {} | any;
	autoplay?: {} | any;
	loop?: boolean;
	scrollbar?: {} | any;
	buttonPosition?: "inside" | "outside";
	children: any;
	spaceBetween?: any;
	slidesPerView?: any
	freeMode?: any
	swiperNav?: boolean
	goToSlide?: any; // New prop for goToSlide function
	effect?: any;
	onTouch?: any;
};

const Carousel: React.FunctionComponent<CarouselPropsType> = ({
	children,
	className = "",
	buttonClassName = "",
	buttonSize = "default",
	paginationVariant = "default",
	breakpoints,
	loop,
	centeredSlides,
	autoplay = {
		delay: 4000,
	},
	buttonPosition = "outside",
	swiperNav,
	goToSlide, // Add goToSlide prop
	effect,
	onTouch,
	...props
}) => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	const swiperRef = useRef<SwiperCore>();
	const dir = 'ltr'//getDirection(locale);

	useEffect(() => {
		if (goToSlide && swiperRef.current) {
			swiperRef.current.slideTo(goToSlide - 1);
		}
	}, [goToSlide]);


	return (
		<div className={`carouselWrapper relative ${className} ${paginationVariant === "circle" ? "dotsCircle" : ""}`}
		>
			<Swiper loop={loop ?? true} zoom={true} centeredSlides={centeredSlides ?? false} autoplay={autoplay} breakpoints={breakpoints} dir={dir} 
				effect={effect}
				navigation={{
					prevEl: prevRef.current ? prevRef.current : undefined,
					nextEl: nextRef.current ? nextRef.current : undefined,
				}}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				onInit={(swiper: SwiperCore): void => {
					const navigation = swiper.params.navigation as NavigationOptions;
					navigation.prevEl = prevRef.current;
					navigation.nextEl = nextRef.current;
					swiper.navigation.update();
				}}
				slidesPerView={'auto'}
				{...props} >
				{children}
			</Swiper>

			{swiperNav &&
				<div className="flex xs:justify-between items-center w-auto z-10  h-12 absolute xs:top-auto xs:-translate-y-2/4 xs:w-full bottom-8 right-0 gap-5 xs:bottom-0">
					<button ref={prevRef} aria-label="prev-button"
						onClick={() => swiperRef.current?.slidePrev()}
						className={`${buttonClassName} ${buttonPosition === "inside" ? "left-1 rtl:right-1" : "-left-20 rtl:right-0"} relative`} >
						<div className="border border-[#611F69] rounded-full w-10 xs:w-8 h-10 xs:h-8 flex justify-center items-center" style={{ borderColor: '#611F69' }}>{getIcon({ iconList: commonIcons, iconName: "CarouselArrowIcon", className: "xs:w-3 xs:h-3" })}</div>
					</button>
					<button ref={nextRef} aria-label="next-button" onClick={() => swiperRef.current?.slideNext()} className={`${buttonClassName} ${buttonPosition === "inside" ? "right-1 rtl:left-1" : "-right-20 rtl:left-0"} relative`} >
						<div className="border border-[#611F69] rounded-full w-10 xs:w-8 h-10 xs:h-8 flex justify-center items-center rotate-180" style={{ transform: "rotateY(180deg)", borderColor: '#611F69' }}>{getIcon({ iconList: commonIcons, iconName: "CarouselArrowIcon", className: "xs:w-3 xs:h-3" })}</div>
					</button>
				</div>
			}

		</div>
	);
};

export default Carousel;
