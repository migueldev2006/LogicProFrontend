function Alert() {
    let nombre = document.getElementById("nombre").value;
    let sede = document.getElementById("sede").value;
    let municipio = document.getElementById("municipio").value;

  
    let mensaje = "Datos ingresados:\n";
    mensaje += "Nombre: " + nombre + "\n";
    mensaje += "Sede: " + sede + "\n";
    mensaje += "Municipio: " + municipio + "\n";
  
    swal("¡Registro exitoso!", mensaje, "success");
  }