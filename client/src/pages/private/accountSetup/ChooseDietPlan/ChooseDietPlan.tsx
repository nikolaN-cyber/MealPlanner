import { useState } from 'react';
import './ChooseDietPlan.css'
import { useUser } from '../../../../hooks/useUser';

const ChooseDietPlan = () => {

  const {handleSetDietPlan} = useUser()
  const [dietPlan, setDietPlan] = useState('')
  const [error, setError] = useState('')

  const handleSetDiet = async () => {
    setError('')
    try {
      const response = await handleSetDietPlan(dietPlan)
    } catch (error: any) {
      console.log(error.message)
      setError('Failed to set diet plan')
    }
  }

  return (
    <div className="container mb-3 mt-4">
      <div className="row py-4">
        <div className="col-md-8 mx-auto radio-label">
          <div className="form-check">
            <label className="form-check-label d-flex align-items-center" htmlFor="radio1">
              <input type="radio" className="form-check-input" id="radio1" name="optradio" value="Anything" onChange={(e) => setDietPlan(e.target.value)}/>
              <i className="fas fa-pizza-slice mx-3" style={{ color: '#ff6347', fontSize: '50px' }}></i>
              <div className="ms-2">Anything</div>
            </label>
          </div>
        </div>
        <hr className="col-md-8 mx-auto mt-2" />
      </div>
      <div className="row py-4">
        <div className="col-md-8 mx-auto radio-label">
          <div className="form-check">
            <label className="form-check-label d-flex align-items-center" htmlFor="radio2">
              <input type="radio" className="form-check-input" id="radio2" name="optradio" value="Paleo" onChange={(e) => setDietPlan(e.target.value)}/>
              <i className="fas fa-drumstick-bite mx-3" style={{ color: '#D2691E', fontSize: '50px' }}></i>
              <div className="ms-2">Paleo</div>
            </label>
          </div>
        </div>
        <hr className="col-md-8 mx-auto mt-2" />
      </div>
      <div className="row py-4">
        <div className="col-md-8 mx-auto radio-label">
          <div className="form-check">
            <label className="form-check-label d-flex align-items-center" htmlFor="radio3">
              <input type="radio" className="form-check-input" id="radio3" name="optradio" value="Keto" onChange={(e) => setDietPlan(e.target.value)}/>
              <i className="fas fa-apple-alt mx-3" style={{ color: '#32CD32', fontSize: '50px' }}></i>
              <div className="ms-2">Keto</div>
            </label>
          </div>
        </div>
        <hr className="col-md-8 mx-auto mt-2" />
      </div>
      <div className="row py-4">
        <div className="col-md-8 mx-auto radio-label">
          <div className="form-check">
            <label className="form-check-label d-flex align-items-center" htmlFor="radio4">
              <input type="radio" className="form-check-input" id="radio4" name="optradio" value="Mediterranean" onChange={(e) => setDietPlan(e.target.value)}/>
              <i className="fas fa-fish mx-3" style={{ color: '#4682b4', fontSize: '50px' }}></i>
              <div className="ms-2">Mediterranean</div>
            </label>
          </div>
        </div>
        <hr className="col-md-8 mx-auto mt-2" />
      </div>
      <div className="row py-4">
        <div className="col-md-8 mx-auto radio-label">
          <div className="form-check">
            <label className="form-check-label d-flex align-items-center" htmlFor="radio5">
              <input type="radio" className="form-check-input" id="radio5" name="optradio" value="Vegan" onChange={(e) => setDietPlan(e.target.value)}/>
              <i className="fas fa-leaf mx-3" style={{ color: '#2d6a4f', fontSize: '50px' }}></i>
              <div className="ms-2">Vegan</div>
            </label>
          </div>
        </div>
        <hr className="col-md-8 mx-auto mt-2" />
      </div>
      <div className="row">
        <div className="col-md-8 d-flex justify-content-end mx-auto">
          <button className="btn custom-btn btn-lg px-4 py-2" onClick={handleSetDiet}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseDietPlan;
