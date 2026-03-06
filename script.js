// 1. Pegar os elementos da pagina
const loginForm = document.getElementById("loginForm");
const cadastroForm = document.getElementById("cadastroForm");
const recuperaForm = document.getElementById("recuperaForm")

// função genérica que envia dados para a API
async function enviarParaApi(url, dados) {

    // faz requisição HTTP para o backend
    const resposta = await fetch(url, {

        // tipo da requisição
        method: "POST",

        // informa que estamos enviando JSON
        headers: {
            "Content-Type": "application/json"
        },

        // transforma objeto JS em JSON
        body: JSON.stringify(dados)

    });

    // converte resposta da API em objeto JS
    return await resposta.json();
}

// =======================
// LOGIN
// =======================

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        // impede reload da página
        event.preventDefault();

        // pega valores digitados
        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;

        // envia para API
        const resposta = await enviarParaApi(
            "https://localhost:5001/api/login",
            { usuario, senha }
        );

        // verifica resposta do backend
        if (resposta.sucesso) {
            window.location.href = "dashboard.html";
        } else {
            alert("Usuário ou senha inválidos");
        }

    });

}



// =======================
// CADASTRO
// =======================

if (cadastroForm) {

    cadastroForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        // pega valores digitados
        const usuario = document.getElementById("usuario").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // envia para API
        const resposta = await enviarParaApi(
            "https://localhost:5001/api/usuarios",
            { usuario, email, senha }
        );

        // feedback básico
        if (resposta.sucesso) {
            alert("Cadastro realizado");
            window.location.href = "index.html";
        } else {
            alert("Erro no cadastro");
        }

    });

}



// =======================
// RECUPERAR SENHA
// =======================

if (recuperaForm) {

    recuperaForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        // pega email digitado
        const email = document.getElementById("email").value;

        // envia para API
        const resposta = await enviarParaApi(
            "https://localhost:5001/api/auth/recuperar",
            { email }
        );

        if (resposta.sucesso) {
            alert("Instruções enviadas para o email");
        } else {
            alert("Email não encontrado");
        }

    });

}




