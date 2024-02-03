import { Link } from "react-router-dom";

// icons
import { SlLike } from "react-icons/sl";

function Thread() {
    return (
        <section className="col-span-7 relative ">
            <div>
                <article className="bg-neutral-900 rounded-md p-4 shadow-sm border-neutral-200">
                    {/* user profile */}               
                    <div className="flex gap-2">  
                        <img src="https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random" className="w-8 h-8 rounded-full mr-4"/>
                        <div className="flex flex-col ml-2">
                            {/* Profile */}
                            <span className="font-medium text-sm">Dimas Saputra</span>
                            <span className="text-neutral-500 text-xs">8 months ago</span>
                            {/* text content */}
                            <div className="pt-4">
                                <Link to="/">
                                    <h2 className="text-xl font-bold">Bagaiamana pengalamanmu menggunakan Redux</h2>
                                </Link>
                                {/* hashtag */}
                                <button className="mt-4 bg-neutral-600 px-2 py-1 rounded-md">
                                    #redux
                                </button>
                                {/* viewer stat */}
                                <div className="mt-4 flex gap-4">
                                    <button> <SlLike className="inline"/> 0 Like </button>
                                    <button > <SlLike className="inline"/> 0 Like </button>
                                </div>  
                            </div>
                        </div>
                    </div>

                </article>
            </div>
        </section>
    );
}

export default Thread;