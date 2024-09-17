//configurar la carga de imagenes pero no se implemeta
const profilePictureInput = document.getElementById("profilePicture");

const profilePictureImage = document.getElementById("profilePictureImage");

profilePictureInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const base64String = event.target.result;

    profilePictureImage.src = base64String;
  };
  reader.readAsDataURL(file);
});

let myModal = document.getElementById('btnFormulario');
let modal = new bootstrap.Modal(myModal);
modal.show();
