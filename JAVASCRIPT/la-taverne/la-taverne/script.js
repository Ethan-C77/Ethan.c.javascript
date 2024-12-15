function lightmode() {
  const body = document.body;
  const header = document.querySelector(".header");
  const lightModeIcon = document.querySelector("#lightmode-icon");

  body.classList.toggle("lightmode");
  header.classList.toggle("lightmode-header");

  
  if (body.classList.contains("lightmode")) {
    lightModeIcon.src = "soleil.png"; 
    lightModeIcon.alt = "Dark Mode";
  } else {
    lightModeIcon.src = "soleil.png"; 
    lightModeIcon.alt = "Light Mode";
  }
}



document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    
    let pseudoField = document.querySelector("#pseudo");
    let emailField = document.querySelector("#email");
    let passwordField = document.querySelector("#password");
    let password2Field = document.querySelector("#password2");
    let qcmField = document.querySelector("select"); // 
  
    
    const errorList = document.querySelector(".message-error ul");
    const successMessage = document.querySelector(".message-success");
  
    
    errorList.innerHTML = "";
    successMessage.style.display = "none";
  
    let isValid = true;
  
    if (pseudoField.value.trim().length < 6) {
      isValid = false;
      addErrorMessage("Le pseudo doit comporter au moins 6 caractères.", errorList);
      pseudoField.classList.add("error");
      pseudoField.classList.remove("success");
    } else {
      pseudoField.classList.remove("error");
      pseudoField.classList.add("success");
    }
  
  
    if (emailField.value.trim() === "") {
      isValid = false;
      addErrorMessage("L'email est requis.", errorList);
      emailField.classList.add("error");
      emailField.classList.remove("success");
    } else {
      emailField.classList.remove("error");
      emailField.classList.add("success");
    }
  
    
    if (passwordField.value.trim().length < 8) {
      isValid = false;
      addErrorMessage("Le mot de passe doit comporter au moins 8 caractères.", errorList);
      passwordField.classList.add("error");
      passwordField.classList.remove("success");
    } else {
      passwordField.classList.remove("error");
      passwordField.classList.add("success");
    }
  
  
    if (password2Field.value.trim() !== passwordField.value.trim()) {
      isValid = false;
      addErrorMessage("Les mots de passe ne correspondent pas.", errorList);
      password2Field.classList.add("error");
      password2Field.classList.remove("success");
    } else {
      password2Field.classList.remove("error");
      password2Field.classList.add("success");
    }
  
    
    if (!qcmField.value || qcmField.value === "") {
      isValid = false;
      addErrorMessage("Vous devez sélectionner une option dans le QCM.", errorList);
      qcmField.classList.add("error");
      qcmField.classList.remove("success");
    } else {
      qcmField.classList.remove("error");
      qcmField.classList.add("success");
    }
  
  
    if (isValid) {
      successMessage.style.display = "block";
      successMessage.textContent = "Formulaire envoyé avec succès !";
    }
  });
  
  
  function addErrorMessage(message, errorList) {
    const li = document.createElement("li");
    li.textContent = message;
    errorList.appendChild(li);
}
  

const tabs = document.querySelectorAll('.tabs .tab');
const contents = document.querySelectorAll('.tab-content');


tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
    
        tabs.forEach(t => t.classList.remove('tab-active'));

       
        contents.forEach(content => content.classList.remove('active'));

        this.classList.add('tab-active');

        if (this.classList.contains('tab-accueil')) {
            document.querySelector('.content-accueil').classList.add('active');
        } else if (this.classList.contains('tab-boutique')) {
            document.querySelector('.content-boutique').classList.add('active');
        } else if (this.classList.contains('tab-formulaire')) {
            document.querySelector('.content-formulaire').classList.add('active');
        }
    });
});

