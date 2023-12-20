import { FaPhone, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="bg-[url('/assets/bg-nav.jpg')] bg-no-repeat bg-cover 
            h-[80vh] -top-[10vh] relative text-white">
            <div className="lg:w-2/3 mx-auto h-full flex flex-col justify-center">
                <h1 className="font-medium lg:text-5xl text-3xl lg:text-left 
                    text-center">
                    Find your dream <br /> Trip with Our Travel team
                </h1>

                <p className="lg:text-2xl text-lg lg:text-left text-center mt-6 
                    mb-12">
                    We offer unbeatable prcie & excellent services
                </p>

                <div className="flex lg:justify-start justify-center">
                    <span className="rounded-full border border-white flex flex-col 
                        items-center gap-4 p-1 hover:bg-white transition-all duration-300">
                        <button className="bg-white rounded-full text-black text-sm 
                            font-medium px-8 py-2 h-full">
                            View offers
                        </button>
                    </span>
                    <button className="rounded-full px-4 py-1 hoverBtn flex gap-2 
                        items-center">
                        <FaPhone className="rotate-90" />
                        <p>
                            +123 456 7890
                        </p>
                    </button>
                </div>
            </div>

            <div className="absolute lg:right-24 right-5 top-[75%] md:top-[45%] md:-transform-y-[50%]
                flex flex-row right-[35%] md:right-0 md:flex-col gap-6">
                <FaFacebookF className="cursor-pointer text-2xl text-white transition-all 
                    duration-300 ease-in-out hover:fill-[#283661]" />
                <FaInstagram className="cursor-pointer text-2xl text-white transition-all 
                    duration-300 ease-in-out hover:fill-[#283661]" />
                <FaTwitter className="cursor-pointer text-2xl text-white transition-all 
                    duration-300 ease-in-out hover:fill-[#283661]" />
            </div>
        </div>
    );
};

export default Hero;
