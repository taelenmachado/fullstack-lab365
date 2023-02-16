function verificaLocalstorage() {
    if (localStorage.getItem("login") == null) {
        window.location.href = "Exercicio3S02.html"
    }
}

verificaLocalstorage();