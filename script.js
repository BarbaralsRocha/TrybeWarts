const buttonHeader = document.getElementById('button-header');
const email = document.getElementById('input-email');
const password = document.getElementById('input-password');

buttonHeader.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá,Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
