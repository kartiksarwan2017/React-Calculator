import React, { createContext } from 'react';
import { useState } from 'react';

// Creating a context
/* 
   Context provides a way to pass data through the component tree without having to pass props down 
   manually at every level.
*/
export const CalcContext = createContext();

const CalcProvider = ({children}) => {

  // settting up initial values 
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });
  
  const providerValue = {
    calc, setCalc
  }

  return (
    <CalcContext.Provider value={providerValue}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider;
