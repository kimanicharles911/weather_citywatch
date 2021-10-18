import {useState, useEffect} from "react";

const FormInputComponent = ({cityColocatorFuncProp}) => {

  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    cityColocatorFuncProp(userInput);
  }, [cityColocatorFuncProp, userInput])

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
