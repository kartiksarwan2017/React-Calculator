import React from 'react';

// importing corresponding css
import './ButtonBox.css';

// ButtonBox Functional Component
const ButtonBox = ({children}) => {
  return (
    <div className='buttonBox'>{ children }</div>
  )
}

export default ButtonBox;
