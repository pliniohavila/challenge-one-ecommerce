

document.querySelector('[data-newProduct]')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
});