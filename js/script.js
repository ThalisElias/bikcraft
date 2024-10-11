// ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const source = link.href;
  if (url.includes(source)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);
/////////////////////////////////////////////////

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
///////////////////////////////////////////////

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");

  if (resposta.classList.contains("ativa")) {
    pergunta.setAttribute("aria-expanded", "true");
  }
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
