// components/MyParent.js
import React from 'react';
import MyChild from './MyChild';

const MyParent = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false); // Initial state: content hidden

  const toggleContent = () => {
    setShowContent(!showContent); 
  };

  return (
    <div>
      <h2>{title}</h2>
      {showContent && <MyChild content={content} />} {/* Show MyChild conditionally */}
      <button onClick={toggleContent}>
        {showContent ? 'Hide Content' : 'Show Content'}
      </button>
    </div>
  );
};

export default MyParent;

