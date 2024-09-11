function alertArea() {
    let nombre = document.getElementById("nombre").value;
    let personaEncargada = document.getElementById("personaEncargada").value;
    let sede = document.getElementById("slcSede").value;

  
    let mensaje = "Datos ingresados:\n";
    mensaje += "Nombre: " + nombre + "\n";
    mensaje += "Persona Encargada: " + personaEncargada + "\n";
    mensaje += "Sede: " + sede + "\n";
  
    swal("¡Registro exitoso!", mensaje, "success");
  }