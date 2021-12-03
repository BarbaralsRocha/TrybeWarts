const buttonHeader = document.getElementById('button-header');
const email = document.getElementById('email');
const password = document.getElementById('password');
const check = document.querySelector('#agreement');
const formsButton = document.querySelector('#submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

buttonHeader.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

formsButton.disabled = true;
check.addEventListener('click', () => {
  if (check.checked) {
    formsButton.disabled = false;
  }
});

function countCaracter() {
  textarea.value = '';
  const contador = 500;
  let caracter = 0;
  textarea.addEventListener('keyup', () => {
    if (contador >= textarea.value.length) {
      caracter = contador - textarea.value.length;
      counter.innerText = `Caracteres: ${caracter}`;
    }
  });
}
countCaracter();

function checkboxValidation() {
  const materias = document.querySelectorAll('.subject');
  materias.
  console.log(materias)
  const materiaChecked = [];
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      materiaChecked.push(materias[i].value);
    }
    console.log(materiaChecked, 'teste');
    return materiaChecked;
  }
}

function validate() {
  formsButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('input-name').value;
    const lastname = document.getElementById('input-lastname').value;
    const emailInput = document.getElementById('input-email').value;
    const house = document.getElementById('house').value;
    const family = document.querySelector('input[name="family"]:checked').value; // referencia :https://backefront.com.br/obter-valor-selecionado-radio-button/
    const forms = document.getElementById('evaluation-form');
    const validateForms = document.getElementById('validate-forms');

    forms.innerHTML = '';
    const formulario = `Nome: ${name} ${lastname}\n Email: ${emailInput}\n Casa: ${house}\n Família: ${family}\n Materia: ${checkboxValidation()}\n`;
    validateForms.innerText = formulario;
  });
}
validate();
