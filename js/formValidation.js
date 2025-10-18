// --- Form Validation & Email Sending Script ---
// Valida el formulario y envía los datos al servidor PHP para enviar el correo

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formularioContacto');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Validación con Bootstrap
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    form.classList.remove('was-validated');

    // Recoge los datos del formulario
    const formData = new FormData(form);

    // Enviar los datos al servidor PHP
    fetch(form.action, {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      if (data.trim() === "ok") {
        const modal = new bootstrap.Modal(document.getElementById('modalExito'));
        modal.show();
        form.reset();
      } else {
        mostrarError("Hubo un problema al enviar el formulario. Intenta más tarde.");
      }
    })
    .catch(error => {
      console.error("Error de conexión:", error);
      mostrarError("No se pudo conectar con el servidor. Verifica tu conexión.");
    });
  });

  // Función para mostrar alertas de error
  function mostrarError(mensaje) {
    const alerta = document.createElement('div');
    alerta.className = 'alert alert-danger mt-3';
    alerta.textContent = mensaje;
    form.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 5000);
  }
});
