import { listProducts, searchProducts } from '../services/services.js';



function cardProduct(id, urlImage, name, price) {
  const card = document.createElement('div');
  card.className = 'section__body__card-product';
  const contentCard = `
    <img src=${urlImage} />
    <p class="card-product__description">${name}</p>
    <p class="card-product__price">${price}</p>
    <a href="/product.html?id=${id}">Ver Produto</a>
  `
  card.innerHTML = contentCard;
  card.dataset.id = id;

  return card;
}

function showProducts(products) {
  console.log(products);
  const sectionProducts = document.querySelector('.section__body');

  products.forEach((product) => {
    const {id, urlImagem, nome, preco} = product;
    sectionProducts.appendChild(cardProduct(id, urlImagem, nome, preco));
  });
}

(async () => {
  const getURL = new URL(window.location);
  const query = getURL.searchParams.get('q');

  if (query === null) {
    const products = await listProducts();
    showProducts(products);
  } else {
    const products = await searchProducts(query);
    showProducts(products);
  }
})();
