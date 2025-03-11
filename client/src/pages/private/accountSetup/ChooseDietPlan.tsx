const ChooseDietPlan = () => {
  return (
    <div className="container mb-3 mt-3">
      <div className="row py-4">
        <div className="col-md-8 d-flex flex-column justify-content-start mx-auto">
          <div className="form-check">
            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked />
            <label className="form-check-label" htmlFor="radio1">Anything</label>
          </div>
        </div>
        <hr className="col-md-8 mx-auto" />
      </div>
      <div className="row">
        <div className="col-md-8 d-flex justify-content-center mx-auto">

        </div>
        <hr className="col-md-8 mx-auto mt-2" />
      </div>
      <div className="row">
        <div className="col-md-8 d-flex justify-content-center mx-auto">

        </div>
        <hr className="col-md-8 mx-auto mt-2" />
      </div>
      <div className="row">
        <div className="col-md-8 d-flex justify-content-center mx-auto">

        </div>
        <hr className="col-md-8 mx-auto mt-2" />
      </div>
      <div className="row">
        <div className="col-md-8 d-flex justify-content-end mx-auto">
          <button className="btn custom-btn btn-lg px-4 py-2">Continue</button>
        </div>
      </div>
    </div>
  )
}

export default ChooseDietPlan