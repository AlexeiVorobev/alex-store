import axios from "axios";

const BASE_URL = "https://alex-store-api.onrender.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjRhM2Y0MWFhZjZkZjRiMTMxNzVlZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDkzNTEwOCwiZXhwIjoxNjg1NTM5OTA4fQ.rOR8fPr0Pf5k3wrnRuW9R4oNkQuR_QiKlLVtZ2e28lA"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `"Bearer ${TOKEN}`}
})