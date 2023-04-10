function validateForm(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre-input").value;
    const apellido = document.getElementById("apellido-input").value;
    const email = document.getElementById("email-input").value;
    const whatsapp = document.getElementById("whatsapp-input").value;
    const tema = document.getElementById("tema-input").value;
    const comentario = document.getElementById("comentario-input").value;

    if (!nombre || !apellido || !email || !whatsapp || !tema || !comentario) {
      alert("Por favor, complete todos los campos.");
      return false;
    }


    e.target.submit();
    

  }






const form = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const telefonoInput = document.querySelector("#telefono");
const tipoReclamoInput = document.querySelector("#tipo-reclamo");
const descripcionInput = document.querySelector("#descripcion");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validarInputs()) {
    enviarFormulario();
  }
});

function validarInputs() {
  let esValido = true;

  if (nombreInput.value === "") {
    esValido = false;
    alert("El nombre es obligatorio");
  }

  if (emailInput.value === "") {
    esValido = false;
    alert("El correo electrónico es obligatorio");
  } else if (!validarEmail(emailInput.value)) {
    esValido = false;
    alert("El correo electrónico no es válido");
  }

  if (telefonoInput.value === "") {
    esValido = false;
    alert("El teléfono es obligatorio");
  } else if (!validarTelefono(telefonoInput.value)) {
    esValido = false;
    alert("El teléfono no es válido");
  }

  if (tipoReclamoInput.value === "") {
    esValido = false;
    alert("El tipo de reclamo es obligatorio");
  }

  if (descripcionInput.value === "") {
    esValido = false;
    alert("La descripción del reclamo es obligatoria");
  }

  return esValido;
}

function validarEmail(email) {

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function validarTelefono(telefono) {

  const regexTelefono = /^[\+]?[0-9]{8,}$/ ;
  return regexTelefono.test(telefono);
}

function enviarFormulario() {
 
  alert("El formulario se ha enviado correctamente");
}