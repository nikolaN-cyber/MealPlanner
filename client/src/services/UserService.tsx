import { RegisterUser } from "../models/User";
import { getIdFromToken } from "../utils/jwt.service";


export const register = async (userData: RegisterUser) => {
    try {
        const response = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        if (!response.ok) {
            throw new Error("Failed to register")
        }
    } catch (error: any) {
        console.log(error.message)
    }
}

export const getProfile = async () => {
    try {
        const token = localStorage.getItem('access_token')
        if (!token) throw new Error("Token not found");

        const userId = getIdFromToken(token)
        if (!userId) throw new Error("Invalid token");

        const response = await fetch(`http://localhost:3000/users/profile/${userId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            throw new Error("Failed to fetch user profile");
        }
        return await response.json()
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const setDietGoal = async (dietGoal: string) => {
    try {
        const token = localStorage.getItem('access_token')
        if (!token) throw new Error("Token not found");

        const userId = getIdFromToken(token)
        if (!userId) throw new Error("Invalid token");

        const response = await fetch(`http://localhost:3000/users/set-diet-plan/${userId}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                dietGoal: dietGoal,
              }),
        })

        if (!response.ok) {
            throw new Error("Failed to set diet plan");
        }
        return await response.json()
    } catch (error: any) {
        throw new Error(error.message)
    }
}