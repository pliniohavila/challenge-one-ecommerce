import { productDetail, editProduct } from '../services/services.js';

(async () => {
  const getURL = new URL(window.location);
  const id = getURL.searchParams.get('id');

  const urlImage = document.querySelector('[data-type="image"]');
  const category = document.querySelector('[data-type="category"]');
  const productName = document.querySelector('[data-type="productName"]');
  const price = document.querySelector('[data-type="price"]');
  const description = document.querySelector('[data-type="description"]');

  const dataProduct = await productDetail(id);
  // const image = new File(['image'], dataProduct.urlImagem, {
  //   type: 'image/png, image/jpeg'
  // });
  category.value = dataProduct.categoria;
  productName.value = dataProduct.nome;
  price.value = parseFloat(dataProduct.preco.slice(2,));
  description.value = dataProduct.descricao;

  const form = document.querySelector('[data-newProduct]');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await editProduct(id, category.value, productName.value, price.value, description.value)
      .then(() => {
        alert('Edição concluída 🤩')
      });
  });

})();


