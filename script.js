
var resultado = document.getElementById("resultado");

function gerarNumeroAleatorio() {
    // Gera um número aleatório entre 0 e 100
    var numeroAleatorio = Math.floor(Math.random() * 1001);
    // Exibe o número aleatório no elemento com id "resultado"
resultado.innerText = numeroAleatorio;
}