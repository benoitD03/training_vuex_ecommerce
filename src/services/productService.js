import axios from 'axios';

let baseUrl = "http://localhost:3000";

export default {
    getProduct() {
        return axios.get(`${baseUrl}/products`);
    },
    createProduct(book) {
        return axios.post(`${baseUrl}/products`, book);
    }
}