const suiviTbody = document.getElementById("suiviTbody");
suiviTableau.forEach((item) => {
  suiviTbody.innerHTML += `
  <tr>
  <td>${item.suiviid}</td>
  <td id="suiviName">${item.suiviname}</td>
  <td>${item.suividate}</td>
  <td>${item.suiviraport}</td>
  <td><a href="suividetail.html"><button id="voirSuivi">Voir</button></a></td>
</tr>
    `;
});

const inputValue = document.getElementById("inputValue");
function search(trie) {
    suiviTbody.innerHTML = "";
    suiviTableau.forEach((element) => {
   
    if (element.suiviname.toLowerCase().includes(trie)) {
      suiviTbody.innerHTML += `
      <tr>
      <td>${element.suiviid}</td>
      <td id="suiviName">${element.suiviname}</td>
      <td>${element.suividate}</td>
      <td>${element.suiviraport}</td>
      <td><a href="suividetail.html"><button id="voirSuivi">Voir</button></a></td>
  </tr>
    `;
    }
  });
  if ((suiviTbody.innerHTML === "")) {
    suiviTbody.innerHTML = `
          <tr>
  <td colspan="5">Aucun element trouver</td>
</tr>
          `;
  }
}
inputValue.addEventListener("input", () => {
  const inputValueRecuper = inputValue.value.toLowerCase();
  search(inputValueRecuper);
});

/*VERSION LONGUE*/
const compare = function (ids, asc) {
  return function (row1, row2) {
    const tdValue = function (row, ids) {
      return row.children[ids].textContent;
    };
    const tri = function (v1, v2) {
      if (v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)) {
        return v1 - v2;
      } else {
        return v1.toString().localeCompare(v2);
      }
      return v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2);
    };
    return tri(
      tdValue(asc ? row1 : row2, ids),
      tdValue(asc ? row2 : row1, ids)
    );
  };
};
const tbody = document.querySelector("tbody");
const thx = document.querySelectorAll("th");
const trxb = tbody.querySelectorAll("tr");
thx.forEach(function (th) {
  th.addEventListener("click", function () {
    let classe = Array.from(trxb).sort(
      compare(Array.from(thx).indexOf(th), (this.asc = !this.asc))
    );
    classe.forEach(function (tr) {
      tbody.appendChild(tr);
    });
  });
});

let voirSuivi = document.querySelectorAll('#voirSuivi');
let nomDossier = '';
voirSuivi.forEach(element => {
  element.addEventListener('click', (e) =>{
    nomDossier = element.parentElement.parentElement.parentElement.firstElementChild.textContent;
    console.log('====================================');
    console.log(nomDossier);
    localStorage.setItem('nom', JSON.stringify(nomDossier))
    console.log('====================================');
  })
});