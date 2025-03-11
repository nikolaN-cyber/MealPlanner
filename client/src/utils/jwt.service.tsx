import { jwtDecode } from "jwt-decode";

export const getIdFromToken = (token: string) => {
    try {
        const decoded: any = jwtDecode(token)
        return decoded?.sub || null;
    } catch (error: any) {
        console.log(error.message)
    }
}