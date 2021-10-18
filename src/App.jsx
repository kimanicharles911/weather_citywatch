/* I imported the useState hook from react. 
  I imported the WelcomeMessageComponent, InstructionsComponent, FormInputComponent and ResultsCardComponent
 */
import { useState } from "react";
import './App.css';
/* */
import WelcomeMessageComponent from './components/WelcomeMessageComponent.jsx';
import InstructionsComponent from './components/InstructionsComponent.jsx';
import FormInputComponent from './components/FormInputComponent.jsx';
import ResultsCardComponent from "./components/ResultsCardComponent.jsx"

/* I prefer arrow function components so I converted the App function to reflect this. */
const App = () => {

  /* I created a state that stores the city/town name as lifted from the FormInputComponent */
  const [city, setCity] = useState("");

  /* I created a function that will be used to lift the user's input from the FormInputComponent to the App component And then set the city state variable */
  const cityLifterFunc = (param) => {
    setCity(param)
  }

  /* Below is the JSX of the App component.
    * I wrap or the imported component in the main HTML element */
  return (
    <main className="container-fluid text-center">
      <WelcomeMessageComponent />
      <InstructionsComponent />
      <FormInputComponent cityLifterFuncProp={cityLifterFunc} />
      <ResultsCardComponent cityProp={city} />
    </main>
  );
}

export default App;
