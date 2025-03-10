const RegisterForm = () => {
  return (
    <div data-aos="zoom-in" className="card shadow-sm">
            <div className="card-body">
                <h2 className="text-center mb-4">Register for free</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Last name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <button type="submit" className="btn custom-btn w-100">
                        Register
                    </button>
                </form>
                <div className="mt-3 text-center">
                    <a href="#" className="d-block">Forgot password?</a>
                    <a href="/login" className="d-block mt-2">Already have an account? Sign in now!</a>
                </div>
            </div>
        </div>
  )
}

export default RegisterForm