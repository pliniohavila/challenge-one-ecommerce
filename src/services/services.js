

export function listProducts() {
  return fetch(`http://localhost:3000/produtos`)
    .then((response) => response.json());
}

export function searchProducts(query) {
  return fetch(`http://localhost:3000/produtos?q=${query}`)
    .then((response) => response.json());
}