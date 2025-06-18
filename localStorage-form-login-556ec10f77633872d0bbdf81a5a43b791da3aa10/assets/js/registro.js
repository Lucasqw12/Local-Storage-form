const inputUser = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const inputComfirmPassword = document.querySelector("#log-confirmar-senha")
const btnRegister = document.querySelector("#signInBtn")

const cadastrarUsuario = () => {
    let user = inputUser.value 
    let password = inputpassword.value 
    let confirmpassword = inputcomfirmPassword.value 

    if(passaword == confirmpassword && user.trim() != "") {
        localStorage.setItem("user", user)
        localStorage.setItem("password", password)
        window.location.href =  '../../index.html'
        alert("cadastro finalizado com sucesso!")
            return;
        

    }
    alert("falha no cadastro!")
}

btnRegister.addEventListener("click", cadastrarUsuario)