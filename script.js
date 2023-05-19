// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
/*usernameInput.addEventListener("focus", (e)=> {
    usernameLabel.classList.add("required-popup");
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", (e) => {
    usernameLabel.classList.remove("required-popup");

} )*/

function addPopup(input, label) {
    input.addEventListener("focus", () =>{
        label.classList.add("required-popup");
    })

    input.addEventListener("blur", () =>{
        label.classList.remove("required-popup");
    })
}

addPopup(usernameInput, usernameLabel);

// Validar valor do input
usernameInput.addEventListener("change" , (e) => {
    let valorname = e.target.value;

    if (valorname.length < 3 ) {
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.classList.add("visible");
        usernameHelper.innerText = "O campo Username precisa ter mais de tres caracteres";
        
} else {
        usernameInput.classList.add("correct");
        usernameHelper.classList.remove("visible");
}
});

   //-------- VALIDAR O VALOR DO E-MAIL--------//
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

addPopup(emailInput, emailLabel)

/*emailInput.addEventListener("focus", (e) => {
emailLabel.classList.add("required-popup");
})

emailInput.addEventListener("blur", (e) => {
  emailLabel.classList.remove("required-popup");
})*/

/*function addPopup(input, label){
    input.addEventListener("focus", ()=>{
        label.classList.add("required-popup");

        input.addEventListener("blur",() => {
            label.classList.remove("re")
        })
    })
}*/

emailInput.addEventListener("change", (e) => {
    let valoremail = e.target.value

    if (valoremail.includes("@") && valoremail.includes(".com")) {
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
          
    }else{
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.classList.add("visible");
        emailHelper.innerText = "Por favor digite um endereço de e-mail válido"
        
}
})

//------------VALIDAR O VALOR DA SENHA--------------//
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

addPopup(senhaInput, senhaLabel)

/*senhaInput.addEventListener("focus", (e) => {
    senhaLabel.classList.add("required-popup");
   })
   
   senhaInput.addEventListener("blur", (e) => {
   senhaLabel.classList.remove("required-popup");

})*/

senhaInput.addEventListener("change", (e) =>{
    let valorsenha = e.target.value
   
    if( valorsenha.length < 7 ) {
        senhaInput.classList.remove("correct");
        senhaInput.classList.add("error");
        senhaHelper.classList.add("visible");
        senhaHelper.innerText = "Por favor digite uma senha com no minimo 8 carcteres."
    }else{
    senhaInput.classList.add("correct");
    senhaHelper.classList.remove("visible");

    } 
})

//----------------VALIDAR O VALOR DO CONFIRMA SENHA ---------------//
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

addPopup(confirmaSenhaInput, confirmaSenhaLabel)
/*confirmaSenhaInput.addEventListener("focus", (e) => {
 confirmaSenhaLabel.classList.add("required-popup")
})

confirmaSenhaInput.addEventListener("blur", (e) => {
confirmaSenhaLabel.classList.remove("required-popup")

})*/

confirmaSenhaInput.addEventListener("change", (e) =>{
    let valorconfirma = e.target.value

    if( valorconfirma == senhaInput.value ) {
    confirmaSenhaInput.classList.add("correct");

    confirmaSenhaHelper.classList.remove("visible");
    
}else{
    confirmaSenhaInput.classList.remove("correct");
    confirmaSenhaInput.classList.add("error");
    confirmaSenhaHelper.classList.add("visible");
    confirmaSenhaHelper.innerText = "As senhas não são iguais"
}

})