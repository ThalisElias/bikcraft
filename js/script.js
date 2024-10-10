const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const source = link.href;
  if (url.includes(source)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);
