import { addProduct } from '../services/services.js';

const form = document.querySelector('[data-newProduct]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const urlImage = event.target.querySelector('[data-type="image"]').value;
    const category = event.target.querySelector('[data-type="category"]').value;
    const productName = event.target.querySelector('[data-type="productName"]').value;
    const price = event.target.querySelector('[data-type="price"]').value;
    const description = event.target.querySelector('[data-type="description"]').value;

    addProduct(urlImage, category, productName, price, description)
    .then(() => {
      alert('Cadastro concluído 🤩')
    });
});