import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [accessToken, setAccessToken] = useState<string|null>(null);

    useEffect(()=>{
        const storedToken = localStorage.getItem('access_token')
        if (storedToken){
            setAccessToken(storedToken)
        }
    }, []);

    const login = (token: string) => {
        setAccessToken(token);
        localStorage.setItem('access_token', token);
    }

    const logout = () => {
        setAccessToken(null)
        localStorage.removeItem('access_token')
    }

    return (
        <AuthContext.Provider value={{accessToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}