import PropTypes from 'prop-types';
import CategoriesItem from './_base_components/CategoriesItem';

function Categories({ categories }) {
	return (
		<div className="border-2 border-neutral-500 rounded-lg p-4 my-4">
			<h2 className="text-2xl font-bold">Kelakar Categories</h2>
			<ul className="flex flex-wrap gap-x-2  ">
				{categories.map((item, index) => (
					<CategoriesItem key={index} categori={item} />
				))}
			</ul>
		</div>
	);
}

Categories.propTypes = {
	categories: PropTypes.array.isRequired,
};

export default Categories;
