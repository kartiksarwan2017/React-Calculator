import './App.css';
import Header from './components/Header/Header';
// Importing various functional components
import Wrapper from './components/Wrapper/Wrapper';
import Screen from './components/Screen/Screen';
import ButtonBox from './components/ButtonBox/ButtonBox';
import Button from './components/Button/Button';
import CalcProvider from './context/CalcContext';
import Footer from './components/Footer/Footer';

// creating btnValues Array
const btnValues = [
  ["AC", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

// Functional Component App
function App() {
  return (
    <div>
    <Header />  
    <CalcProvider>  
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button 
              value = {btn}
              key = {i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>    
    <Footer />
    </div>
  );
}

export default App;
