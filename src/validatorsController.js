
const validators = {
  name: ''
}

const errorsType = [
  'valueMissing'
];

const errorMessages = {
  name: {
    valueMissing: 'O campo nome não pode estar vazio'
  }
}

function showErrorMessage(inputType, input) {
  let message = '';

  errorsType.forEach((error) => {
    if (input.validity[error]) {
      message = errorMessages[inputType][error];
    }
  });

  return message
}



function validator(input) {
 const typeInput = input.dataset.type;

 if (validators[typeInput]) {
  validators[typeInput](input);
 }

 // Se tiver correto, remove mensagem de error e efeito visual
 if (input.validity.valid) {
  input.parentElement.classList.remove('field-invalid');
  input.parentElement.querySelector('.message-error').innerHTML = '';
 } 
 // Caso esteja faltando com algum requisito
 // Adiciona efeito visual e mostra mensagem de error
 else {
  input.parentElement.classList.add('field-invalid');
  input.parentElement.querySelector('.message-error')
    .innerHTML = showErrorMessage(typeInput, input);
 }
}


function validatorTextarea(input) {
  if(input.validity.valid) {
    input.style.outline = 'none';
    input.setCustomValidity('');
  } else {
    input.setCustomValidity('Deve haver uma mensagem com no máximo 120 caracteres.');
    input.style.outline = '2px solid rgb(187, 45, 45)';
  }
  // ^[\S\s]{5,40}
}


const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('blur', (event) => {
    validator(event.target)
  });
});

const textarea = document.querySelectorAll('textarea');
textarea.forEach((text) => {
  text.addEventListener('blur', (event) => {
    validatorTextarea(event.target)
  });
});