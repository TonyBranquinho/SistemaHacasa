// 1. Pegar os elementos da pagina
const camposUsuario = document.getElementById("usuario");
const camposSenha = document.getElementById("senha");

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




/*
// 2. Usuario e senha corretos
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

// 3. Funçao que roda quando o botão é clicado
function tentarLogin() {
    // Pega o que o usuario digitou
    const usuarioDigitado = camposUsuario.value;
    const senhaDigitada = camposSenha.value;

    // Verifica se o usuario e senha estao corretos
    if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}

// 4. Adiciona o evento de clique ao botao
botaoEntrar.addEventListener("click", tentarLogin);
*/