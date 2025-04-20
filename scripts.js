const form = document.querySelector("form");
const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");

form.addEventListener("submit", function () {
  mensagemConfirmacao.style.display = "block";
});