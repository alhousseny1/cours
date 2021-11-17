
window.onload = function () {
    let prenomInput = document.querySelector("#fname");
    let dobInput = document.querySelector("#dob");
    let mail1Input = document.querySelector("#mail1");
    let mail2Input = document.querySelector("#mail2");
    let regionSelect = document.querySelector("#region");
    let zipInput = document.querySelector("#zip");
    let cityInput = document.querySelector("#city");
    let salaryInput = document.querySelector("#salary");
    let jobsInput = document.querySelectorAll("input[name='jobs[]']");
    console.log(jobsInput);
  
    let formElement = document.forms[0];
    // document.querySelector("form");
    formElement.addEventListener("submit", function (event) {
      event.preventDefault();
      //valider la date de naissance (age > 14)
      let dob = dobInput.value;
      if (!validateDob(dob)) {
        alert("Date de naissance n'est pas valide !")
      }
  
      //valider le prénom : [alpha, é, -]
      let prenom = prenomInput.value.trim();//"   to to   ".trim() ->"to to"
      // let prenomRegExp = new RegExp("^[a-zA-Z\-éèàçêâùë]{1,25}$"); 
      let prenomRegExp = /^[\sa-zA-Z\-éèàçêâùë]{1,25}$/;
      if (!prenomRegExp.test(prenom)) {
        alert("Prénom n'est pas valide !");
      }
  
      //validation courriel 1
      //let mail1 = mail1Input.value.trim();
      //on accepte uniquement les mails yahoo et gmail
      let mailRegexp = /^([a-z0-9\.]{1,255})@(gmail|yahoo)\.(fr|com)$/;
      if (!mailRegexp.test(mail1)) {
        alert("courriel 1 n'est pas valide !");
      }
      else {
        let mail2 = mail2Input.value.trim();
        if (mail1 != mail2) {
          alert("courriel 1 n'est pas égal à courriel 2");
        }
      }

      //valider la région
      console.log(regionSelect.value);
    })
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