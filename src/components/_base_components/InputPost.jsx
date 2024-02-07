import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function InputPost({ handleApiPostSubmit }) {
	const [showQuill, setShowQuill] = useState(false);
	const [hashText, setHashText] = useState('kelakar');
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleQuillChange = (value) => {
		setContent(value);
	};

	const handleHashChange = (event) => {
		setHashText(event.target.value);
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleApiPostSubmit({ title, content, hashText });
		setTitle('');
		setContent('');
		setHashText('kelakar');
	};

	return (
		<form className="px-4">
			<input
				type="text"
				className="w-full mt-2 border-b border-neutral-600 bg-transparent text-2xl font-bold"
				placeholder="Title"
				onChange={handleTitleChange}
				onFocus={() => setShowQuill(false)}
				value={title}
			/>
			{showQuill ? (
				<ReactQuill
					theme="snow"
					value={content}
					onChange={handleQuillChange}
					onBlur={() => setShowQuill(false)}
				/>
			) : (
				<div
					onClick={() => setShowQuill(true)}
					className={`w-full my-4 border-b border-neutral-600 bg-transparent rounded-md shadow-sm  font-normal  text-2xl ${
						showQuill ? '' : 'font-extrabold text-neutral-400 '
					} `}
					dangerouslySetInnerHTML={{
						__html: showQuill || content ? content : 'What Are You Thinking..?',
					}}
				></div>
			)}
			{/* categories */}
			<p className="text-md text-neutral-300"> #{hashText} </p>
			<input
				type="text"
				className="w-full mt-2 border-b border-neutral-600 bg-transparent rounded-md shadow-sm text-xl"
				placeholder="categories"
				onFocus={() => setShowQuill(false)}
				onChange={handleHashChange}
				value={hashText}
			/>
			<button
				type="submit"
				className="w-full mt-4 py-2 bg-blue-700 hover:bg-blue-500 text-white text-xl font-bold rounded-lg"
				onClick={handleSubmit}
			>
				Publikasikan
			</button>
		</form>
	);
}

InputPost.propTypes = {
	handleApiPostSubmit: PropTypes.func.isRequired,
};

export default InputPost;
