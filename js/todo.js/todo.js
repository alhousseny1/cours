window.onload = function () {
  // localStorage.setItem("test", "demo");
  // localStorage.setItem("tab", ["test1", "test2"]);

  // localStorage.setItem("obj", { nom: "toto" });
  // console.log(localStorage.getItem("obj"));
  // localStorage.removeItem("test");
  // localStorage.clear();
  //récuperer "todo_list" de localstorage
  // let tab = JSON.stringify(["tache 1", "tache 2"]);
  // localStorage.setItem("todo_list", tab);
  let todoList = localStorage.getItem("todo_list");
  console.log(todoList);
  if (todoList == null) {
    todoList = [];
  }
  else {
    todoList = JSON.parse(todoList);
    //afficher les taches
    for (let index = 0; index < todoList.length; index++) {
      const tache = todoList[index];
      //créer l'élément LI
      let liElement = document.createElement("li");
      liElement.innerHTML = "<span>" + tache + "</span>";

      //créer l'élement bouton (supprimer)
      let supBtn = document.createElement("button");
      supBtn.innerHTML = "Supprimer";
      //ajouter un écouteur d'évènement de type "click" sur l'élément "supBtn"
      supBtn.addEventListener("click", function () {
        //récupérer le parent de supBtn
        let parentLi = this.parentElement;
        console.log(parentLi);
        parentLi.parentElement.removeChild(parentLi);
      })
      liElement.appendChild(supBtn);
      //modifBtn
      let modifBtn = document.createElement("button");
      modifBtn.innerHTML = "modifier";
      //ajouter un écouteur d'évènement de type "click" sur l'élément "modifBtn"
      modifBtn.addEventListener("click", function () {
        //récupérer le parent de modifBtn
        let parentLi = this.parentElement;
        let span = parentLi.querySelector("span");
        span.contentEditable = true;
      })
      liElement.appendChild(modifBtn);
      //récupérer ol
      let olElement = document.querySelector("#liste_taches");
      //ajouter li à la fin d'OL
      olElement.appendChild(liElement);
    }
  }



  //désactiver le bouton
  let addTodoBtn = document.querySelector("#todo_list_btn");
  console.log(addTodoBtn);
  addTodoBtn.disabled = true;

  //ajouter un écouteur d'évènement sur l'input
  let tacheInputElement = document.querySelector("#input_tache");
  tacheInputElement.addEventListener("input", function (event) {
    // console.log(this);
    // console.log(this.value);
    // console.log(event.target.value);
    let tacheText = this.value;//chaine de caracteres 
    console.log(tacheText);
    //normaliser la chaine de caracteres
    //supprimer des caracteres vide avant et après la chaine
    tacheText = tacheText.trimStart();
    if (tacheText.length == 0) {
      addTodoBtn.disabled = true;
    } else {
      addTodoBtn.disabled = false;
    }
    this.value = tacheText;
  })

  //ajouter un gestion d'évènement sur le bouton
  addTodoBtn.addEventListener("click", function () {
    addTodoBtn.disabled = true;
    let todoText = tacheInputElement.value;
    todoText = todoText.trim();
    //stocker la tache dans localstorage
    todoList.push(todoText);
    localStorage.setItem("todo_list", JSON.stringify(todoList));
    //créer l'élément LI
    let liElement = document.createElement("li");
    liElement.innerHTML = "<span>" + todoText + "</span>";
    tacheInputElement.value = '';
    tacheInputElement.focus();//on place le curseur sur le champ Input
    //créer l'élement bouton (supprimer)
    let supBtn = document.createElement("button");
    supBtn.innerHTML = "Supprimer";
    //ajouter un écouteur d'évènement de type "click" sur l'élément "supBtn"
    supBtn.addEventListener("click", function () {
      //récupérer le parent de supBtn
      let parentLi = this.parentElement;
      console.log(parentLi);
      parentLi.parentElement.removeChild(parentLi);
    })
    liElement.appendChild(supBtn);
    //modifBtn
    let modifBtn = document.createElement("button");
    modifBtn.innerHTML = "modifier";
    //ajouter un écouteur d'évènement de type "click" sur l'élément "modifBtn"
    modifBtn.addEventListener("click", function () {
      //récupérer le parent de modifBtn
      let parentLi = this.parentElement;
      let span = parentLi.querySelector("span");
      span.contentEditable = true;
    })
    liElement.appendChild(modifBtn);
    //récupérer ol
    let olElement = document.querySelector("#liste_taches");
    //ajouter li à la fin d'OL
    olElement.appendChild(liElement);
  })
  //TO DO ajouter keypress event sur le document
}

