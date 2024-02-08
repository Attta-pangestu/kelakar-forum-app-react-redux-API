import PropTypes from 'prop-types';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function InputWithTextEditor({ onChange, value }) {
	return (
		<ReactQuill
			theme="snow"
			value={value}
			onChange={onChange}
			modules={{
				toolbar: {
					container: [
						[{ header: [1, 2, false] }],
						['bold', 'italic', 'underline', 'strike', 'blockquote'],
						[
							{ list: 'ordered' },
							{ list: 'bullet' },
							{ indent: '-1' },
							{ indent: '+1' },
						],
						['link', 'image'],
						['clean'],
					],
					handlers: {
						// You can also add custom handlers here if you want to add functionality
					},
				},
			}}
			style={{ color: 'black', backgroundColor: 'white' }} // Adjust the styling here
		/>
	);
}

InputWithTextEditor.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default InputWithTextEditor;
