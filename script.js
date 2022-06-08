const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
const button = document.querySelector('#btn');
const checkBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

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
function habiltaBotao() {
  const checado = checkBox.checked;
  if (checado) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
}
function counterChars(e) {
  const maxChars = textarea.maxLength;
  const inputLength = textarea.value.length;
  counter.textContent = (maxChars - inputLength);
  if (inputLength >= maxChars) e.preventDefault();
}

checkBox.addEventListener('click', habiltaBotao);
button.addEventListener('click', validation);
textarea.addEventListener('input', counterChars);
