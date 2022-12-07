import { productDetail } from '../services/services.js';


(async () => {
  const getURL = new URL(window.location);
  const id = getURL.searchParams.get('id');

  const image = document.querySelector('[data-type="image"]');
  const name = document.querySelector('.card-product__name');
  const price = document.querySelector('.card-product__price');
  const description = document.querySelector('.card-product__description');
  const edit = document.querySelector('[data-edit]');  // /product.html?id=${id}
  const deleteProduct = document.querySelector('[data-delete]');

  const dataProduct = await productDetail(id);

  image.src = dataProduct.urlImagem;
  name.innerHTML = dataProduct.nome;
  price.innerHTML = dataProduct.preco;
  description.innerHTML = dataProduct.descricao;
  edit.href = `/edit-product.html?id=${id}`
  
})();