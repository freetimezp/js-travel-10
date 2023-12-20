import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { BsPeopleFill } from 'react-icons/bs';
import { IoIosAirplane } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';

const tours_data = [
    {
        id: 1,
        img: '/assets/rec-1.jpg',
        title: 'Title 1',
    },
    {
        id: 2,
        img: '/assets/rec-2.jpg',
        title: 'Title 2',
    },
    {
        id: 3,
        img: '/assets/rec-3.jpg',
        title: 'Title 3',
    },
    {
        id: 4,
        img: '/assets/rec-4.jpg',
        title: 'Title 4',
    },
    {
        id: 5,
        img: '/assets/rec-5.jpg',
        title: 'Title 5',
    },
    {
        id: 6,
        img: '/assets/rec-6.jpg',
        title: 'Title 6',
    },
];

const Recommended = () => {
    return (
        <div className="pt-12 bg-[#f8f8f8] pb-24">
            <div className="flex lg:flex-row flex-col items-center justify-between 
                lg:w-2/3 m-auto mb-8">
                <span className="flex items-center gap-x-2">
                    <h1 className="lg:text-3xl font-medium">
                        Recommended Tours
                    </h1>
                    <p className="text-[#62c9dc] lg:pl-16 text-sm">
                        Most trending tours right now
                    </p>
                </span>
                <a href="#" className="text-sm flex items-center gap-x-1 lg:w-1/5 
                    hover:underline">
                    See all tours & activities
                    <AiOutlineArrowRight className="text-[#62c9dc] font-medium text-base" />
                </a>
            </div>

            <div className="flex lg:justify-between justify-center gap-8 lg:w-2/3 mx-auto">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    {tours_data.map((tour) => (
                        <div key={tour.id} className="relative">
                            <div className="h-80 relative overflow-hidden">
                                <img src={tour.img} alt="tour" className="w-full h-full hover:scale-110
                                    transition-all duration-400 ease" />
                                <span className="flex items-center justify-between absolute 
                                    w-full px-8 top-5">
                                    <div className="flex items-center justify-center px-2">
                                        {[...Array(5)].map((_, index) => {
                                            index += -1;
                                            return (
                                                <AiFillStar key={index} className="fill-[#ffcc02]" />
                                            );
                                        })}
                                        <p className="text-xs text-white pl-2">
                                            12 Reviews
                                        </p>
                                    </div>
                                </span>
                            </div>
                            <div className="absolute bottom-[31%] left-8">
                                <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] 
                                    rounded-lg border-none outline-none px-4 text-sm text-white">
                                    Top tour
                                </button>
                            </div>
                            <div className="bg-white py-8">
                                <h2 className="font-medium px-6">
                                    {tour.title}
                                </h2>
                                <div className="flex items-center text-sm mt-2">
                                    <span className="border-r-2 border-[#e9e9e9] w-3/5 px-6">
                                        <p className="flex items-center gap-x-2">
                                            <BsPeopleFill className="text-[#62c9dc] text-xs" />
                                            Private Tour
                                        </p>
                                        <p className="flex items-center gap-x-2">
                                            <IoIosAirplane className="text-[#62c9dc] text-xs" />
                                            Beautiful place
                                        </p>
                                        <p className="flex items-center gap-x-2">
                                            <MdTimeline className="text-[#62c9dc] text-xs" />
                                            12 hours
                                        </p>
                                    </span>
                                    <span className="w-2/5 px-6">
                                        <p>
                                            START PRICE
                                        </p>
                                        <p className="text-[#002361] font-semibold text-xl pt-2">
                                            <sup>$</sup>2000
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recommended;
