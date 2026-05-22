

document.addEventListener('DOMContentLoaded', function () {

  //Dropdownlist de Definições
  const itemDropdown = document.querySelector('.nav-item-dropdown');
  const btnDropdown  = itemDropdown ? itemDropdown.querySelector('.btn-dropdown') : null;

  if (btnDropdown) {
    btnDropdown.addEventListener('click', function (e) {
      e.stopPropagation();
      itemDropdown.classList.toggle('aberto');
    });

    //Fecha ao clicar fora
    document.addEventListener('click', function () {
      itemDropdown.classList.remove('aberto');
    });

    //Evita fechar ao clicar dentro do próprio dropdown
    itemDropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  //Marca o link ativo na navbar de acordo com a página atual 
  const paginaAtual = window.location.pathname.split('/').pop();
  const linksNav = document.querySelectorAll('.nav-link');

  linksNav.forEach(function (link) {
    const destino = link.getAttribute('href');
    if (destino && destino === paginaAtual) {
      link.classList.add('ativo');
    }
  });

  //Ícones do Lucide
  lucide.createIcons();

});

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
            localStorage.removeItem("usuarioLogado"); // Limpa a sessão
            window.location.href = "index.html"; // Recarrega a página deslogado
        });
    }
});
