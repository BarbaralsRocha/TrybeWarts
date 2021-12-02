const buttonHeader = document.getElementById('button-header');
const email = document.getElementById('email');
const password = document.getElementById('password');
const check = document.querySelector('#agreement');
const formsButton = document.querySelector('#submit-btn');

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
