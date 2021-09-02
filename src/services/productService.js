import axios from 'axios';

const baseUrl = "http://localhost:3000";

export default {
    getProduct() {
        return axios.get(`${baseUrl}/products`);
    }
}