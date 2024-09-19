
function scanner(){
  // Obtén los elementos de los botones
  const botonVerificacion = document.getElementById('frmFormulario');
  const campos = botonVerificacion.elements;
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

function showAlert(){
  const formulario = document.getElementById('frmFormulario');
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
      formulario.reset();
      const modalElement = document.getElementById('staticBackdrop');
      const modalInstance = bootstrap.Modal.getInstance(modalElement); 
      modalInstance.hide();
    });
  } else {
    Swal.fire({
      title: "Error",
      text: "Por favor, complete todos los campos",
      icon: "error"
    });
  }
}
