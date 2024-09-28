// Función para cargar el archivo de idioma
function loadLanguage(lang) {
  console.log(`Cargando idioma: ${lang}`); 
  fetch(`../../Frontend/src/assets/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Seleccionamos todos los elementos que tienen el atributo data-translate
      document.querySelectorAll("[data-translate]").forEach((element) => {
        const translateKey = element.getAttribute("data-translate"); // Obtenemos la clave de data-translate
        if (data[translateKey]) {
          element.textContent = data[translateKey]; // Reemplazamos el texto con la traducción correspondiente
        }
      });
    })
    .catch((error) =>
      console.error("Error al cargar el archivo de idioma:", error)
    );
}

// Detectar el clic en el selector de idioma y cambiar el idioma
document.querySelectorAll(".dropdown-item.menu").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que el enlace haga la recarga de página
    const selectedLang = item.getAttribute("data-lang");
    console.log(`Idioma seleccionado: ${selectedLang}`);
    loadLanguage(selectedLang); // Cargar el idioma correspondiente
  });
});

// Cargar idioma por defecto (español en este caso)
window.addEventListener("DOMContentLoaded", () => {
  loadLanguage("en"); // Cargar español al inicio
});
