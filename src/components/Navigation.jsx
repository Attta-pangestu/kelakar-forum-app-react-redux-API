import { Link } from "react-router-dom";
import {FaRegUser} from 'react-icons/fa';
import { RiMenu2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";


function Navigation() {
    return (
        <>
            <nav className=" w-full fixed z-10 shadow-sm bg-white border-b dark:bg-black dark:text-white  dark:border-neutral-900">
                <div className="max-w-7xl grid grid-cols-12 gap-4 ">
                    {/* button */}
                    <div className="col-span-3 lg:col-span-2 flex">
                        <button id="btn-toggle-side-menu" type="button" className="text-xl p-4 hidden" >
                            <RiMenu2Line />
                        </button>
                        {/* brand name */}
                        <Link to="/" title="Forum Kelakar" className="py-4 px-4 ">
                            <span className="block w-8 h-8 text-center border-2 border-white font-bold text-xl ">K</span>
                        </Link>
                        
                    </div>
                    {/* search-bar */}
                    <div className="lg-block col-span-7 py-4 relative rounded-md  bg-neutral-900">
                        <form >
                            <input type="text" id="search-input" placeholder="Search Kelakar..." className="t-form  px-2 border-0 bg-transparent" />
                        </form>
                        <button type="button" className="absolute top-6 right-4" >
                            <FaSearch />
                        </button>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navigation;