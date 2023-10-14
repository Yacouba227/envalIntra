const commandeTbody = document.getElementById("commandeTbody");
commandeTableau.forEach((item) => {
  commandeTbody.innerHTML += `
  <tr>
        <td>${item.commandeid}</td>
        <td>${item.commandename}</td>
        <td>${item.commandedate}</td>
        <td id="red"">${item.commandestatu}</td>
        <td><a href="#"><button>Voir</button></a></td>
    </tr>
    `;
});

const inputValue = document.getElementById("inputValue");
function search(trie) {
  commandeTbody.innerHTML = "";
  commandeTableau.forEach((element) => {
    if (element.commandename.toLowerCase().includes(trie)) {
      commandeTbody.innerHTML += `
        <tr>
            <td>${element.commandeid}</td>
            <td>${element.commandename}</td>
            <td>${element.commandedate}</td>
            <td>${element.commandestatu}</td>
            <td><a href="#"><button>Voir</button></a></td>
        </tr>
    `;
    }
  });
  if (commandeTbody.innerHTML === "") {
    commandeTbody.innerHTML = `
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