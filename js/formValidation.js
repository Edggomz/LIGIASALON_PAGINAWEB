// --- Form Validation Script ---
// maneja el envio del formulario
// No hace nada complejo va, pero al menos valida y muestra el modal bonito.

const form = document.getElementById('formularioContacto');

// Aquí escuchamos el evento submit del formulario, nada complicado.
form.addEventListener('submit', function (event) {
  event.preventDefault(); // esto de aqui Evita el envío automático del formulario.
  event.stopPropagation(); // aqui lo que hace es previene propagación del evento, por si acaso.

  // Validamos los campos del formulario según las reglas que defini en el HTML 
  // lo de los numeros, letras y la cantidad de caracteres.
  if (!form.checkValidity()) {
    form.classList.add('was-validated'); // Se marca el formulario como "validado" para Bootstrap.
  } else {
    form.classList.remove('was-validated'); // Limpia la clase si ya estaba puesta ya.

    // Aquí idealmente se enviaría la información al servidor, aunque aún no lo hace porque no he hecho lo de Node.js .
    // Quizá en otra version se integre con PHP o Node.js.
    const modal = new bootstrap.Modal(document.getElementById('modalExito'));
    modal.show(); // Muestra el mensaje de éxito, aunque el correo no se haya mandado de verdad.
    form.reset(); // Limpia todos los campos del formulario.
  }
});
