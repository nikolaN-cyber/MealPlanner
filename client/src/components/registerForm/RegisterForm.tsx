import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const { handleRegister } = useUser()
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        try {
            await handleRegister({ email, password, firstName, lastName })
            navigate('/login')
        } catch (error) {
            setError("Registration failed, please try again!")
        }
    }

    return (
        <div data-aos="zoom-in" className="card shadow-sm">
            <div className="card-body">
                <h2 className="text-center mb-4">Register for free</h2>

                {error && <p className="text-danger text-center">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
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
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn custom-btn w-100">
                        Register
                    </button>
                </form>
                <div className="mt-3 text-center">
                    <a href="/login" className="d-block mt-2">Already have an account? Sign in now!</a>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm