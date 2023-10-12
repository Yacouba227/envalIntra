const modifiPassword = document.getElementById('modifiPassword');
const supprimCompt = document.getElementById('supprimCompt');
const mdpSetting = document.querySelector('.mdpSetting');
const frm = document.getElementById('frm');
const envoyerNvMdp = document.getElementById('envoyerNvMdp');
const nouveauMdp = document.getElementById('nouveauMdp');
const ancienMdp = document.getElementById('ancienMdp');
const avatarImage = document.getElementById('avatarImage');
const nomValue = document.getElementById('nomValue');
const emailValue = document.getElementById('emailValue');
const sendMessage = document.getElementById('sendMessage');

modifiPassword.addEventListener("click", (e) => {
    if (e.target) {
        mdpSetting.style.display = 'block';
    }
  });
  frm.addEventListener("click", (e) => {
    if (e.target) {
        mdpSetting.style.display = 'none';
    }
  });
