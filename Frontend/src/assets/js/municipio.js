function AlertMunicipio() {
    let nombre = document.getElementById("nombre").value;
    let departamento = document.getElementById("slcDepartamento").value;

  
    let mensaje = "Datos ingresados:\n";
    mensaje += "Nombre: " + nombre + "\n";
    mensaje += "Departamento: " + departamento + "\n";
  
    swal("¡Registro exitoso!", mensaje, "success");
  }