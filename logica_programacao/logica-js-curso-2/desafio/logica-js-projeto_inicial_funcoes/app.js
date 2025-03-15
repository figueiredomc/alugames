// Crie uma funcao que calcule o índice de massa corporal (IMC) usando a altura (m) e o peso (Kg).
function calculoImc(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc >= 40) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, logo voce está com obesidade tipo III.`);
    } else if (imc >= 35) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, logo voce está com obesidade tipo II.`);
    } else if (imc >= 30) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, logo voce esta com obesidade tipo I.`);
    } else if (imc >= 25) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, logo voce está com sobrepeso.`);
    } else if (imc >= 18) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, logo voce está com peso ideal.`);
    } else {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, logo voce está com baixo peso.`);
    }
}

calculoImc(89, 1.70);


// Crie um funcao que calcule o valor do fatorial de um número passado como parametro.
function calculadoraFatorial(numero) {
    // let contador = numero - 1;
    // let fatorial = numero * contador;

    // Checa se número é 0 ou 1.
    if (numero == 0 || numero == 1) {
        return 1;
    } 
    /*
    while (contador > 1) {
        fatorial = fatorial * (contador - 1);
        contador--;
    }
    */
    
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let numeroFatorial = 5;
let resultadoFatorial = calculadoraFatorial(numeroFatorial);

console.log(`!(${numeroFatorial}) = ${resultadoFatorial}.`);

// Crie uma funcao que converte um valor em dólar e retorna o valor equivalente em reais. Taxa de conversao de R$4.80.
function conversaoCambio (quantia) {
    return quantia * 4.8;
}

console.log(conversaoCambio(120));


// Crie uma funcao que calcule a area e o perimetro de um retangulo.
function calculoAreaPerimetroRetangulo (altura, base) {
    let area = (base * altura);
    let perimetro = 2 * (base + altura);

    console.log(`A área de um triangulo com ${altura}m de altura e com ${base}m de base é igual a ${area}m quadrados. Já o seu perimetro é igual a ${perimetro}m.`);
}

calculoAreaPerimetroRetangulo(3, 5);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculoAreaPerimetroCirculo (raio) {
    let area = (Math.PI * (raio * raio));
    let perimetro = 2 * (Math.PI * raio);

    console.log(`A área de um circulo com raio igual a ${raio}cm é igual a ${area.toFixed(2)}cm quadrados. Já o seu perimetro é igual a ${perimetro.toFixed(2)}cm.`);
}

calculoAreaPerimetroCirculo(12);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada (numero) {
    /*
    let contador = 1;
    while (contador <= 10) {
        console.log(`${numero} x ${contador} = ${numero * contador}.`)
        contador++;
    }
    */
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}.`);
    }
}

tabuada(10);