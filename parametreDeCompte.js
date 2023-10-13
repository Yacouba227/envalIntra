const modifiPassword = document.getElementById("modifiPassword");
const supprimCompt = document.getElementById("supprimCompt");
const mdpSetting = document.querySelector(".mdpSetting");
const frm = document.getElementById("frm");
const envoyerNvMdp = document.getElementById("envoyerNvMdp");
const nouveauMdp = document.getElementById("nouveauMdp");
const ancienMdp = document.getElementById("ancienMdp");
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
const avatarProfil = document.getElementById("avatarProfil");
const modifiPhoto = document.getElementById("input-file");
const supprimphoto = document.getElementById('supprimphoto');
const image = document.querySelector('.image');
console.log('====================================');
console.log(modifiPhoto);
console.log('====================================');
console.log('====================================');
console.log(supprimphoto);
console.log('====================================');
function modifiSupprume(){

modifiPhoto.addEventListener('change', () =>{
  let reader = new FileReader();
  reader.readAsDataURL(modifiPhoto.files[0]);
  reader.addEventListener('load', () =>{
    image.innerHTML = `<img src="${reader.result}" alt="" id="avatarProfil" />`;
  })
})
supprimphoto.addEventListener('click', () =>{
  
})


}
modifiSupprume();