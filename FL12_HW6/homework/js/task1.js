var a = prompt('enter first value');
var b = prompt('enter second value');
var c = prompt('enter third value');


var discr = b * b - 4* a * c;


if (a === 0 && b === 0 && c === 0) {
    console.log('invalid input data');
} 
else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('invalid input data');
} 
else if (discr < 0) {
    console.log('no solution');
} 
else if (discr === 0) {
    x = Math.round(-b / (2*a));
    console.log('x = ' + x);
} 
else if (discr > 0) {
    x1 = Math.round((-b + Math.sqrt(discr)) / (2*a));
    x2 = Math.round((-b - Math.sqrt(discr)) / (2*a));
    console.log('x1 = ' + x1);
    console.log('x2 = ' + x2);
}