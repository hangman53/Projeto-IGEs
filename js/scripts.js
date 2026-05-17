
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
