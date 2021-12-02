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
  const words = textarea.value.split('');
  let contador = 500;
  textarea.addEventListener('keyup', () => {
    for (let i = 0; i < words.length; i += 1) {
      contador -= 1;
      counter.innerText = contador;
    }
  });
}
countCaracter();
