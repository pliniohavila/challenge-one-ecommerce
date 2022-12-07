

export function listProducts() {
  return fetch(`http://localhost:3000/produtos`)
    .then((response) => response.json());
}

export function searchProducts(query) {
  return fetch(`http://localhost:3000/produtos?q=${query}`)
    .then((response) => response.json());
}

export function addProduct(urlImage, category, productName, price, description) {
  return fetch(`http://localhost:3000/produtos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      urlImagem: urlImage,
      categoria: category,
      nome: productName,
      preco: price,
      descricao: description
    })
  })
    .then((response) => {
      return response.body
    })
}

export function productDetail(id) {
  return fetch(`http://localhost:3000/produtos/${id}`)
    .then((response) => response.json());
}