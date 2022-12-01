

const buttonLogin = document.querySelector('[data-login]');
buttonLogin.addEventListener('click', () => {
  window.location.href = '/login.html';
});

document.querySelector('form')
  addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensagem enviada 🥰');
  });