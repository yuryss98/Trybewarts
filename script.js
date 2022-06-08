const loginEmail = document.querySelector('#email');
const loginSenha = document.querySelector('#password');
const button = document.querySelector('#btn');
const checkBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const tagMain = document.querySelector('#main');
const formNome = document.querySelector('#input-name');
const formSobreNome = document.querySelector('#input-lastname');
const formEmail = document.querySelector('#input-email');
const formCasa = document.querySelector('#house');
const formFamily = document.querySelectorAll('.radio-input');
const formCheckbox = document.querySelectorAll('.subject');
const formNota = document.querySelectorAll('.input-nota');

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
function checkedRadio() {
  for (let i = 0; i < formFamily.length; i += 1) {
    if (formFamily[i].checked === true) {
      return formFamily[i].value;
    }
  }
}
function checkedcheckbox() {
  for (let i = 0; i < formCheckbox.length; i += 1) {
    if (formCheckbox[i].checked === true) {
      return formCheckbox[i].value;
    }
  }
}
function checkedRadioNotes() {
  for (let i = 0; i < formNota.length; i += 1) {
    if (formNota[i].checked === true) {
      return formNota[i].value;
    }
  }
}

function newForm(e) {
  while (tagMain.firstChild) {
    tagMain.removeChild(tagMain.lastChild);
  }
  const newPage = document.createElement('form');
  newPage.id = 'form-data';
  newPage.textContent = `Nome: ${formNome.value} ${formSobreNome.value} Email: ${formEmail.value} 
   Casa: ${formCasa.value} Família: ${checkedRadio()} Matérias: ${checkedcheckbox()} 
   Avaliação: ${checkedRadioNotes()} Observações: ${textarea.value}`;
  tagMain.appendChild(newPage);
  e.preventDefault();
}
btnSubmit.addEventListener('click', newForm);
checkBox.addEventListener('click', habiltaBotao);
button.addEventListener('click', validation);
textarea.addEventListener('input', counterChars);
