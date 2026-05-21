
inicializarUsuariosMockados();

const inputSenha = document.getElementById('passwordLogin');
const mensagemErro = document.getElementById('erro-senha');

inputSenha.addEventListener('input', () => {
    const senha = inputSenha.value;

    if (senha.length < 8) {
        mensagemErro.style.display = 'block';
        inputSenha.style.borderColor = 'red';
    } else {
        mensagemErro.style.display = 'none';
        inputSenha.style.borderColor = 'green';
    }
});

const botaoLogin = document.getElementById('botaoLogin');
const inputLogin = document.getElementById('usernameLogin');
const mensagemErroLogin = document.getElementById('erro-login');

botaoLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const login = inputLogin.value;

    if (!login.includes('@')) {
        mensagemErroLogin.style.display = 'block';
        inputLogin.style.borderColor = 'red';
    } else {
        mensagemErroLogin.style.display = 'none';
        inputLogin.style.borderColor = 'green';
        validarLogin(inputLogin.value, inputSenha.value);
    }
});

function validarLogin(emailProcurado, senhaProcurada) {
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios_mock')) || [];

    console.log(`Buscando por E-mail: "${emailProcurado}" e Senha: "${senhaProcurada}"`);
    const usuarioEncontrado = listaUsuarios.find(user => {
        return user.email.trim() === emailProcurado.trim() &&
               String(user.senha).trim() === String(senhaProcurada).trim();
    });

    console.log("Resultado da busca interna:", usuarioEncontrado);

    if (usuarioEncontrado) {
        alert(`Login realizado com sucesso! Bem-vindo, ${usuarioEncontrado.username}.`);
        window.location.href = "index.html";
    } else {
        alert("Credenciais inválidas.");
    }
}

function inicializarUsuariosMockados() {
    if (!localStorage.getItem('usuarios_mock')) {
        const usuariosDeTeste = [
            { username: "admin", email: "admin@teste.com", senha: "12345678", role: "administrador" },
            { username: "joao", email: "joao@teste.com", senha: "456789123", role: "usuario" },
            { username: "maria", email: "maria@teste.com", senha: "789123456", role: "usuario" }
        ];

        localStorage.setItem('usuarios_mock', JSON.stringify(usuariosDeTeste));
        console.log("🚀 Usuários mockados carregados no LocalStorage com sucesso!");
    }
}


