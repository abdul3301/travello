import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID OX3Z5DVC4hHn_L8hqSDXrX7E6dNcfX6LZaF1uOlrlXI"
    }
})