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