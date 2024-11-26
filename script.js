document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton'); // Start 버튼
    const difficultyMenu = document.getElementById('difficultyMenu'); // 난이도 메뉴
    const difficultyButtons = document.querySelectorAll('.difficulty-button'); // 난이도 버튼들

    // Start 버튼 클릭 시 난이도 메뉴 표시
    if (startButton) {
        startButton.addEventListener('click', () => {
            if (difficultyMenu) {
                difficultyMenu.classList.remove('hidden'); // hidden 클래스 제거하여 메뉴 표시
            } else {
                console.error("난이도 메뉴를 찾을 수 없습니다.");
            }
        });
    } else {
        console.error("Start 버튼을 찾을 수 없습니다.");
    }

    // 난이도 버튼 클릭 시 게임 시작
    if (difficultyButtons.length > 0) {
        difficultyButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const selectedDifficulty = event.target.getAttribute('data-difficulty');
                startGame(selectedDifficulty);
            });
        });
    } else {
        console.error("난이도 버튼을 찾을 수 없습니다.");
    }

    // 게임 시작 함수
    function startGame(difficulty) {
        console.log(`난이도 '${difficulty}' 선택됨. 게임을 시작합니다.`);
        // 선택한 난이도와 함께 새로운 페이지로 이동
        window.location.href = "2.html";
    }
});
