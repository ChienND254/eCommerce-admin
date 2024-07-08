import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': 'a1f42561c29e2a27fd2640c9216ac9eb9f9aca4f28633975ddf3fe2bb32d164b19f52a0e9ebfdab810b1d607aab0cd3598377fed4e2b947a1adeac44cc4b2707'
    }
})

export default axiosInstance