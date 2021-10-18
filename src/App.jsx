import {useState} from "react";
import './App.css';
import WelcomeMessageComponent from './components/WelcomeMessageComponent.jsx';
import InstructionsComponent from './components/InstructionsComponent.jsx';
import FormInputComponent from './components/FormInputComponent.jsx';
import ResultsCardComponent from "./components/ResultsCardComponent.jsx"

const App = () => {

  const [city, setCity] = useState("");

  const cityColocatorFunc = (param) => {
    setCity(param)
  }

  return (
    <main className="container-fluid text-center">
      <WelcomeMessageComponent />
      <InstructionsComponent />
      <FormInputComponent cityColocatorFuncProp={cityColocatorFunc}/>
      <ResultsCardComponent cityProp={city}/>
    </main>
  );
}

export default App;
