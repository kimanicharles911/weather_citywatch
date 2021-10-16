
const FormInputComponent = () => {
  return (
    <section className="form-input">
      <form className="needs-validation mt-3" id="form" novalidate>
        <div className="row g-3 mb-3 justify-content-center">
          <div className="col-sm-3">
            <input type="text" className="form-control border-3" id="todoTaskInput" placeholder="Name of City..." />
            <div className="invalid-feedback">To do Task is required</div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default FormInputComponent
