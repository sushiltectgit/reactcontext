import logo from './logo.svg';
import './App.css';
import ComA from './CompA';
import { createContext } from 'react';
 
const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div className="App">
    <FirstName.Provider value="Sushil">
    <LastName.Provider value="Kumar">
      <ComA></ComA>
      </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export {FirstName,LastName};
