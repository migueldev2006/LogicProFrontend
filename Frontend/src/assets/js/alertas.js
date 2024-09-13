function alertaUsuario() {
    let nombre = document.getElementById('nombre').value;
    let identificacion = document.getElementById('identificacion').value;
    let correo = document.getElementById('correo').value;
    let celular = document.getElementById('celular').value;
    let rol = document.getElementById('slcRol').value;
    let cargo = document.getElementById('slcCargo').value;
  

    if (nombre !== '' && identificacion !== '' && correo !== '' && celular !== '' && rol !== '' && cargo !== '') {
      swal({
        title: 'Registro exitoso!',
        icon: 'success',
        button: 'Aceptar'
      });
    } else {
      swal({
        title: 'Error al registrar',
        text: 'Por favor, complete todos los campos.',
        icon: 'error',
        button: 'Aceptar'
      });
    }
  }

  function alertaArea() {
    let nombre = document.getElementById("nombre").value;
    let lider = document.getElementById("lider").value;
    let sede = document.getElementById("slcSede").value;
      if (nombre !== '' && lider !== '' && sede !== '') {
        swal({
          title: 'Registro exitoso!',
          icon: 'success',
          button: 'Aceptar'
        });
      } else {
        swal({
          title: 'Error al registrar',
          text: 'Por favor, complete todos los campos.',
          icon: 'error',
          button: 'Aceptar'
        });
      }
    }

  function alertaCentro() {
    let nombre = document.getElementById("nombre").value;

      if (nombre !== '') {
        swal({
          title: 'Registro exitoso!',
          icon: 'success',
          button: 'Aceptar'
        });
      } else {
        swal({
          title: 'Error al registrar',
          text: 'Por favor, complete todos los campos.',
          icon: 'error',
          button: 'Aceptar'
        });
      }
    }
  function alertaFicha() {
    let programa = document.getElementById("slcPrograma").value;
    let ficha = document.getElementById("ficha").value;
    let lider = document.getElementById("lider").value;

      if (programa !== '' && ficha !== '' && lider !== '') {
        swal({
          title: 'Registro exitoso!',
          icon: 'success',
          button: 'Aceptar'
        });
      } else {
        swal({
          title: 'Error al registrar',
          text: 'Por favor, complete todos los campos.',
          icon: 'error',
          button: 'Aceptar'
        });
      }
    }
  function alertaMunicipio() {
    let municipio = document.getElementById("nombre").value;
    let departamento = document.getElementById("slcDepartamento").value;
    
      if (municipio !== '' && departamento !== '') {
        swal({
          title: 'Registro exitoso!',
          icon: 'success',
          button: 'Aceptar'
        });
      } else {
        swal({
          title: 'Error al registrar',
          text: 'Por favor, complete todos los campos.',
          icon: 'error',
          button: 'Aceptar'
        });
      }
    }
  function alertaPrograma() {
    let programa = document.getElementById("nombre").value;
    let area = document.getElementById("slcArea").value;

      if (programa !== '' && area !== '') {
        swal({
          title: 'Registro exitoso!',
          icon: 'success',
          button: 'Aceptar'
        });
      } else {
        swal({
          title: 'Error al registrar',
          text: 'Por favor, complete todos los campos.',
          icon: 'error',
          button: 'Aceptar'
        });
      }
    }
  function alertaSede() {
    let sede = document.getElementById("nombre").value;
    let centro = document.getElementById("slcCentro").value;

      if (sede !== '' && centro !== '') {
        swal({
          title: 'Registro exitoso!',
          icon: 'success',
          button: 'Aceptar'
        });
      } else {
        swal({
          title: 'Error al registrar',
          text: 'Por favor, complete todos los campos.',
          icon: 'error',
          button: 'Aceptar'
        });
      }
    }
  function alertaSitios() {
    let encargado = document.getElementById("slcEncargado").value;
    let sitio = document.getElementById("nombre").value;
    let tipo = document.getElementById("slcTipoSitio").value;

      if (encargado !== '' && sitio !== '' && tipo !== '') {
        swal({
          title: 'Registro exitoso!',
          icon: 'success',
          button: 'Aceptar'
        });
      } else {
        swal({
          title: 'Error al registrar',
          text: 'Por favor, complete todos los campos.',
          icon: 'error',
          button: 'Aceptar'
        });
      }
    }
  function alertaTipos() {
    let nombre = document.getElementById("nombre").value;

      if (nombre !== '') {
        swal({
          title: 'Registro exitoso!',
          icon: 'success',
          button: 'Aceptar'
        });
      } else {
        swal({
          title: 'Error al registrar',
          text: 'Por favor, complete todos los campos.',
          icon: 'error',
          button: 'Aceptar'
        });
      }
    }