const boton = document.getElementById('re');
// Agrega un listener de eventos al botón
boton.addEventListener('click', function() {
  // Muestra la alerta cuando se hace clic en el botón
  Swal.fire({
    title: "Registro exitoso!",
    text: "El registro de la entrada  de materiales formativos  se realizo correctamente",
    icon: "success"
  });
});