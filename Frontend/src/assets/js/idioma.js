document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
      languageSelect.addEventListener('change', function() {
        // Tu código para manejar el cambio de idioma
        console.log(`Selected language: ${this.value}`);
      });
    } else {
      console.error('Element with ID "languageSelect" not found');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    fetch('/Frontend/src/assets/en/english.json')
      .then(response => response.json())
      .then(data => {
        // Usa los datos del JSON aquí
        console.log(data);
        // Por ejemplo, podrías ajustar el valor del select según el idioma
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
          languageSelect.value = 'es'; // Ajusta según el idioma cargado
        }
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
      });
  });
  


// document.addEventListener('DOMContentLoaded', function() {
//     let translations;
//     const languageSelect = document.getElementById('language-select');
  
//     // Cargar traducciones desde el archivo JSON
//     fetch('/Frontend/src/assets/en/english.json')
//         .then(response => response.json())
//         .then(data => {
//             translations = data;
//             // Configurar idioma predeterminado
//             const defaultLang = 'es'; // Cambiar si quieres otro idioma por defecto
//             languageSelect.value = defaultLang;
//             updateLanguage(defaultLang);
//         });
  
//     function updateLanguage(lang) {
//         document.querySelectorAll('[data-translate]').forEach(element => {
//             const key = element.getAttribute('data-translate');
//             if (translations[lang] && translations[lang][key]) {
//                 element.textContent = translations[lang][key];
//             }
//         });
//     }
  
//     // Cambiar idioma según la selección del usuario
//     languageSelect.addEventListener('change', function() {
//         const lang = this.value;
//         updateLanguage(lang);
//     });
//   });
  