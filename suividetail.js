let nomDossier = JSON.parse(localStorage.getItem('nom'));
const spanEntete = document.getElementById('spanEntete');
const spanBas = document.getElementById('spanBas');

function azerty(){
    spanBas.textContent = nomDossier;
    spanEntete.textContent = nomDossier;
}
azerty()