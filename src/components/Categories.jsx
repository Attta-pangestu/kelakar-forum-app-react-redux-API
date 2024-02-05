import CategoriesItem from './_base_components/CategoriesItem';

function Categories() {
	return (
		<div className="border-2 border-neutral-500 rounded-lg p-4 my-4">
			<h2 className="text-2xl font-bold">Kelakar Categories</h2>
			<ul>
				<CategoriesItem categori="umum" />
			</ul>
		</div>
	);
}

export default Categories;
