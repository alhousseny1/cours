//slideshow

// imgElement.alt = "test";
// imgElement.title = "test";
// imgElement.height = "500";
let nbImages = 2;
let compteur = 1;
function banniere() {
  compteur++;//incremente le compteur
  if (compteur > nbImages) {
    compteur = 1;
  }
  let imgElement = document.images.caroussel;
  // console.log(imgElement);
  imgElement.src = "pics/slide" + compteur + ".jpg";
}
function permute() {
  console.log("dans permute");

  setInterval(banniere, 3000);//banniere -> nom de fonction, 3000->intervale
}

// let compteur = 1;
// function testPermute() {
//   banniere(2, imgElement, "pics/slide", ".webp")
// }
// function permute() {
//   console.log("dans permute");
//   let imgElement = document.images.carrousel;
//   setInterval(testPermute, 3000);//banniere -> nom de fonction, 3000->intervale
// }

let estModeNuit = false;
function modeNuit() {
  estModeNuit = !estModeNuit;
  // alert("dans mode nuit")
  //récuperer l'élément "body"
  let body = document.querySelector("body");
  // document.querySelector(".back");
  let btn = document.querySelector("#modeNuitBtn");//l'élément bouton
  let membres = document.querySelectorAll(".member");
  if (estModeNuit) {
    body.classList.remove("back");//supprime la classe "back"
    body.style.backgroundColor = "#000000";
    btn.innerHTML = "Mode Jour";//on modifie l'etiquette du bouton
    for (let index = 0; index < membres.length; index++) {
        const element = membres[index];
        element.style.backgroundColor="white";
        
    }
  }
  else {
    body.classList.add("back");//ajoute la classe "back"
    btn.innerHTML = "Mode Nuit"; 
    for (let index = 0; index < membres.length; index++) {
        const element = membres[index];
        element.style.backgroundColor="#5BD56F";
        
    }
}
}
//evenements
//récuperer l'élément section
let teamElement = document.querySelector("#team");
//ajouter un écouter d'évènement de type mouseover sur les enfants de teamElement
//teamElement.childNodes
let condition = true;
let element = teamElement.firstChild;
while (condition) {
  element.addEventListener("mouseenter", mouseEnterCallback);
  if (element.nextSibling) {
    element = element.nextSibling;
  } else {
    condition = false;
  }
}
function mouseEnterCallback(event) {
  console.log(event);
  let articleElement = event.target;
  // console.log(articleElement);
  let figureElement = find(articleElement, "FIGURE");
  console.log(figureElement);
  let figCaptionElement = find(figureElement, "FIGCAPTION");
  console.log(figCaptionElement);
  let msg = figCaptionElement.textContent;
  alert(msg);
}

function find(parent, nodeName) {
  let children = parent.childNodes;
  let child = null;
  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (children[i].nodeName == nodeName.toUpperCase()) {
      child = children[i];
      break;
    }
  }
  return child;
}

