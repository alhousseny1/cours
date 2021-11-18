
window.onload = function () {
  populateRegions();
  let regionSelect = document.querySelector("#region");
  regionSelect.addEventListener("change", populateDepartements);
    let departementSelect = document.querySelector('#departement');
    let prenomInput = document.querySelector("#fname");
    let dobInput = document.querySelector("#dob");
    let mail1Input = document.querySelector("#mail1");
    let mail2Input = document.querySelector("#mail2");
    // let regionSelect = document.querySelector("#region");
    let zipInput = document.querySelector("#zip");
    let cityInput = document.querySelector("#city");
    let salaryInput = document.querySelector("#salary");
    let jobsInput = document.querySelectorAll("input[name='jobs[]']");
    console.log(jobsInput);
  
    let formElement = document.forms[0];
    // document.querySelector("form");
    formElement.addEventListener("submit", function (event) {
      event.preventDefault();
      let errorForm = false;
      //valider la date de naissance (age > 14)
      let dob = dobInput.value;
      if (!validateDob(dob)) {
        errorForm = true;
        dobInput.setCustomValidity("Date de naissance invalide !");
        dobInput.classList.add("is-invalid");
        //alerte date de naissance invalide
      }
      else{
        dobInput.classList.remove("is-invalid");
      }
      //valider le prénom : [alpha, é, -]
      let prenom = prenomInput.value.trim();//"   to to   ".trim() ->"to to"
      // let prenomRegExp = new RegExp("^[a-zA-Z\-éèàçêâùë]{1,25}$"); 
      let prenomRegExp = /^[\sa-zA-Z\-éèàçêâùë]{1,25}$/;
      if (!prenomRegExp.test(prenom)) {
        errorForm = true;
        prenomInput.setCustomValidity("prenom invalide !");
        prenomInput.classList.add("is-invalid");
        // alert("Prénom n'est pas valide !");
      }
      else{
        prenomInput.classList.remove("is-invalid");
      }
      //validation courriel 1
      //let mail1 = mail1Input.value.trim();
      //on accepte uniquement les mails yahoo et gmail
      let mailRegexp = /^([a-z0-9\.]{1,255})@(gmail|yahoo)\.(fr|com)$/;
      if (!mailRegexp.test(mail1)) {
        errorForm = true;
        mail1Input.setCustomValidity("mail invalide");
        mail1Input.classList.add("is-invalid")
        // alert("courriel 1 n'est pas valide !");
      }
      else {
        let mail2 = mail2Input.value.trim();
        if (mail1 != mail2) {
          errorForm = true;
          mail2Input.setCustomValidity("email de confirmation invalide");
          mail2Input.classList.add("is-invalide")
          // alert("courriel 1 n'est pas égal à courriel 2");
        }
        else{
          mail1Input.classList.remove("is-invalid");
          mail2Input.classList.remove("is-invalid");
        }
      }
      let region = regionSelect.value;
      if(region === "0") {
        errorForm = true;
        //alert("Région n'est pas valide !");
        regionSelect.classList.add("is-invalid");
      }else {
        regionSelect.classList.remove("is-invalid");
        regionSelect.classList.add("is-valid");
      }
      //valider la région
      console.log(regionSelect.value);
    })
  }
  let departement = departementSelect.value;
  if(departement === "0") {
    //alert("Région n'est pas valide !");
    departementSelect.classList.add("is-invalid");
  }else {
    departementSelect.classList.remove("is-invalid");
    departementSelect.classList.add("is-valid");
  }

  if (!errorForm){
    this.submit();
  }
  function validateDob(dob) {
    let now = Date.now();
    console.log("now : " + now);
    dob = Date.parse(dob);
    console.log("dob : " + dob);
    let age = calculeAge(now, dob);
    if (age < 14) {
      return false;
    }
    return true;

  }
  function calculeAge(timestamp1, timestamp2) {
    let diffmilli = timestamp1 - timestamp2;
    let diffJours = diffmilli / (1000 * 60 * 60 * 24);
    let age = Math.floor(diffJours / 365);
    return age;
  }