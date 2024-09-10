// Obtén los elementos de los botones
const botonVerificacion = document.getElementById('verificacion');
const botonRegistrar = document.getElementById('registrar');

// Agrega un listener de eventos al botón de verificación
botonVerificacion.addEventListener('click', function() {
  // Muestra la alerta cuando se hace clic en el botón
  Swal.fire({
    title: "¡Iniciando!...",
    text: "Iniciando verificacion por medio de escaner",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
    
  });
});

// Agrega un listener de eventos al botón de registro
botonRegistrar.addEventListener('click', function() {
  // Muestra la alerta cuando se hace clic en el botón
  Swal.fire({
    title: "Registro exitoso!",
    text: "El registro de verificacion de materiales se realizo correctamente",
    icon: "success"
  });
});


