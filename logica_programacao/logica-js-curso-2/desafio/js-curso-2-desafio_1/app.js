window.document.querySelector("h1").innerHTML = "Hora do Desafio";

function clickConsole() {
    console.log("O botao foi clicado!");
}

function clickAlert() {
    window.alert("Eu amo JS!");
}

function clickPrompt() {
    let cidade = window.prompt("Digite o nome de uma cidade no Brasil:");

    window.alert(`Estive em ${cidade} e lembrei de voce!`);
}

function clickSoma() {
    let number1 = window.prompt("Digite um numero: ");
    let number2 = window.prompt("Digite um outro numero: ");

    let sum = parseFloat(number1) + parseFloat(number2);

    window.alert(`O resultado da soma entre ${number1} e ${number2} é ${sum}.`)
}