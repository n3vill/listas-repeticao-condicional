var arr = [1.71, 1.85, 1.96, 1.58, 1.77, 1.87, 1.69, 1.48, 1.97, 1.57, 1.74, 1.81, 1.62, 1.70, 1.44];

var max = arr.reduce(function(a, b) {
    return Math.max(a, b);

})

var min = arr.reduce(function(a, b){
    return Math.min(a, b);
})

console.log(max);
console.log(min)