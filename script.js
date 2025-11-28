const botoes = document.querySelectorAll(".btn-proximo");
const passos = document.querySelectorAll(".passo");

botoes.forEach(botao => {
    botao.addEventListener("click", function() {
        const proximo = this.getAttribute("data-proximo");

        passos.forEach(p => p.classList.remove("ativo"));
        document.getElementById("passo-" + proximo).classList.add("ativo");
    });
});