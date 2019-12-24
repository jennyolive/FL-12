let a = prompt('enter first side length');
let b = prompt('enter second side length');
let c = prompt('enter third side length');

if (a <= 0 || b <= 0 || c <= 0) {
    confirm('A triangle must have 3 sides with a positive definite length');
}
