import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className="lg:w-2/3 w-4/5 relative h-16 m-auto -mt-[7.6rem]">
            <FaSearch className="text-[#6fcfdd] absolute top-0 bottom-0 
                h-full left-8" />
            <input
                type="text"
                placeholder="Search trip destination"
                className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-lg 
                    border-none outline-none w-full h-full pl-16 text-white"
            />
        </div>
    );
}

export default Search;
