import { RegisterUser } from "../models/User";

export const register = async (userData: RegisterUser) => {
    try {
        const response = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        if (!response.ok){
            throw new Error("Failed to register")
        }
    } catch (error: any) {
        console.log(error.message)
    }
}