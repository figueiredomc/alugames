let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
let tentativas = 1;

// Funcao que define titulo e paragrafo.
function exibirTextoNaTela(tag, texto) {
    let campo = window.document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

// funcao que mostra na tela o titulo e o paragrafo.
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroMaximo}`);
}

exibirMensagemInicial();

// funcao do bota chutar.
function verificarChute() {
    let chute = window.document.querySelector("input").value;
    
    // se o chute for igual ao numero secreto.
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");

        // mensagem de acerto. define palavra tentativa ou tentativas.
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela("p", mensagemTentativas);
        
        // Habilita botao novo jogo quando usuário acerta o numero secreto.
        window.document.getElementById("reiniciar").removeAttribute("disabled");
    // se errar o numero secreto.
    } else {
        exibirTextoNaTela("h1", "Errou!")
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor!");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior!");
        }
        tentativas++;
        limparCampo();
    }
}

// Funcao que gera um numero aleatorio.
function gerarNumeroAleatorio(maximo) {
    // Armazena numero sorteado em uma lista.
    let numeroEscolhido = parseInt(Math.random() * maximo + 1);
    
    // Limpa a lista quando ela atinge todos os possiveis valores que possam ser amazenados.
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = []
    }
    
    // Recurssion - caso numero escolhido seja um que ja esteja na lista, chama novamente a funcao que gera um novo numero aleatorio, que no caso é essa mesma funcao.
    // Isso serve para continuar gerando um número novo que ainda nao tenha sido gerado, assim, sempre tera um resultado diferente.
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(maximo)
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);        
        return numeroEscolhido;
    }
}

// Funcao que limpa o input field.
function limparCampo() {
    chute = window.document.querySelector("input");
    chute.value = "";
}

// Funcao do botao Novo Jogo. 
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
    
    limparCampo();
    
    tentativas = 1;

    exibirMensagemInicial();

    window.document.getElementById("reiniciar").setAttribute("disabled", true);
}