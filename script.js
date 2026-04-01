let peso = Number(prompt("digite o seu peso em kg (ex:70)"));
let altura = Number(prompt("Digite a sua altura em metros (ex 1.60)"))

if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
    let imc = peso / (altura ** 2);
    let imcFormatado = imc.toFixed(1);
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "esta abaixo do peso";
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "esta na média";
    }
    else if (imc >= 25 && imc <= 29.9) {
        classificacao = "esta um pouco acima do peso";
    }
    else if (imc >=30) {
        classificacao = "esta acima do peso";
    }
    alert (`seu IMC é ${imcFormatado}. classificacao: ${classificacao}`)
} else {
    alert("valores invalidos, lembre de usar apenas numeros e ponto no lugar da virgula (ex: 1.60)")
}