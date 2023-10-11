const factureTbody = document.getElementById("factureTbody");
factureTableau.forEach((item) => {
  factureTbody.innerHTML += `
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.date}</td>
    <td><a href="#"><button>Voir</button></a></td>
</tr>
    `;
});

const inputValue = document.getElementById("inputValue");
function search(trie) {
    factureTbody.innerHTML = "";
  factureTableau.forEach((element) => {
   
    if (element.name.toLowerCase().includes(trie)) {
      factureTbody.innerHTML += `
        <tr>
    <td>${element.id}</td> 
    <td>${element.name}</td>
    <td>${element.date}</td>
    <td><a href="#"><button>Voir</button></a></td>
        </tr>
    `;
    }
  });
  if ((factureTbody.innerHTML === "")) {
    factureTbody.innerHTML = `
          <tr>
  <td colspan="4">Aucun element trouver</td>
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