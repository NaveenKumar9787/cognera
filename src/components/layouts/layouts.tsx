
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const SiteLayout = ({ children }:any) => {
	
	return (
		<div className="flex flex-col min-h-screen mt-[70px] xl:overflow-hidden 2xl:overflow-auto">
            <Header />
			<main
				className="relative flex-grow bg-[#FFFFFF]"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
			</main>
            <Footer />
		</div>
	);
};

export const getLayout = (page: React.ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
)

export default SiteLayout;
