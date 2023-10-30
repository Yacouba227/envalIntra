const getLocalData = () => JSON.parse(localStorage.getItem("connect"));
//if(!getLocalData()) location.href = "/dashboard.html"
if (!getLocalData()) {
  location.href = "/index.html";
}

let nomDossier = JSON.parse(localStorage.getItem('nom'));
const spanEntete = document.getElementById('spanEntete');
const spanBas = document.getElementById('spanBas');

function azerty(){
    spanBas.textContent = nomDossier;
    spanEntete.textContent = nomDossier;
}
azerty();



const essaie = document.querySelector('.essaie');
function displayImageFromLocalStorage() {
  const userPhotos = JSON.parse(localStorage.getItem("photoData")) || [];

  if (userPhotos.length > 0) {
    // Retrieve the latest image data from the array
    const latestImageData = userPhotos[userPhotos.length - 1].imageData;

    // Display the image
    //image.innerHTML = `<img src="${latestImageData}" alt="Avatar" id="avatarProfil" />`;
    essaie.innerHTML = `<img src="${latestImageData}" alt="Avatar" id="mieu" />`;
  }
}
displayImageFromLocalStorage();