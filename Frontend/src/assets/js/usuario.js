function showAlert() {
    let nombre = document.getElementById("nombre").value;
    let documento = document.getElementById("identificacion").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("celular").value;
    let rol = document.getElementById("slcRol").value;
    let cargo = document.getElementById("slcCargo").value;
  
    let mensaje = "Datos ingresados:\n";
    mensaje += "Nombre Completo: " + nombre + "\n";
    mensaje += "Documento: " + documento + "\n";
    mensaje += "Correo Electronico: " + correo + "\n";
    mensaje += "Telefono: " + telefono + "\n";
    mensaje += "Rol: " + rol + "\n";
    mensaje += "Cargo: " + cargo + "\n";
  
    swal("¡Registro exitoso!", mensaje, "success");
  }