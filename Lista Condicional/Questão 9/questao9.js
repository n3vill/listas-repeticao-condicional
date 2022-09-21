let h = 1.74
let sexo = 'feminino'
let pesoIdeal = 0

if (sexo == 'masculino') {
    pesoIdeal = (72.7 * h) - 58;
} else {
    pesoIdeal = (62.1 * h) - 44.7;
}

console.log('peso ideal:' ,pesoIdeal)