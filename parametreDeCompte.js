const modifiPassword = document.getElementById("modifiPassword");
const supprimCompt = document.getElementById("supprimCompt");
const mdpSetting = document.querySelector(".mdpSetting");
const frm = document.getElementById("frm");
const nomValue = document.getElementById("nomValue");
const emailValue = document.getElementById("emailValue");
const biographieValue = document.getElementById("biographieValue");
const sendMessage = document.getElementById("sendMessage");
const notification = document.querySelector(".notification");
const notification1 = document.getElementById("notification1");
const message = document.getElementById("message");
modifiPassword.addEventListener("click", (e) => {
  if (e.target) {
    mdpSetting.style.display = "block";
  }
});
frm.addEventListener("click", (e) => {
  if (e.target) {
    mdpSetting.style.display = "none";
  }
});

let userProfil = [];

// Vérification de la présence des données dans le stockage local
if (!localStorage.getItem("profilData")) {
  localStorage.setItem("profilData", JSON.stringify(userProfil));
}

// Récupérez le tableau depuis le stockage local
userProfil = JSON.parse(localStorage.getItem("profilData"));

function modifierProf() {
  const nom = nomValue.value;
  const email = emailValue.value;
  const biographie = biographieValue.value;

  // Ajoutez la nouvelle tâche au tableau userProfil
  userProfil.push({
    nomProf: nom,
    emailPro: email,
    biographieProf: biographie,
  });
  // Sauvegardez le tableau mis à jour dans le localStorage
  localStorage.setItem("profilData", JSON.stringify(userProfil));

  // Réinitialisez les champs de saisie
  nomValue.value = "";
  emailValue.value = "";
  biographieValue.value = "";
}
notification1.textContent = "";
message.textContent = "";
sendMessage.addEventListener("click", () => {
  if (
    nomValue.value === "" ||
    emailValue.value === "" ||
    biographieValue.value === ""
  ) {
    notification.style.display = "block";
    notification1.textContent = "Message";
    message.textContent = "Veuillez remplire ces differents champs de saie";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  } else {
    notification.style.display = "block";
    notification1.textContent = "Données personnelles";
    message.textContent = "La mise à jour a été effectuée avec success";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
  modifierProf();
});

// Pour la photo
//const mieu = document.getElementById('mieu');
const essaie = document.querySelector(".essaie");
const modifiPhoto = document.getElementById("input-file");
const supprimphoto = document.getElementById("supprimphoto");
const image = document.querySelector(".image");

function saveImageToLocalStorage(imageData) {
  const userPhotos = JSON.parse(localStorage.getItem("photoData")) || [];

  // Add the new image data to the userPhotos array
  userPhotos.push({ imageData });

  // Save the updated userPhotos array back to local storage
  localStorage.setItem("photoData", JSON.stringify(userPhotos));
}

function displayImageFromLocalStorage() {
  const userPhotos = JSON.parse(localStorage.getItem("photoData")) || [];

  if (userPhotos.length > 0) {
    // Retrieve the latest image data from the array
    const latestImageData = userPhotos[userPhotos.length - 1].imageData;

    // Display the image
    image.innerHTML = `<img src="${latestImageData}" alt="Avatar" id="avatarProfil" />`;
    essaie.innerHTML = `<img src="${latestImageData}" alt="Avatar" id="mieu" />`;
  }
}

modifiPhoto.addEventListener("change", () => {
  const file = modifiPhoto.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function () {
      const imageData = reader.result;
      essaie.innerHTML = `<img src="${imageData}" alt="Avatar" id="mieu" />`;
      image.innerHTML = `<img src="${imageData}" alt="Avatar" id="avatarProfil" />`;

      // Save the image data to local storage
      saveImageToLocalStorage(imageData);
    };

    reader.readAsDataURL(file);
  }
});

function removeImageFromLocalStorage() {
  const userPhotos = JSON.parse(localStorage.getItem("photoData")) || [];

  if (userPhotos.length > 0) {
    // Remove the latest image data from the array
    userPhotos.pop();

    // Save the updated userPhotos array back to local storage
    localStorage.setItem("photoData", JSON.stringify(userPhotos));
  }
}

supprimphoto.addEventListener("click", () => {
  // Remove the image from local storage
  removeImageFromLocalStorage();

  // Clear the image on the webpage
  image.innerHTML = "";
  essaie.innerHTML = "";

  // Display a message to confirm the image removal
  const notification = document.querySelector(".notification");
  const notification1 = document.getElementById("notification1");
  const message = document.getElementById("message");
  notification.style.display = "block";
  notification1.textContent = "Image supprimée";
  message.textContent = "L'image a été supprimée avec succès";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
  location.reload();
});

// Display the latest saved image when the page loads
displayImageFromLocalStorage();
// Modification et confirmation du mot de passe

// ...

let objetUserRecup = JSON.parse(localStorage.getItem("userData")) || {};

envoyerNvMdp.addEventListener("click", (event) => {
  event.preventDefault();
  modificationPassword();
});

function modificationPassword() {
  let objetUserRecup = JSON.parse(localStorage.getItem("userData")) || {};
  const ancienPassword = ancienMdp.value;
  const newPassword = nouveauMdp.value;
  const confirmPassword = confirmationMdp.value;
  if (ancienPassword === objetUserRecup.password) {
    if (newPassword === confirmPassword) {
      // Update the password in the objetUserRecup object
      objetUserRecup.password = newPassword;

      // Update the password in local storage
      localStorage.setItem("userData", JSON.stringify(objetUserRecup));

      // Display a success notification
      displaySuccessNotification("Mot de passe modifié avec succès");
    } else {
      displayErrorNotification("Le nouveau mot de passe et la confirmation ne correspondent pas");
    }
  } else{
    displayErrorNotification("Ancien mot de passe incorrect");
  }

  // Reset the password input fields
  ancienMdp.value = "";
  nouveauMdp.value = "";
  confirmationMdp.value = "";
}

// ...


envoyerNvMdp.addEventListener("click", (event) => {
  event.preventDefault();
  modificationPassword();
});

function displaySuccessNotification(message) {
  displayNotification("Succès", message);
}

function displayErrorNotification(message) {
  displayNotification("Erreur", message);
}

function displayNotification(title, message) {
  const notification = document.querySelector(".notification");
  const notification1 = document.getElementById("notification1");
  const messageElement = document.getElementById("message");

  notification.style.display = "block";
  notification1.textContent = title;
  messageElement.textContent = message;

  setTimeout(() => {
    notification.style.display = "none";
  }, 2500);
}


envoyerNvMdp.addEventListener("click", (event) => {
  event.preventDefault();
  modificationPassword();
});


