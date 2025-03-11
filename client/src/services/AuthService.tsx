import { LoginUser } from "../models/User";

export const loginUser = async (user: LoginUser) => {
    try {
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        if (!response.ok){
            throw new Error("Login failed")
        }
        const data = response.json()
        return data;
    } catch (error: any) {
        console.log(error.message)
    }
}