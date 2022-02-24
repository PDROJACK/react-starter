import axios from 'axios';

const API_URL = "http://localhost:3000/cini";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

const getTV = async () => {
    const res = await api.get("/tv")
    return res.data
}

export { getTV }