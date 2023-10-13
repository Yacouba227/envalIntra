const modifiPassword = document.getElementById("modifiPassword");
const supprimCompt = document.getElementById("supprimCompt");
const mdpSetting = document.querySelector(".mdpSetting");
const frm = document.getElementById("frm");
const envoyerNvMdp = document.getElementById("envoyerNvMdp");
const nouveauMdp = document.getElementById("nouveauMdp");
const ancienMdp = document.getElementById("ancienMdp");
const avatarImage = document.getElementById("avatarImage");
const nomValue = document.getElementById("nomValue");
const emailValue = document.getElementById("emailValue");
const biographieValue = document.getElementById("biographieValue");
const sendMessage = document.getElementById("sendMessage");
const modifiPhoto = document.getElementById("modifiPhoto");

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

  // Ajoutez la nouvelle tâche au tableau dataTache
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
console.log("====================================");
console.log(userProfil);
console.log("====================================");
sendMessage.addEventListener("click", () => {
  modifierProf();
});
