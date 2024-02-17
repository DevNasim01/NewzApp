import { useState } from "react";
import Contaner from "./components/Contaner/Contaner";
import NavBar from "./components/NavBar";
import CatogryContextProvider from "./Context/CatogryContextProvider";

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
    console.log(value)
  };

  return (
    <CatogryContextProvider>
      <NavBar onInputChange={handleInputChange} />
      <Contaner inputValue={inputValue} setInputValue={setInputValue} />
    </CatogryContextProvider>
  )
}

export default App;
