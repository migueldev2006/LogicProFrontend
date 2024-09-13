
function SCANER (){
  // Obtén los elementos de los botones
  const botonVerificacion = document.getElementById('formulario');
  const campos = formulario.elements;
  let isValid = true;
  for (let i = 0; i < campos.length; i++) {
    if (campos[i].value === '') {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    Swal.fire({
      title: "¡Iniciando!...",
      text: "Iniciando verificacion por medio de escaner",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    
    }).then(() => {
      formulario.reset(); // Add this line to reset the form fields
    });
  } else {
    Swal.fire({
      title: "Error",
      text: "Por favor, complete todos los campos",
      icon: "error"
    });
  }
  };



function showalert(){
  const formulario = document.getElementById('formulario');
  const campos = formulario.elements;
  let isValid = true;

  for (let i = 0; i < campos.length; i++) {
    if (campos[i].value === '') {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    Swal.fire({
      title: "¡Registro exitoso!",
      icon: "success"
    }).then(() => {
      formulario.reset(); // Add this line to reset the form fields
    });
  } else {
    Swal.fire({
      title: "Error",
      text: "Por favor, complete todos los campos",
      icon: "error"
    });
  }
}
