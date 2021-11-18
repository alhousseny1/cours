window.onload = function () {
  populateRegions();
  let regionSelect = document.querySelector("#region");
  regionSelect.addEventListener("change", populateDepartements);
}
function populateDepartements(event) {
  let regionSelect = event.target;
  let codeRegion = regionSelect.value;//code region
  //créer l'objet xhr
  let xhr = new XMLHttpRequest();
  //configurer l'objet xhr
  xhr.open("GET", "https://geo.api.gouv.fr/regions/" + codeRegion + "/departements");//https://geo.api.gouv.fr/regions/11/departements
  //envoyer la requete
  xhr.send();
  //ajouter un gestionnaire d'évènement sur l'objet xhr
  xhr.onreadystatechange = function () {
    switch (xhr.readyState) {
      case 4:
        let departementsJSON = xhr.responseText;
        console.log(departementsJSON);
        //convertir JSON en JS
        let departements = JSON.parse(departementsJSON);
        console.log(departements);
        //récupérer departement (select)
        let departementSelect = document.querySelector("#departement");
        while (departementSelect.firstChild) {
          departementSelect.removeChild(departementSelect.firstChild)
        }
        for (let index = 0; index < departements.length; index++) {
          const departement = departements[index];
          let opt = document.createElement("option");
          opt.value = departement.code;
          opt.innerText = departement.nom;//risque d'injection du code malveillant si on utilise innerHTML
          departementSelect.appendChild(opt);
        }
        break;

      default:
        break;
    }
  }
}

function populateRegions() {
  //créer l'objet xhr
  let xhr = new XMLHttpRequest();
  //configurer l'objet xhr
  xhr.open("GET", "https://geo.api.gouv.fr/regions");
  //envoyer la requete
  xhr.send();
  //ajouter un gestionnaire d'évènement sur l'objet xhr
  xhr.onreadystatechange = function () {
    switch (xhr.readyState) {
      case 0:
        console.log("L'objet XHR a été créé mais pas encore initialisé (pas open)");
        break;
      case 1:
        console.log("L'objet XHR a été créé mais pas encore envoyé (pas send)");
        break;
      case 2:
        console.log(": La méthode send vient d'être appelée");
        break;
      case 3:
        console.log("Le serveur traite les informations et commence à renvoyer des données");
        break;
      case 4:
        console.log(": Le serveur a fini son travail et toutes les données sont réceptionnées");
        let regionsJSON = xhr.responseText;
        console.log(regionsJSON);
        //convertir JSON en JS
        let regions = JSON.parse(regionsJSON);
        console.log(regions);
        //récupérer region (select)
        let regionSelect = document.querySelector("#region");
        for (let index = 0; index < regions.length; index++) {
          const region = regions[index];
          let opt = document.createElement("option");
          opt.value = region.code;
          opt.innerText = region.nom;//risque d'injection du code malveillant si on utilise innerHTML
          regionSelect.appendChild(opt);
        }
        break;

      default:
        break;
    }
  }
}