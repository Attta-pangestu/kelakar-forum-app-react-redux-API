import { FaHome } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SideMenu() {
    return (
        <div className="grid grid-cols-12 gap-4 text-white">
            <aside className="block col-span-2 sticky top-20 h-24 ">
                <ul className='flex flex-col gap-4'>
                    <li>
                        <Link to="/" className="block p-2 hover:bg-neutral-600 bg-neutral-900 text-2xl rounded-md  "> <FaHome className='inline' /> Home </Link>
                    </li>
                    <li>
                        <Link to="/" className="block p-2 hover:bg-neutral-600 bg-neutral-900 text-2xl rounded-md  "> <FaRankingStar className='inline' /> Leaderboard </Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default SideMenu;