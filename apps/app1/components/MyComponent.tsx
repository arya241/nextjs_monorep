import React from 'react';

const MyComponent = () => {
  const handleClick = () => {
    alert('Button clicked from MFE 1!');
  };

  return (
    <div>
      <h1>Welcome from MFE 1!</h1>
      <button onClick={handleClick}>Click me (MFE 1)</button>
    </div>
  );
};

export default MyComponent;