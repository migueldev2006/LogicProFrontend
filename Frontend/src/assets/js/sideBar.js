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

      if (modulePath.includes("usuarios.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("centros.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("sedes.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("programaFormacion.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("fichas.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("areas.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("sitios.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("tipoDeSitios.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("municipio.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("entradaBodega.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("salidaBodega.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("verificacion.html")) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes("peticion.html")) {
        setTimeout(initializeDataTable, 100);
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
    paging: true,
    labels: {
      placeholder: "Buscar...", // Placeholder en el campo de búsqueda
      perPage: "Mostrar resultados por página", // Selección de resultados por página
      noRows: "No se encontraron registros", // Mensaje cuando no hay registros
      info: "Mostrando del {start} al {end} de {rows} registros", // Información sobre los registros
      previous: "Anterior", // Botón "Anterior"
      next: "Siguiente", // Botón "Siguiente"
      loading: "Cargando...", // Mensaje de carga
      infoFiltered: " (filtrado de {rows} registros en total)", // Información cuando se filtran resultados
      first: "Primero", // Botón "Primero"
      last: "Último", // Botón "Último"
    }
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

document.querySelector('.nav-link').addEventListener('click', function () {
  location.reload();
});

let translations;

// Cargar traducciones desde el archivo JSON
fetch('Frontend/src/assets/en/english.json')
  .then(response => response.json())
  .then(data => {
    translations = data;
    // Cargar el idioma predeterminado
    updateLanguage('es');
  });

function updateLanguage(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[lang][key] || element.textContent;
  });
}

// Cambiar idioma según el estado del checkbox
document.querySelector('.check').addEventListener('change', function() {
  const lang = this.checked ? 'en' : 'es';
  updateLanguage(lang);
});
