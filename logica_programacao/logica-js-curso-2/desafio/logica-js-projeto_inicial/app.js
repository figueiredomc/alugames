// Crie uma funcao que imprima Olá, Mundo! no console.
function olaMundo() {
    console.log("Olá, Mundo!");
}

olaMundo();

// Crie uma funcao que receba um nome e imprimi Ola, Nome no console.
function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
    
}

// let nomeUsuario = window.prompt("Digite seu nome: ");
// olaNome(nomeUsuario);

// Crie funcao que receba um numero e retorne o dobro dele.
let dobro = x => x * 2;
console.log(dobro(4));

// Crie uma funcao que receba tres numeros e imprima a media deles no console.
function media(num1, num2, num3) {
    return totMedia = (num1 + num2 + num3) / 3;
}

console.log(media(10, 4, 1));

// Crie uma funcao que receba dois numero e retorna o maior deles.
function maiorNumero (num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(maiorNumero(-5, 0));

// Crie uma funcao que receba um numero e retorne o resultado da multiplicacao desse numero por ele mesmo.
function multiplicarNumero (num) {
    return num * num;
}

console.log(multiplicarNumero(9));