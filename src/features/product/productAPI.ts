import axios from 'axios';

const API_URL = "http://localhost:3000";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

const getProductsCall = async (id: string) => {
    const res = await api.get("/products", {
        params: {
            id
        }
    })
    return res.data
}

const addProductsCall = async (product: Object) => {
    const res = await api.post("/products", product)
    return res.status
}

export { getProductsCall, addProductsCall }