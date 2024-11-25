const startButton = document.getElementById('startButton');
const difficultyMenu = document.getElementById('difficultyMenu');
const difficultyButtons = document.querySelectorAll('.difficulty-button');

startButton.addEventListener('click', () => {
    difficultyMenu.classList.remove('hidden');
});

difficultyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedDifficulty = event.target.getAttribute('data-difficulty');
        alert(`Starting game with difficulty: ${selectedDifficulty}`);
        startGame(selectedDifficulty);
    });
});

function startGame(difficulty) {
    alert(`Selected Difficulty: ${difficulty}`);
    window.location.href = "2.html";
}
