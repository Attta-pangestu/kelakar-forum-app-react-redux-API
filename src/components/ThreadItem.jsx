import { Link } from 'react-router-dom';

// icons
import { SlLike, SlDislike } from 'react-icons/sl';
import { LiaComments } from 'react-icons/lia';

function ThreadItem() {
	return (
		<article className="bg-neutral-900 rounded-md p-4 shadow-md border-neutral-200  mt-4">
			{/* user profile */}
			<div className="flex gap-2">
				<img
					src="https://ui-avatars.com/api/?name=atha&background=random"
					className="w-10 h-10 rounded-full mr-2"
				/>
				<div className="flex flex-col ml-2">
					{/* Profile */}
					<span className="font-medium text-sm">Atha Rizki P</span>
					<span className="text-neutral-500 text-xs">8 Minute ago</span>
					{/* text content */}
					<div className="pt-4">
						<Link to="/">
							<h2 className="text-xl font-bold">
								Bagaimana kabar para agan disini?
							</h2>
						</Link>
						{/* hashtag */}
						<button className="mt-4 bg-neutral-600 px-2 py-1 rounded-md">
							#kelakar
						</button>
						{/* viewer stat */}
						<div className="mt-4 flex gap-4">
							<button>
								{' '}
								<SlLike className="inline mb-1" /> 0
							</button>
							<button>
								{' '}
								<SlDislike className="inline mb-1" /> 0{' '}
							</button>
							<button>
								{' '}
								<LiaComments className="inline mb-1" /> 0{' '}
							</button>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default ThreadItem;
