import {
    FaTwitter,
    FaInstagram,
    FaFacebookF,
    FaCcPaypal,
    FaCcMastercard,
    FaCcVisa,
    FaCcApplePay
} from "react-icons/fa";
import { TiSocialGooglePlus } from 'react-icons/ti';

const Footer = () => {
    return (
        <footer>
            <section className="flex flex-col bg-[#07253f] pt-8">
                <div className="lg:flex items-center justify-between pb-8">
                    <div className="lg:flex justify-between lg:w-2/3 m-auto lg:px-0 px-3">
                        <div>
                            <img src="/assets/logo.png" alt="logo" className="w-20 mb-4" />
                            <p className="text-xs text-white mt-2">
                                Terms & Conditions
                            </p>
                            <p className="text-xs text-white mt-2">
                                Privacy Policy
                            </p>

                            <div className="flex items-center pt-6 w-full lg:justify-between 
                                lg:gap-x-0 gap-x-6">
                                <FaFacebookF className="text-white" />
                                <TiSocialGooglePlus className="text-white" />
                                <FaTwitter className="text-white" />
                                <FaInstagram className="text-white" />
                            </div>
                        </div>

                        <div>
                            <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 
                                uppercase">
                                Support
                            </p>
                            <p className="text-xs text-white mt-2">Blog</p>
                            <p className="text-xs text-white mt-2">Help</p>
                            <p className="text-xs text-white mt-2">Contact</p>
                        </div>

                        <div>
                            <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 
                                uppercase">
                                Travel Tips
                            </p>
                            <p className="text-xs text-white mt-2">Island tours</p>
                            <p className="text-xs text-white mt-2">City tours</p>
                            <p className="text-xs text-white mt-2">Adventures</p>
                            <p className="text-xs text-white mt-2">Shows</p>
                            <p className="text-xs text-white mt-2">Fishing</p>
                            <p className="text-xs text-white mt-2">Diving</p>
                        </div>

                        <div>
                            <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 
                                uppercase">
                                Become an agent
                            </p>
                            <p className="text-xs text-white mt-2">Apply now</p>
                            <p className="text-xs text-white mt-2">HeAgent Sign In</p>
                        </div>

                        <div>
                            <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 
                                uppercase">
                                Contact Us
                            </p>
                            <p className="text-xs text-white mt-2">
                                90000, Ukraine, Sun City, <br /> Street Avenue, 123
                            </p>
                            <p className="text-xs text-white mt-2">
                                <span className="text-medium text-[#3b6680]">Email:</span>{" "}
                                info@gmail.com
                            </p>
                            <p className="text-xs text-white mt-2">
                                <span className="text-medium text-[#3b6680]">Phone:</span>{" "}
                                +123 456 7890
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-14 lg:flex items-center justify-between">
                <p className="bg-[#121212] text-white text-[10px] lg:w-2/3 h-full 
                items-center flex lg:pl-[16.5%] pl-3">
                    Copyright. 2023. Travel Time. All Rights Reserved. by Freetime.
                </p>

                <div className="bg-black lg:w-1/3 h-full flex gap-x-2 items-center px-3">
                    <p className="text-white">
                        How you can pay?..
                    </p>
                    <span className="flex items-center gap-x-2">
                        <FaCcPaypal className="text-4xl fill-[#c3e0f8]" />
                        <FaCcMastercard className="text-4xl fill-[#c3e0f8]" />
                        <FaCcVisa className="text-4xl fill-[#c3e0f8]" />
                        <FaCcApplePay className="text-4xl fill-[#c3e0f8]" />
                    </span>
                </div>
            </section>
        </footer>
    )
}

export default Footer
