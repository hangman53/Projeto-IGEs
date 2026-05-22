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
        localStorage.setItem('usuarioLogado', JSON.stringify({ nome: usuarioEncontrado.username, foto: "../img/icone-membro.png" }));
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

document.addEventListener("DOMContentLoaded", function () {
    const visitanteLinks = document.getElementById("visitante-links");
    const usuarioLogadoDiv = document.getElementById("usuario-logado");
    const nomeUsuarioHeader = document.getElementById("nomeUsuarioHeader");
    const fotoUsuarioHeader = document.getElementById("fotoUsuarioHeader");
    
    const btnAvatarMenu = document.getElementById("btnAvatarMenu");
    const dropdownUsuario = document.getElementById("dropdownUsuario");
    const btnSair = document.getElementById("btnSair");

    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuario) {
        if(visitanteLinks) visitanteLinks.style.display = "none";
        if(usuarioLogadoDiv) usuarioLogadoDiv.style.display = "flex";
        
        if(nomeUsuarioHeader) nomeUsuarioHeader.textContent = usuario.nome;
        if(fotoUsuarioHeader && usuario.foto) fotoUsuarioHeader.src = usuario.foto;
    } else {
        if(visitanteLinks) visitanteLinks.style.display = "flex";
        if(usuarioLogadoDiv) usuarioLogadoDiv.style.display = "none";
    }

    if (btnAvatarMenu) {
        btnAvatarMenu.addEventListener("click", function (e) {
            e.stopPropagation();
            dropdownUsuario.classList.toggle("show");
        });
    }

    window.addEventListener("click", function () {
        if (dropdownUsuario && dropdownUsuario.classList.contains("show")) {
            dropdownUsuario.classList.remove("show");
        }
    });

    if (btnSair) {
        btnSair.addEventListener("click", function () {
            localStorage.removeItem("usuarioLogado");
            window.location.href = "index.html";
        });
    }
});


const cadastrobotão = document.getElementById('botaoCadastro');

cadastrobotão.addEventListener('click', function(event) {
    event.preventDefault();

    var nome = document.getElementById('usernameCadastro').value;
    var email = document.getElementById('emailCadastro').value;
    var senha = document.getElementById('passwordCadastro').value;
    var confirmacaoSenha = document.getElementById('confirmPasswordCadastro').value;
    var mensagemErro = document.getElementById('erro-confirmacao-senha');

    if (senha !== confirmacaoSenha) {
        mensagemErro.style.display = 'block';
        return;
    } else {
        mensagemErro.style.display = 'none';

        var listaUsuarios = JSON.parse(localStorage.getItem('usuarios_mock')) || [];

        var emailExiste = listaUsuarios.some(user => user.email.trim() === email.trim());
        if (emailExiste) {
            alert('Este e-mail já está cadastrado!');
            return;
        }

        var novoUsuario = {
            username: nome,
            email: email,
            senha: senha,
            role: "usuario"
        };

        listaUsuarios.push(novoUsuario);

        localStorage.setItem('usuarios_mock', JSON.stringify(listaUsuarios));

        alert('Cadastro realizado com sucesso! Agora você pode fazer o login.');
        window.location.href = "login.html";
    }
});

