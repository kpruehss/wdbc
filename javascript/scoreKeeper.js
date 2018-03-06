const p1Button = document.querySelector("#p1"),
    p1Display = document.querySelector("#p1Display"),
    p2Button = document.querySelector("#p2"),
    p2Display = document.querySelector("#p2Display"),
    resetButton = document.querySelector("#reset");

let gameOver = false,
    p1Score = 0,
    p2Score = 0,
    winningScore = 0;

p1Button.addEventListener("click", () => {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            alert("Player 1 won!");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", () => {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            alert("Player 2 won!");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", () => {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
});
