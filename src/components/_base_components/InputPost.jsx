import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function InputPost() {
	const [showQuill, setShowQuill] = useState(false);
	const [hashText, setHashText] = useState('kelakar');
	const [, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleQuillChange = (value) => {
		setContent(value);
	};
	return (
		<form className="px-4">
			<input
				type="text"
				className="w-full mt-2 border-b border-neutral-600 bg-transparent text-2xl font-bold"
				placeholder="Title"
				onChange={handleTitleChange}
				onFocus={() => setShowQuill(false)}
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
				onChange={(e) => setHashText(e.target.value)}
			/>
		</form>
	);
}

export default InputPost;
