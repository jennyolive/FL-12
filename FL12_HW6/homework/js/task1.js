let a = prompt('enter first value');
let b = prompt('enter second value');
let c = prompt('enter third value');

let four = 4;
let two = 2;

let discr = b * b - four* a * c;

let x,x1,x2;

if (parseInt(a) === 0 && parseInt(b) === 0 && parseInt(c) === 0) {
    console.log('invalid input data');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('invalid input data');
} else if (discr < 0) {
    console.log('no solution');
} else if (discr === 0) {
    x = Math.round(-b / (two*a));
    console.log('x = ' + x);
} else if (discr > 0) {
    x1 = Math.round((-b + Math.sqrt(discr)) / (two*a));
    x2 = Math.round((-b - Math.sqrt(discr)) / (two*a));
    console.log('x1 = ' + x1);
    console.log('x2 = ' + x2);
}