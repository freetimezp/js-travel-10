import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillStar } from 'react-icons/ai';
import { BsPeaceFill } from "react-icons/bs";
import { IoIosWifi } from 'react-icons/io';
import { MdAccessTime } from "react-icons/md";
import HowItWorks from "./HowItWorks";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    module: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const latest_data = [
    {
        id: 1,
        img: '/assets/latest-1.jpg',
        title: 'Place lorem 1',
    },
    {
        id: 2,
        img: '/assets/latest-2.jpg',
        title: 'Place lorem ipsum 2',
    },
    {
        id: 3,
        img: '/assets/latest-3.jpg',
        title: 'Place lorem ipsum lorem 3',
    },
    {
        id: 4,
        img: '/assets/latest-4.jpg',
        title: 'Place lorem 4',
    },
];

const Latest = () => {
    return (
        <div className="pt-12 bg-[#f8f8f8] pb-24">
            <div className="lg:flex items-center justify-between lg:w-2/3 m-auto 
                mb-8 lg:px-0 px-3">
                <span className="flex items-center">
                    <h2 className="lg:text-3xl text-xl font-medium">
                        Latest Packages
                    </h2>
                </span>

                <ul className="flex items-center lg:justify-end gap-x-4">
                    <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">
                        One day trip
                    </li>
                    <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">
                        Half-day trip
                    </li>
                    <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">
                        Island trip
                    </li>
                    <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">
                        Adventure trip
                    </li>
                </ul>
            </div>

            <div className="lg:w-2/3 mx-auto overflow-hidden">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    ssr={true}
                    infinite
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    className="home_carousel z-20"
                >
                    {latest_data.map((item) => (
                        <div key={item.id} className="relative px-3 flex flex-col">
                            <div className="h-80 relative">
                                <img src={item.img} alt="latest" className="w-full h-full" />
                                <span className="flex items-center justify-between absolute w-full 
                                    px-8 top-5">
                                    <div className="flex items-center justify-center px-2">
                                        {[...Array(5)].map((_, index) => {
                                            index += 1;
                                            return (
                                                <AiFillStar key={index} className="fill-[#ffcc02]" />
                                            );
                                        })}
                                        <p className="text-xs text-white pl-2">
                                            12 Reviews
                                        </p>
                                    </div>
                                    <button className="rounded-full text-white bg-[#e02631] text-[10px]
                                        shadow-black cursor-auto font-[10px] h-9 w-9">
                                        20 <br />
                                        off
                                    </button>
                                </span>
                            </div>
                            <div className="absolute top-[19rem] left-8">
                                <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-lg 
                                    border-none outline-none px-4 text-sm text-white">
                                    Top tour
                                </button>
                            </div>
                            <div className="bg-white py-8 h-full">
                                <h2 className="font-medium px-6 text-sm h-12">
                                    {item.title}
                                </h2>
                                <div className="flex items-center text-sm mt-2">
                                    <span className="border-r-2 border-[#e9e9e9] w-3/5 px-6">
                                        <p className="flex items-center gap-x-2">
                                            <BsPeaceFill className="text-[#62c9dc] text-xs" />
                                            Private Tour
                                        </p>
                                        <p className="flex items-center gap-x-2">
                                            <IoIosWifi className="text-[#62c9dc] text-xs" />
                                            Thailand
                                        </p>
                                        <p className="flex items-center gap-x-2">
                                            <MdAccessTime className="text-[#62c9dc] text-xs" />
                                            12 Hours
                                        </p>
                                    </span>
                                    <span className="w-2/5 pl-6">
                                        <p className="text-xl">
                                            Start price
                                        </p>
                                        <p className="text-[#002361] font-semibold text-xl pt-2">
                                            <sup>$</sup>2000
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            <HowItWorks />
        </div>
    );
}

export default Latest;
