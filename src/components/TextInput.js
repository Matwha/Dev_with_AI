import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addText } from '../store/actions';

const TextInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addText(input));
    setInput(''); // Clear the input after submission
  };

  return (
    <div className="text-input-container">
      <input
        className="text-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter some text"
      />
      <button className="add-text-btn" onClick={handleSubmit}>
        Add Text
      </button>
    </div>
  );
};

export default TextInput;

