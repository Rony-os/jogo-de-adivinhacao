/*
1-Gerar um numero aleatorio entre 1 e 100.
2-definir o numero maximo de tentativas em 10.
3-iniciar um contador de tentativas.
4- ao clicar no botão chutar deve:
    4.1-capturar o valor do palpite.
    4.2-validar se o palpite é um numero entre 1 e 100.
    4.3-Comparar o palpite com o número secreto e exibir uma mensagem:
        "Você acertou!" (e o jogo termina).
        "O número secreto é maior" (e o jogador continua tentando).
        "O número secreto é menor" (e o jogador continua tentando).
    4.4-Decrementar o contador de tentativas.
    4.5-Exibir o número de tentativas restantes.
    4.6-Se o jogador atingir o número máximo de tentativas,
        o jogo termina com a mensagem "Você perdeu!
        O número secreto era X".
*/

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let numeroTentativas = 10;

function adivinhacao() {
    // Entrada
    let palpiteJogador = parseInt(document.getElementById("palpite").value);
    let resposta = '';

    // Validação do palpite
    if (isNaN(palpiteJogador) || palpiteJogador < 1 || palpiteJogador > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        return;
    }

    // Processamento
    console.log(numeroAleatorio);
    if (palpiteJogador === numeroAleatorio) {
        resposta = `Parabéns! Você acertou o número ${numeroAleatorio}.`;
    } else if (palpiteJogador < numeroAleatorio) {
        resposta = `Você errou! O número é maior.`;
    } else {
        resposta = `Você errou! O número é menor.`;
    }

    numeroTentativas--;

    //saida

    document.getElementById("resultado").textContent = "Resultado: " + resposta;
    document.getElementById("tentativasRestantes").textContent = "Tentativas Restantes: " + numeroTentativas;

    // Ocultar botão se o jogador acertar ou acabar as tentativas

    if (palpiteJogador === numeroAleatorio) {
        document.getElementById("chute").style.display = "none";
    }
    else if (numeroTentativas === 0) {
        document.getElementById("chute").style.display = "none";
        document.getElementById("resultado").textContent = "Suas tentativas acabaram! o numero era: " + numeroAleatorio + ". recarregue a pagina para tentar novamente";
    }
}