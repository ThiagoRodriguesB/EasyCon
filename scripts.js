var script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js";
script.integrity = "sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe";
script.crossOrigin = "anonymous";
document.head.appendChild(script);




window.exibirPortaria = function () {
    alert("LIBERAÇÃO DE ENTRADA DE VISITANTES ENVIADA COM SUCESSO !!!");
    window.location.href = "home copy.html";
};

window.exibirReserva = function () {
    alert("RESERVA DE ÁREA COMUM REALIZADO COM SUCESSO !!!");
    window.location.href = "home copy.html";
};

window.exibirChamado = function () {
    alert("CHAMADO ABERTO COM SUCESSO !!!");
    window.location.href = "home copy.html";
};

window.exibirCadastro = function () {
    alert("CADASTRO REALIZADO COM SUCESSO - SEJA BEM VINDO !!!");
    window.location.href = "login.html";
};

window.exibirMensagem = function () {
    alert("NOVA SENHA ENVIADA PARA SEU E-MAIL !!!");
    window.location.href = "login.html";
};
function rotina() {
    const navbarBrand = document.querySelector('.navbar-brand');
    navbarBrand.innerHTML = '<img src="logo.png" alt="logo" width="30" height="24" class="d-inline-block align-text-top">' +
      '<span>LE PARQUINHO CONDOMÍNIO CLUBE</span>';
  }

  function carregarNavbar() {
    var navbarHtml = '<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"><span class="navbar-toggler-icon"></span></button><a class="navbar-brand" href="#">LE PARQUINHO CONDOMÍNIO CLUBE</a>';
  
    var navbarElement = document.getElementById('navbar');
  
    if (navbarElement) {
      navbarElement.innerHTML = navbarHtml;
    }
  }
  