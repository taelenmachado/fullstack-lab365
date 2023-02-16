var user = {
    username: " ",
    password: " "
}
var correctUser = {
    username: "Taelen",
    password: "1234"
}

let buttonLogin = document.getElementById('login');
let inputUsername = document.getElementById('username');
let inputPassword = document.getElementById('password');

const handleChangeUsername = (e) => { user.username = e.target.value }
const handleChangePassword = (e) => { user.password = e.target.value }

buttonLogin.addEventListener("click", verifyLogin)
inputUsername.addEventListener("change", handleChangeUsername)
inputPassword.addEventListener("change", handleChangePassword)

function verificaLocalstorage() {
    if (localStorage.getItem("login") != null) {
        window.location.href = "Exercicio3S02logout.html"
    }
}
/* function clicou() {
    alert(`o usuário que você digitou é ${user.username} e a senha é ${user.password}`)
} */

function verifyLogin() {
    if (user.username == correctUser.username && user.password == correctUser.password) {

        let userJson = JSON.stringify(user);
        localStorage.setItem("login", userJson);
        verificaLocalstorage();

    } else {
        alert("Usuário ou senha incorretos!");
    }

}
verificaLocalstorage();