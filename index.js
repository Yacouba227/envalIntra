const conexEmailValue = document.getElementById("conexEmailValue");
const conexPasswordValue = document.getElementById("conexPasswordValue");
const btnconnexionValid = document.getElementById("connexionValid");
const notification = document.querySelector(".notification");
const h1notification = document.getElementById("h1notification");
const message = document.getElementById("message");
let compteur = 0;
/* 
let user = {
  prenom: "yacoubou",
  password: "azerty",
  email: "yacoubou@gmail.com",
  biographie: "I am a hardCoder",
  question: "mouton",
};
// Vérification de la présence des données dans le stockage local
if (!localStorage.getItem("userData")) {
  localStorage.setItem("userData", JSON.stringify(user));
}
// Récupération des données du stockage local et affichage initial
let objetUser = JSON.parse(localStorage.getItem("userData")); */

let user = JSON.parse(localStorage.getItem("userData")) || {
  prenom: "yacoubou",
  password: "azerty",
  email: "yacoubou@gmail.com",
  biographie: "I am a hardCoder",
  question: "mouton",
};

// Vérification de la présence des données dans le stockage local
if (!localStorage.getItem("userData")) {
  localStorage.setItem("userData", JSON.stringify(user));
}
/********************************************************** */

// Récupération des données du stockage local et affichage initial
const objetUser = JSON.parse(localStorage.getItem("userData"));
const timerBlock = document.querySelector('.timerBlock');
h1notification.textContent = "";
btnconnexionValid.addEventListener("click", (e) => {
  e.preventDefault();
  if (conexEmailValue.value != "" && conexPasswordValue.value != "") {
    if (
      conexEmailValue.value === objetUser.prenom &&
      conexPasswordValue.value === objetUser.password
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
        /* notification.style.display = "block";
        h1notification.textContent = "Compte bloqué";
        message.textContent = "Oups !!! Votre compte est temporairement bloqué";
        setTimeout(() => {
          notification.style.display = "none";
        }, 3000); */
          timerBlock.style.display = "block";
          setTimeout(() => {
          timerBlock.style.display = "none";
        }, 30000);
        tempsBlock();
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
    }, 300000);
  }
});
function tempsBlock() {
  const timer = document.getElementById("timer");
  const stargMinutes = 5;
  let temps = stargMinutes * 60;
  setInterval(updateCountdown, 1000);
  function updateCountdown() {
    //const heur = Math.floor(temps/3600);
    const minute = Math.floor(temps / 60);
    let second = temps % 60;
    second = second < 10 ? "0" + second : second;
    //minute = minute < 10 ? '0' + minute : minute;
    timer.innerHTML = `00:0${minute}:${second}`;
    temps--;
  }
  /* const interval = setInterval(function(){
    temps--;
    //timer.textContent = formatTime(temps);
    if (temps <= 0) {
      clearInterval(interval);
      timer.textContent = '00:00:00'
    }
  }, 1000) */
}

