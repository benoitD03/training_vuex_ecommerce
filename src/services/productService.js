import axios from 'axios';

let baseUrl = "http://localhost:3000";

export default {
    getProduct() {
        return axios.get(`${baseUrl}/products`);
    },
    getOneProduct(id) {
        return axios.get(`${baseUrl}/products/${id}`);
    },
    createProduct(book) {
        return axios.post(`${baseUrl}/products`, book);
    },
    addToCart(product) {
        return new Promise(resolve => {
            let cartInLocalStorage = localStorage.getItem("vuex-training-cart");
            let cart = {};
            //Si notre localStorage est vide
            if (!cartInLocalStorage) {
                product.quantity = 1;
                cart = { products : [product]};
                localStorage.setItem("vuex-training-cart", JSON.stringify(cart));
                resolve(cart);
            } else {
                //Récupération de cart.products (égal array qui contient tous les product dans le panier)
                const products = JSON.parse(localStorage.getItem("vuex-training-cart")).products;
                //Recherche dans cart.products d'un item ayant le même id que product passé en paramètre de la fonction.
                const index = products.findIndex(item => item.id === product.id);
                //Si on ne trouve pas d'id correspondant, on met la quantité à 1 et on ajout product dans cart.products.
                if (index === -1) {
                    product.quantity = 1;
                    cart = {products : [product, ...products]};
                    //Sinon on ajoute 1 à la quantité, et on ne rajoute pas le produit dans cart.products. 
                } else {
                    products[index].quantity += 1;
                    cart = {products : [...products]};
                }
            }
            //Mise à jour du localStorage avec le nouveau cart
            localStorage.setItem("vuex-training-cart", JSON.stringify(cart));
            resolve(cart);
        })
    },
    removeFromCart(product) {
        return new Promise(resolve => {
            //Dans le cas ou la quantité est supérieur à 1
            const products = JSON.parse(localStorage.getItem("vuex-training-cart")).products;
            const index = products.findIndex(item => item.id === product.id);
            products[index].quantity -= 1;
            //Dans le cas ou la nouvelle quantité est égale à 0
            if (products[index].quantity === 0) {
                products.splice(index, 1);
            }

            const cart = {
                products : [ ...products]
            }
            localStorage.setItem("vuex-training-cart", JSON.stringify(cart));
            resolve(cart);
        })
    }
}