document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn');

    const winning = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    squares.forEach(square => {
        square.classList.add('square');
        square.dataset.turn = 'X';

        square.addEventListener('click', () => {
            if (square.textContent) return; // if square has stuff do nothing

            const current = square.dataset.turn;
            square.textContent = current;
            square.classList.remove('X', 'O');
            square.classList.add(current);
            square.dataset.turn = current === 'X' ? 'O' : 'X';
            checkWinner();
        });

        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });
    });

    function checkWinner() { //iterates through winning combinations n checks those squares for a match
        for (let combo of winning) {
            const [a, b, c] = combo;
            const markA = squares[a].textContent;
            const markB = squares[b].textContent;
            const markC = squares[c].textContent;

            if (markA && markA === markB && markA === markC) {
                status.textContent = `Congratulations! ${markA} is the Winner!`;
                status.classList.add('you-won');
                break;
            }
        }
    }

    newGameBtn.addEventListener('click', () => { // sets slate clean
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
            square.dataset.turn = 'X';
        });
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
    });
});
