// src/assets/js/sideBar.js

// Función para cargar el navbar
function loadNavbar() {
  fetch("src/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("navbarContainer").innerHTML = html;
    })
    .catch((err) => console.warn("Algo salió mal al cargar el navbar.", err));
}

// Función para cargar los módulos
function loadModule(modulePath) {
  fetch(modulePath)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("moduleContainer").innerHTML = html;

      // Inicializa DataTables si estamos cargando el módulo de usuarios
      if (modulePath.includes('usuarios.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('centros.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('programasFormacion.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('areas.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('sitios.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('tipoDeSitios.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('bodega.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('municipio.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
    })
    .catch((err) => console.warn("Algo salió mal al cargar el módulo.", err));
}

// Función para inicializar DataTables en la tabla con ID #example
function initializeDataTable() {
  const dataTable = new simpleDatatables.DataTable("#example", {
    searchable: true,
    fixedHeight: true,
    perPage: 4,
    sortable: false,
  });
}

// Manejo del botón de menú hamburguesa
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("mainContent").classList.toggle("collapsed");
});

// Inicializar el navbar al cargar la página
document.addEventListener("DOMContentLoaded", loadNavbar);

// Inicializa los submenús colapsables de Bootstrap
document.querySelectorAll(".collapse").forEach((collapse) => {
  collapse.addEventListener("shown.bs.collapse", function () {
    this.classList.add("show");
  });
  collapse.addEventListener("hidden.bs.collapse", function () {
    this.classList.remove("show");
  });
});
