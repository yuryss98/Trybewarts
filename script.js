const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const button = document.querySelector('#btn');
const emailRecebido = email.value;

function validation(e) {
  e.preventDefault()

  const senhaRecebida = senha.value;
  if (emailRecebido.textContent === 'abcd@efg') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', validation);
