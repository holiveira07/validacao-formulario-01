# validacao-formulario-01

Aqui foi feito um exercício de validação de formulário
com JS, com duas formas de adicionar e remover o required-popup.

 Primeira forma com uma arrow function
 
senhaInput.addEventListener("focus", (e) => {
    senhaLabel.classList.add("required-popup");
   })
   
   senhaInput.addEventListener("blur", (e) => {
   senhaLabel.classList.remove("required-popup");
})



Segunda forma, com um função generalizada, chamado a function e passando as 
respectivas variáveis para cada input e label do formulário.


function addPopup(input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    })

    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    })
}

addPopup(usernameInput, usernameLabel);



