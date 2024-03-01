import React from 'react';
import { useSelector } from 'react-redux';
import TextInput from '../components/TextInput'; // Assuming TextInput is in the components folder

const HomePage = () => {
  const texts = useSelector(state => state.texts); // Access texts from the Redux store

  return (
    <div className="main-container"> 
      <TextInput />
      {texts.map((text, index) => (
        <div key={index} className="text-display">{text}</div> // Display each text
      ))}
    </div>
  );
};

export default HomePage;
