/* 
I imported the useState & useEffect hook from react.
I created the FormInputComponent passing in the cityLifterFuncProp from the App component.
I created the userInput state variable that stores whatever the user types in after every keypress.
I used the useEffect hook to lift the userInput whenever it changes.
*/
import { useState, useEffect } from "react";

const FormInputComponent = ({ cityLifterFuncProp }) => {

  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    cityLifterFuncProp(userInput);
  }, [cityLifterFuncProp, userInput])

  /* Below is the JSX that enables the user to input the city/town name.
    * The value of the form is set from the userInput state variable which is set by the onChange event on the city/town input element.
  */
  return (
    <section className="form-input">
      <form className="mt-3" id="form">
        <div className="row g-3 mb-3 justify-content-center">
          <div className="col-sm-3">
            <input type="text" className="form-control border-3" id="cityInput" placeholder="Name of City/Town..." value={userInput} onChange={(event) => setUserInput(event.target.value)} />
          </div>
        </div>
      </form>
    </section>
  )
}

export default FormInputComponent
