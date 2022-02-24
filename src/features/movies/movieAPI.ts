import axios from 'axios';

const API_URL = "http://localhost:3000/cini";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

const getMovies = async () => {
    const res = await api.get("/movies")
    return res.data
}

export { getMovies }