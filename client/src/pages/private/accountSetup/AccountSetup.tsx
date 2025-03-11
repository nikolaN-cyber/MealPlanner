import { useNavigate } from "react-router-dom"

const AccountSetup = () => {

    const navigate = useNavigate()

    return (
        <div className="container mb-3 mt-3">
            <div className="row py-4">
                <div className="col-md-8 d-flex flex-column justify-content-start mx-auto">
                    <h2>Set up your account</h2>
                    <p>Let's start setting up your account.<br />Help us to get you know better and recommend you food you like.</p>
                </div>
                <hr className="col-md-8 mx-auto" />
            </div>
            <div className="row">
                <div className="col-md-8 d-flex justify-content-center mx-auto">
                    <img className="rounded d-block w-50" src="/images/food1.jpg"></img>
                    <div className="container d-flex justify-content-center flex-column mx-3">
                        <h3>1. Your diet</h3>
                        <p>Enter dietary restrictions or allergies</p>
                    </div>
                </div>
                <hr className="col-md-8 mx-auto mt-2" />
            </div>
            <div className="row">
                <div className="col-md-8 d-flex justify-content-center mx-auto">
                    <img className="rounded d-block w-50" src="/images/food3.jpg"></img>
                    <div className="container d-flex justify-content-center flex-column mx-3">
                        <h3>2. About you</h3>
                        <p>Your height, weight, and future goals</p>
                    </div>
                </div>
                <hr className="col-md-8 mx-auto mt-2" />
            </div>
            <div className="row">
                <div className="col-md-8 d-flex justify-content-center mx-auto">
                    <img className="rounded d-block w-50" src="/images/food4.jpg"></img>
                    <div className="container d-flex justify-content-center flex-column mx-3">
                        <h3>3. Your meals</h3>
                        <p>The meals you eat in a day and your favorite dishes</p>
                    </div>
                </div>
                <hr className="col-md-8 mx-auto mt-2" />
            </div>
            <div className="row">
                <div className="col-md-8 d-flex justify-content-end mx-auto">
                    <button onClick={() => navigate("/account-setup/choose-diet-plan")} className="btn custom-btn btn-lg px-4 py-2">Continue</button>
                </div>
            </div>
        </div>
    )
}
export default AccountSetup