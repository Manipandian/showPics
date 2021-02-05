import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Y3wc50y6hSuCbD-jApXPKGoAbJpaO4TX-rQ6WUB8scg"
    }
})