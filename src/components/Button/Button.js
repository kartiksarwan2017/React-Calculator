import React, { useContext } from 'react';

// Importing CalcContext API
import {CalcContext} from '../../context/CalcContext';

// importing corresponding css
import './Button.css';

// Method to setup className based on the operator for applying css
const getStyleName = btn => {

  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt'
  }

  return className[btn];
}


// Button Functional Componnent
const Button = ({ value }) => {

  const { calc, setCalc } = useContext(CalcContext);

  // Method gets performed when user clicks decimal btn
const DecimalClick = () => {

  setCalc({
    ...calc, 
    num: !calc.num.toString().includes('.') ? calc.num + value : calc.num 
  })
    
}

// Method to reset the screen with 0
const ResetClick = () => {
  setCalc({sign: '', num: 0, res: 0})
}

// Method to handle the number clicked by the user
const handleClickButton = () => {
  const numberString = value.toString();

  let numberValue;

  if(numberString === '0' && calc.num === 0){

    numberValue = "0";

  }else{

    numberValue = Number(calc.num + numberString);
  }

  setCalc({
    ...calc,
    num: numberValue
  })
}

// Method to be performed when user clicks arithmetic operator btn as +  -  * or /
const SignClick = () => {
  setCalc({
    sign: value,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0
  })
}

// Method to perform arithmetic operation after equals btn is clicked
const EqualsClick = () => {

  if(calc.res && calc.num){

    const math = (a, b, sign) =>{ 

    const result = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      'x': (a, b) => a * b,
      '/': (a, b) => a / b,
    }

   return result[sign](a,b);

  }

  setCalc({
    res: math(calc.res, calc.num, calc.sign),
    sign: '',
    num: 0
  });

  }
}

// Method to perform percent operation of operand
const PercentClick = () => {

  setCalc({
    num: (calc.num / 100),
    res: (calc.res / 100),
    sign: ''
  });


}

// Method to perform operation or +/- operator i.e to add -/+ as prefix to number
const InvertClick = () => {
  setCalc({
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: ''
  });
}

  const handleBtnClick = () => {

    const results = {
      '.': DecimalClick,
      'AC': ResetClick,
      '/': SignClick,
      'x': SignClick,
      '-': SignClick,
      '+': SignClick,
      '=' : EqualsClick,
      '%' : PercentClick, 
      '+/-': InvertClick,
    }

    if(results[value]){
      return results[value]();
    }else{
      return handleClickButton();
    }
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button;
