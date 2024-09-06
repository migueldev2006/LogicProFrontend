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
    })
    .catch((err) => console.warn("Algo salió mal al cargar el módulo.", err));
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
