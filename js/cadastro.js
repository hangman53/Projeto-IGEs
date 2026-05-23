
const cadastrobotão = document.getElementById('botaoCadastro');

cadastrobotão.addEventListener('click', function (event) {

    var nome = document.getElementById('usernameCadastro').value;

    var email = document.getElementById('emailCadastro').value;
    var senha = document.getElementById('passwordCadastro').value;
    var confirmacaoSenha = document.getElementById('passwordConfirm').value;
    var mensagemErro = document.getElementById('erro-senha-confirm');
    event.preventDefault();






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

        console.log("Novo usuário a ser cadastrado:", novoUsuario);
        var tamanhoAntes = listaUsuarios.length;
        listaUsuarios.push(novoUsuario);
        var tamanhoDepois = listaUsuarios.length;
        if (tamanhoDepois === tamanhoAntes + 1) {

            localStorage.setItem('usuarios_mock', JSON.stringify(listaUsuarios));

            alert('Cadastro realizado com sucesso! Agora você pode fazer o login. lsitando usuários:', listaUsuarios);
            window.location.href = "login.html";
        } else {
            alert('Ocorreu um erro ao cadastrar. Por favor, tente novamente.listando usuários:', listaUsuarios, "novo usuário:", novoUsuario);
        }
    }
})
    ;