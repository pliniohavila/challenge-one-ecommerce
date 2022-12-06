

const buttonLogin = document.querySelector('[data-login]');
buttonLogin ? buttonLogin.addEventListener('click', () => {
  window.location.href = '/login.html';
}) : null;

document.querySelector('[data-contact]')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensagem enviada 🥰');
  });

