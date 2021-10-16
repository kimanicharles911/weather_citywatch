import './App.css';
import WelcomeMessageComponent from './components/WelcomeMessageComponent.jsx';
import InstructionsComponent from './components/InstructionsComponent.jsx';
import FormInputComponent from './components/FormInputComponent.jsx';
import ResultsCardComponent from "./components/ResultsCardComponent.jsx"

const App = () => {
  return (
    <main class="container-fluid text-center">
      <WelcomeMessageComponent />
      <InstructionsComponent />
      <FormInputComponent />
      <ResultsCardComponent />
    </main>
  );
}

export default App;
