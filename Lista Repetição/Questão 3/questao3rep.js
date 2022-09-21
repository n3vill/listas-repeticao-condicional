let numeros = [9, 90, 89, -12, -99, -100];

let soma = 0;
let qtd_positivos = 0;

for (let n= 0; n < numeros.length; n++){
    // soma = soma + numeros[n];
    soma += numeros[n];

    if (numeros[n] > 0){
        qtd_positivos++
    }
}

let qtd_negativos = numeros.length - qtd_positivos;

console.log("Media: ", soma/numeros.length, '<br>');
console.log("Qtd positivos: ", qtd_positivos, '<br>');
console.log("Qtd negativos: ", qtd_negativos, '<br>');
console.log("% positivos: ",(qtd_positivos/numeros.length) * 100, '<br>');
console.log("% negativos: ",(qtd_negativos/numeros.length) * 100, '<br>');
