import React from 'react';
import './styles.scss';

const TestComponent = (text) => {
  return (
    <div className="component1">
      <h1 className="title">Test component</h1>
      <p className="description">{text}</p>
    </div>
  );
};

export default TestComponent;

//This is a nice Test Component