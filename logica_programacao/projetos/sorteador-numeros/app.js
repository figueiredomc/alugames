// Area variáveis.
let totalNumeros = window.document.getElementById("quantidade");
let numeroInicial = window.document.getElementById("de");
let numeroFinal = window.document.getElementById("ate");
let numeroSorteado;
let mensagemNumerosSorteados = window.document.querySelector("#numero__sorteados");

// Funcao que gera um numero aleatorio entre dois numeros.
function geraNumeroInteiroInclusivo(minimo, maximo) {
    const minimoInteiro = Math.ceil(minimo);
    const maximoInteiro = Math.floor(maximo);
    return Math.floor(Math.random() * (maximoInteiro - minimoInteiro + 1) + minimoInteiro);
}

// Funcao do botao sortear.
function sortear() {
    let listaNumeroSorteados = [];

    // Correcao erro se numero inicial for maior que o final.
    if (parseInt(numeroInicial.value) >= parseInt(numeroFinal.value)) {
        window.alert("ERRO! Numero Inicial deve ser menor que numero final!")
        totalNumeros.value = "";
        numeroInicial.value = "";
        numeroFinal.value = "";
    } else {
        // Corrige erro de quantidade de numeros maior do que o codigo possa gerar dentro do intervalo informado pelo usuário.
        if (parseInt(totalNumeros.value) > parseInt(numeroFinal.value - numeroInicial.value + 1)) {
            window.alert(`ERRO! Nao e possivel gerar ${totalNumeros.value} numeros unicos dentro do intervalo de ${numeroInicial.value} até ${numeroFinal.value}.`);
            totalNumeros.value = "";
            numeroInicial.value = "";
            numeroFinal.value = "";
        } else {        
            for (let i = 1; i <= totalNumeros.value; i++) {
                numeroSorteado = geraNumeroInteiroInclusivo(numeroInicial.value, numeroFinal.value);
                
                while (listaNumeroSorteados.includes(numeroSorteado)) {
                    numeroSorteado = geraNumeroInteiroInclusivo(numeroInicial.value, numeroFinal.value);
                }
                
                listaNumeroSorteados.push(numeroSorteado);
            }
            mensagemNumerosSorteados.innerHTML = listaNumeroSorteados;
            toggleBotaoReiniciar();
        }
    }
}

// Funcao do botao reiniciar.
function reiniciar() {
    // Limpa Todos os Input Fields.
    totalNumeros.value = "";
    numeroInicial.value = "";
    numeroFinal.value = "";
    // Limpa mensagem em tela.
    mensagemNumerosSorteados.innerHTML = "nenhum até agora";
    // Desabilita botao reiniciar.
    toggleBotaoReiniciar();
}

// Funcao que alterna estado do botao reiniciar.
function toggleBotaoReiniciar() {
    // Se botao esta desabilitado, habilita-o.
    if (window.document.getElementById("btn-reiniciar").classList.contains("container__botao-desabilitado")) {
        window.document.getElementById("btn-reiniciar").classList.remove("container__botao-desabilitado");
        window.document.getElementById("btn-reiniciar").classList.add("container__botao");
    // Senao desabilita-o.
    } else {
        window.document.getElementById("btn-reiniciar").classList.remove("container__botao");
        window.document.getElementById("btn-reiniciar").classList.add("container__botao-desabilitado");
    }
}

