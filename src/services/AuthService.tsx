import axiosInstance from "../configs/axios";

type loginPayload = {
    email: string,
    password: string
}

const login = async (payload: loginPayload) => {
    try {
        const response = axiosInstance.post('/shop/signIn', {
            email: payload.email,
            password: payload.password
        })
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

export { login }