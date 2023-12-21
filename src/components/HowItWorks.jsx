import { GrBus } from 'react-icons/gr';
import { HiBadgeCheck } from 'react-icons/hi';
import { MdFactCheck } from 'react-icons/md';

const HowItWorks = () => {
    return (
        <div className="lg:flex items-center justify-between lg:w-2/3 mx-auto pt-16 
            lg:px-0 px-3 bg-[#f8f8f8]">
            <div>
                <h1 className="lg:text-3xl text-xl font-medium">
                    How it works?
                </h1>
                <p className="uppercase text-sm text-[#62c9dc]">
                    search-select-book
                </p>
            </div>
            <div className="flex items-center gap-x-3 lg:pt-0 pt-3">
                <button className='bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-full 
                    h-16 w-16 cursor-auto'>
                    <GrBus className='w-full h-full p-4 text-white' />
                </button>
                <span>
                    <h1 className='capitalize'>
                        Search
                    </h1>
                    <p className='text-[#62c9dc] capitalize'>
                        Find your dream trip
                    </p>
                </span>
            </div>
            <div className="flex items-center gap-x-3 lg:pt-0 pt-3">
                <button className='bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-full 
                    h-16 w-16 cursor-auto'>
                    <HiBadgeCheck className='w-full h-full p-4 text-white' />
                </button>
                <span>
                    <h1 className='capitalize'>
                        Select
                    </h1>
                    <p className='text-[#62c9dc] capitalize'>
                        Select trip package
                    </p>
                </span>
            </div>
            <div className="flex items-center gap-x-3 lg:pt-0 pt-3">
                <button className='bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-full 
                    h-16 w-16 cursor-auto'>
                    <MdFactCheck className='w-full h-full p-4 text-white' />
                </button>
                <span>
                    <h1 className='capitalize'>
                        Book
                    </h1>
                    <p className='text-[#62c9dc] capitalize'>
                        Booking And Pay
                    </p>
                </span>
            </div>
        </div>
    );
}

export default HowItWorks;
