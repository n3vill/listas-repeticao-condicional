let peso = 91
let h = 1.87
let imc = (peso / (h*h))

if (imc < 18.5) {
    console.log('Abaixo do peso')
}

if (imc >= 18.5 && imc <= 25){
    console.log('Peso normal')
}

if (imc >= 25 && imc <= 30){
    console.log('Acima do peso')
}

if (imc > 30){
    console.log('Obeso')
}
