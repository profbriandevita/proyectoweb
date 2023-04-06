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

    // Aquí puedes agregar más validaciones según sea necesario.

    // Si todas las validaciones pasan, envía el formulario.
    e.target.submit();

  }