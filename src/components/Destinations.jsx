import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Destinations = () => {
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

    return (
        <div className="mt-12">
            <div className="flex lg:flex-row flex-col items-center justify-between lg:w-2/3
                m-auto lg:mb-8">
                <span className="flex items-center gap-x-2">
                    <h1 className="lg:text-3xl font-medium">
                        What is your life style?
                    </h1>
                    <p className="text-[#62c9dc] lg:pl-16 text-sm">
                        Find yourself
                    </p>
                </span>
                <a href="#" className="text-sm flex items-center gap-x-1 lg:w-1/5 hover:underline">
                    <AiOutlineArrowRight className="text-[#62c9dc] font-medium text-base" />
                    See all destinations
                </a>
            </div>

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
            >
                <div className="h-full xl:m-0 xl:mt-0 m-auto mt-8 mb-4 lg:pl-6">
                    <img src="/assets/item-1.jpg" alt="travel" className="h-full" />
                </div>
                <div className="h-full xl:m-0 xl:mt-0 m-auto mt-8 mb-4 lg:pl-6">
                    <img src="/assets/item-2.jpg" alt="travel" className="h-full" />
                </div>
                <div className="h-full xl:m-0 xl:mt-0 m-auto mt-8 mb-4 lg:pl-6">
                    <img src="/assets/item-3.jpg" alt="travel" className="h-full" />
                </div>
                <div className="h-full xl:m-0 xl:mt-0 m-auto mt-8 mb-4 lg:pl-6">
                    <img src="/assets/item-4.jpg" alt="travel" className="h-full" />
                </div>
            </Carousel>
        </div>
    );
}

export default Destinations;
