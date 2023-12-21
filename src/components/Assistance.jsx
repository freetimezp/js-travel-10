import { AiFillStar } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";


const Assistance = () => {
    return (
        <div className="bg-[url('/assets/assist-1.jpg')] bg-no-repeat bg-cover h-[70vh] z-0
            text-white relative before:absolute before:top-0 before:left-0 before:w-full
            before:h-full before:bg-[#000]/50">
            <div className="h-full lg:w-2/3 mx-auto flex flex-col justify-center relative z-50">
                <h1 className="font-medium lg:text-5xl text-3xl lg:text-left text-center">
                    Need Assistance
                </h1>
                <p className="lg:text-2xl mt-6 mb-4 lg:text-left text-center">
                    Need help.. Call us or drop a message. <br />
                    Our agent will be in touch shortly.
                </p>

                <div className="lg:flex justify-between items-center">
                    <div className="flex gap-x-4 lg:justify-between lg:px-0 px-3">
                        <span className="rounded-full border border-white flex flex-col 
                        items-center gap-4 p-1">
                            <button className="bg-white rounded-full text-black text-sm 
                            font-medium px-8 py-2 h-full uppercase">
                                Contact us
                            </button>
                        </span>
                        <button className="rounded-full hoverBtn flex items-center gap-2">
                            <FaPhone className="rotate-90" />
                            <p>
                                +123 456 7890
                            </p>
                        </button>
                    </div>

                    <span className="flex flex-col items-end lg:p-0 p-3">
                        <div className="flex items-end justify-end gap-x-[2px]">
                            {[...Array(5)].map((_, index) => {
                                return (
                                    <AiFillStar key={index} className="fill-[#ffcc02]" />
                                )
                            })}
                        </div>
                        <div className="flex flex-col items-end justify-end">
                            <img src="/assets/assist-1.jpg" alt="assistance" className="w-28" />
                            <p className="text-4xl">
                                Tripadvisor
                            </p>
                        </div>
                        <p className="uppercase text-xs text-white">
                            based on guest review
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Assistance;
