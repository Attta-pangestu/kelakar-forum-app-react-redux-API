import ThreadItem from './ThreadItem';
import ThreadInput from './ThreadInput';

function ThreadLists() {
	return (
		<section className="col-span-7  ">
			<div>
				<ThreadInput />
				<ThreadItem />
				<ThreadItem />
			</div>
		</section>
	);
}

export default ThreadLists;
