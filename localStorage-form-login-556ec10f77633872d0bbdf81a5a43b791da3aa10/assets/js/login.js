const inputUser = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const inputLogin = document.querySelector("#signInBtn")

const login = () => {
    let user = inputUser.value 
    let password = inputPassword.value

    let localUser = localStorage.getItem("user")
    let localPassword = localStorage.getItem("password")

    if (user === localUser && password == localPassword) {
        localStorage.setItem("status", "true")
        window.location.href = '../../pages/home.html'
        alert("Login Efetuado com Sucesso!")
        return
    }
    alert("usuario ou senha incorreta!")

}

const loginAuto = () => {
    let status = localStorage.getItem("status")

    if(status == "true" ) {
        window.location.href = '../../pages/home.html'
    }


}
loginAuto()
btnLogin.addEventListener("click", login)