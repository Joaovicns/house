const botoesCarrossel = document.querySelectorAll('.botao', );
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        Descelecionar();
        selecionar(botao);
        
        desativarImagem();
        ativarImagem(indice);
        
        desativarInfo();
        AtivarInfo(indice);

    })
})
function AtivarInfo(indice) {
    informacoes[indice].classList.add("ativa");
}

function desativarInfo() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function ativarImagem(indice) {
    imagens[indice].classList.add("ativa");
}

function desativarImagem() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function selecionar(botao) {
    botao.classList.add('selecionado');
}

function Descelecionar() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove("selecionado");
}
