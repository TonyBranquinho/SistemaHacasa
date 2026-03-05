// 1. Pegar os elementos da pagina
const loginForm = document.getElementById("loginForm");
const cadastroForm = document.getElementById("cadastroForm");
const recuperaForm = document.getElementById("recuperaForm")

const botaoEntrar = document.querySelector("button");

botaoEntrar.addEventListener("click", function() {
    const user = usuarios.value;
    const pass = senha.value;

    if (user === "admin" && pass === "1234") {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }   
});




