// src/assets/js/sideBar.js
let myChart, chart, char;
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
  /* 
  const localIdioma = localStorage.getItem("selectedLanguage")
  console.log(selectedLanguage);
  loadLanguage(selectedLanguage) */

  const localIdioma = localStorage.getItem("selectedLanguage");

  fetch(modulePath)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("moduleContainer").innerHTML = html;

      if (modulePath.includes("usuarios.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("centros.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("sedes.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("programaFormacion.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("fichas.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("areas.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("sitios.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("tipoDeSitios.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("municipio.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("entradaBodega.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("salidaBodega.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("verificacion.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("peticion.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("entrada.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("salida.html")) {
        setTimeout(initializeDataTable, 100);
        setTimeout(loadLanguage(localIdioma), 100);
      }
      if (modulePath.includes("acercaDe.html")) {
        setTimeout(loadLanguage(localIdioma), 100);
      }
    })
    .catch((err) => console.warn("Algo salió mal al cargar el módulo.", err));
}

// Función para inicializar DataTables en la tabla con ID #example
function initializeDataTable() {
  const dataTable = new simpleDatatables.DataTable("#example", {
    searchable: true,
    fixedHeight: true,
    perPage: 10,
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
    },
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
// Refresh en el Inicio
document.querySelector(".nav-link").addEventListener("click", function () {
  location.reload();
});

function loadLanguage(lang) {
  console.log(`Cargando idioma: ${lang}`);
  fetch(`../Frontend/src/assets/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelectorAll("[data-translate]").forEach((element) => {
        const translateKey = element.getAttribute("data-translate");
        if (data[translateKey]) {
          element.textContent = data[translateKey]; // Reemplazar el contendo para traducir
        }
      });
    })
    .catch((error) =>
      console.error("Error al cargar el archivo de idioma:", error)
    );
}

// Configuraremos el idioma
window.addEventListener("DOMContentLoaded", () => {
  // Función para cargar el archivo de idioma

  const lenguaje = localStorage.getItem("selectedLanguage");

  const savedLang = localStorage.getItem("selectedLanguage") || "es"; // 'es' por defecto
  loadLanguage(savedLang);
  // Detectar el clic en el selector de idioma y cambiar el idioma
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function () {
      const selectedLang = item.getAttribute("data-lang");
      localStorage.setItem("selectedLanguage", selectedLang); // Guarda el idioma en localStorage
      document.querySelector(".selected-lang").textContent = item.textContent;
      loadLanguage(selectedLang);
      localStorage.getItem("selectedLanguage");
    });
  });
});
// Graficas Charjs
document.addEventListener("DOMContentLoaded", function () {
  let ctx = document.getElementById("barras").getContext("2d");

  const graficaIngles = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ];

  const graficaEspanol = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
  ];

  const graficaIngle = ["Material Output"];

  const graficaEspano = ["Salida Material"];

  const idioma = localStorage.getItem("selectedLanguage");

  console.log(idioma, "hola");

  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: idioma == "es" ? graficaEspanol : graficaIngles,
      datasets: [
        {
          label: idioma == "es" ? graficaEspano : graficaIngle,
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let ctm = document.getElementById("circular").getContext("2d");

  const graficaIngles = [
    "TIC",
    "Agriculture",
    "Gastronomy",
    "Enviromental",
    "Turism",
  ];
  const graficaEspanol = [
    "Tic",
    "Agropecuario",
    "Gastronomia",
    "Ambiental",
    "Turismo",
  ];

  const graficaIngle = ["Material Usage"];

  const graficaEspano = ["Uso Material"];

  const idioma = localStorage.getItem("selectedLanguage");

  console.log(idioma, "hola");

  let chart = new Chart(ctm, {
    type: "pie",
    data: {
      labels: idioma == "es" ? graficaEspanol : graficaIngles,
      datasets: [
        {
          label: idioma == "es" ? graficaEspano : graficaIngle,
          data: [40, 50, 60, 20, 30],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let lineas = document.getElementById("lineas").getContext("2d");

  const graficaIngles = [
    "Shovels",
    "Computers",
    "Desks",
    "Vegetables",
    "Boots",
    "Network Cables",
  ];

  const graficaEspanol = [
    "Palas",
    "Computadores",
    "Escritorios",
    "Verduras",
    "Botas",
    "Cables de red",
  ];

  const graficaIngle = ["Most Requested Materials"];

  const graficaEspano = ["Materiales mas Solicitados"];

  const idioma = localStorage.getItem("selectedLanguage");

  console.log(idioma, "hola");

  let char = new Chart(lineas, {
    type: "line",
    data: {
      labels: idioma == "es" ? graficaEspanol : graficaIngles,
      datasets: [
        {
          label: idioma == "es" ? graficaEspano : graficaIngle,
          data: [50, 30, 15, 45, 100, 42],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let polarArea = document.getElementById("polarArea").getContext("2d");

  const graficaIngles = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ];

  const graficaEspanol = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
  ];

  const graficaIngle = ["Material Output"];

  const graficaEspano = ["Salida Material"];

  const idioma = localStorage.getItem("selectedLanguage");

  console.log(idioma, "hola");

  let mChart = new Chart(polarArea, {
    type: "polarArea",
    data: {
      labels: idioma == "es" ? graficaEspanol : graficaIngles,
      datasets: [
        {
          label: idioma == "es" ? graficaEspano : graficaIngle,
          data: [25, 19, 1, 16, 8, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
