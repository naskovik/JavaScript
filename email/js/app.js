// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const bntEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');
const formulario = document.getElementById('enviar-mail');




// Eventos
eventListeners();

function eventListeners() {
  // Inicio de la App
  document.addEventListener('DOMContentLoaded', inicioApp);
  // Campos del formulario
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);

  // Boton de enviar
  bntEnviar.addEventListener('click', enviarMail);

  // Boton de reset
  btnReset.addEventListener('click', limpiarFormulario);

  // enviar formulario
  formulario.addEventListener('submit', enviarMail);
}

// Funciones

function inicioApp() {
  bntEnviar.disabled = true;
}

// Comporbar la validez del formulario antes de enviar
function validarCampo() {
  validarLongitud(this);

  // Validar email

  if(this.type === 'email') validarEmail(this);

  if( email.value !== '' && asunto.value !== '' && mensaje.value !== '') 
    bntEnviar.disabled = false;
}

function validarLongitud(campo) {
  // variable que comprueba la longitud
  var lengthCheck = campo.value.length > 0;

  if(lengthCheck) {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } 
  else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}

function validarEmail(campo) {
  const email = campo.value;
  if(email.indexOf('@') === -1 || email.indexOf('@') === email.length - 1){
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
    return false;
  }
  else {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
    return true;
  }
}


function enviarMail(e) {
  const spinnerGif = document.querySelector('#spinner');
  spinnerGif.style.display = 'block';

  e.preventDefault();

  const enviado = document.createElement('img');
  enviado.src = 'img/mail.gif';
  enviado.style.display = 'block';

  setTimeout( () => {
    spinnerGif.style.display = 'none';
    document.getElementById('loaders').appendChild(enviado);
  }, 3000);
}

function limpiarFormulario(e) {
  e.preventDefault();
  formulario.reset();
}
