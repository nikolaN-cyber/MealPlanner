const LoginForm = () => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>

                <form>
                    {/* Email input */}
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
                    <button type="submit" className="btn custom-btn w-100">
                        Login
                    </button>
                </form>
                <div className="mt-3 text-center">
                    <a href="#" className="d-block">Forgot password?</a>
                    <a href="/register" className="d-block mt-2">Don't have an account? Register</a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm