import { createContext } from "react";

interface AuthContextType {
    accessToken: string | null;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext =  createContext<AuthContextType | undefined>(undefined); 