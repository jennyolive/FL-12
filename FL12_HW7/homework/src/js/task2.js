let gameStart = confirm('Do you want to play a game?', '');
let number;
let range = 9;
let attempts = 3;

if (gameStart === true) {
    number = Math.floor(Math.random() * range);
    
} else {
    alert('You did not become a billionaire, but can.');
}