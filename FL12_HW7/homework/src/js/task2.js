let gameStart = confirm('Do you want to play a game?');
if (!gameStart) {
    alert('You did not become a billionaire, but can.');
}
while (gameStart) {
    let attempt;
    let maxAttempt = 3;
    let minAttempt = 1;
    let maxPrize = 100;
    let totalPrize = 0;
    let Coef = {
        1: 1,
        2: 2,
        3: 4
    };
    let two = 2;
    let maxNumber = 8;
    let four = 4;
    let nextGame;
    for (attempt = minAttempt; attempt <= maxAttempt;) {
        let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
        console.log(randomNumber);
        let inputNumber = prompt(`Choose a roulette pocket number from 0 to ${maxNumber}
        Attempts left: ${maxAttempt+minAttempt-attempt}
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${maxPrize/Coef[attempt]}$`, '');
        if (inputNumber === randomNumber) {
            totalPrize = totalPrize + maxPrize / Coef[attempt];
            nextGame = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
            if (nextGame) {
                attempt = minAttempt;
                maxPrize *= two;
                maxNumber += four;
            }
        } else {
            attempt++;
        }
    }
}