function salida() {
  const boton = document.getElementById('salida');
// Agrega un listener de eventos al botón
boton.addEventListener('click', function() {
  // Muestra la alerta cuando se hace clic en el botón
  Swal.fire({
    title: "Registro exitoso!",
    text: "El registro de salida de materiales se realizo correctamente",
    icon: "success"
  });
});
}

