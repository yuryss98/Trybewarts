const loginEmail = document.querySelector('#email');
const loginSenha = document.querySelector('#password');
const button = document.querySelector('#btn');
const checkBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const formMain = document.querySelector('#evaluation-form');
const tagMain = document.querySelector('#main');
const formNome = document.querySelector('#input-name');
const fomrSobreNome = document.querySelector('input-lastname');
const formEmail = document.querySelector('#input-email');
const formCasa = document.querySelector('#house');

function validation(e) {
  e.preventDefault();
  const emailRecebido = loginEmail.value;
  const senhaRecebida = loginSenha.value;
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
function newForm(e) {
  e.preventDefault();
  formMain.innerHTML = '';
  const newForms = document.createElement('form');
  newForms.innerText = '????????????????????';
  newForms.style.order = -1;
  tagMain.appendChild(newForms);
}
btnSubmit.addEventListener('click', newForm);
checkBox.addEventListener('click', habiltaBotao);
button.addEventListener('click', validation);
textarea.addEventListener('input', counterChars);
