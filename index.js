const conexEmailValue = document.getElementById("conexEmailValue");
const conexPasswordValue = document.getElementById("conexPasswordValue");
const btnconnexionValid = document.getElementById("connexionValid");
const notification = document.querySelector(".notification");
const h1notification = document.getElementById("h1notification");
const message = document.getElementById("message");
let compteur = 0;

let user = {
  prenom: "yacoubou",
  password: "azerty",
  question: "mouton",
};
// Vérification de la présence des données dans le stockage local
if (!localStorage.getItem("userData")) {
  localStorage.setItem("userData", JSON.stringify(user));
}
// Récupération des données du stockage local et affichage initial
let objetUser = JSON.parse(localStorage.getItem("userData"));

h1notification.textContent = "";
btnconnexionValid.addEventListener("click", (e) => {
  e.preventDefault();
  if (conexEmailValue.value != "" && conexPasswordValue.value != "") {
    if (
      conexEmailValue.value == objetUser.prenom ||
      conexPasswordValue.value == objetUser.password
    ) {
      window.location.href = "dashboard.html";
      //   notification.style.display = "block";
      //   h1notification.textContent = "Connexion";
      //   message.textContent = "Connexion reuçu";
      //   setTimeout(() => {
      //     notification.style.display = "none";
      //   }, 2000);
    } else if (
      conexEmailValue.value != objetUser.prenom ||
      conexPasswordValue.value != objetUser.password
    ) {
      //alert('email ou password invalid');
      notification.style.display = "block";
      h1notification.textContent = "Connexion";
      message.textContent =
        "Oups !!! La combinaison Identifiant/Password est incorrecte";
      setTimeout(() => {
        notification.style.display = "none";
      }, 3000);
      compteur++;

      if (compteur < 3) {
      } else {
        let info = prompt("La question secrete: Quel est le surnom de Nueve?");
        if (info === "mouton") {
          window.location.href = "dashboard.html";
        }
        notification.style.display = "block";
        h1notification.textContent = "Compte bloqué";
        message.textContent = "Oups !!! Votre compte est temporairement bloqué";
        setTimeout(() => {
          notification.style.display = "none";
        }, 3000);
        btnconnexionValid.disabled = true;
        conexPasswordValue.disabled = true;
        conexEmailValue.disabled = true;
      }
    }
  } else {
    notification.style.display = "block";
    h1notification.textContent = "Information";
    message.textContent = "Veuillez les champs de saisi";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
});
