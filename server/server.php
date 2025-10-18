<?php
// Configura tu correo aquí
$destinatario = "ligiahonlessoporte@gmail.com"; // Tu correo donde recibirás los mensajes

// Recoge los datos del formulario
$nombre = $_POST['nombre'] ?? '';
$correo = $_POST['correo'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$comentarios = $_POST['comentarios'] ?? '';

// Validación básica
if (empty($nombre) || empty($correo) || empty($comentarios)) {
  echo "Faltan datos obligatorios.";
  exit;
}

// Construye el mensaje
$asunto = "Consulta desde el formulario web";
$mensaje = "Nombre: $nombre\n";
$mensaje .= "Correo: $correo\n";
$mensaje .= "Teléfono: $telefono\n";
$mensaje .= "Comentarios:\n$comentarios\n";

// Encabezados para que no caiga en spam
$headers = "From: $correo\r\n";
$headers .= "Reply-To: $correo\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envía el correo
if (mail($destinatario, $asunto, $mensaje, $headers)) {
  echo "ok"; // Puedes usar esto para mostrar el modal de éxito
} else {
  echo "error";
}
?>
