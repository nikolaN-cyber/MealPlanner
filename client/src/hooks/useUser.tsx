import { register } from "../services/UserService";
import { RegisterUser } from "../models/User";

export const useUser = () => {
    const handleRegister = async (userData: RegisterUser) => {
        return await register(userData);
    }

    return {
        handleRegister
    }
}