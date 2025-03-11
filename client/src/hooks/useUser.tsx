import { register, getProfile, setDietGoal } from "../services/UserService";
import { RegisterUser } from "../models/User";

export const useUser = () => {
    const handleRegister = async (userData: RegisterUser) => {
        return await register(userData);
    }

    const handleGetProfile = async () => {
        return await getProfile();
    }

    const handleSetDietPlan = async (dietGoal: string) => {
        return await setDietGoal(dietGoal);
    }

    return {
        handleRegister,
        handleGetProfile,
        handleSetDietPlan
    }
}