import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../services/AuthService"
import { useAuth } from "../../hooks/useAuth"

const LoginForm = () => {

    const {login} = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        try {
            const token = await loginUser({email, password})
            login(token.access_token)
            navigate('/')
        } catch (error) {
            setError('Login failed')
        }
    }

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>

                <form onSubmit={handleLogin}>
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