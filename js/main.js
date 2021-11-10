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

function modeNuit(){
    //récuperer body
}