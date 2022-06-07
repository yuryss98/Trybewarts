const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
const button = document.querySelector('#btn');

function validation(e) {
  e.preventDefault();
  const emailRecebido = inputEmail.value;
  const senhaRecebida = inputSenha.value;
  if (emailRecebido === 'tryber@teste.com' && senhaRecebida === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', validation);
