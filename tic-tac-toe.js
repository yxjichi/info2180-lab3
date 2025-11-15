document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');

    squares.forEach(square => {
        square.classList.add('square');
        square.dataset.turn = 'X';

        square.addEventListener('click', () => {
            const current = square.dataset.turn;
            square.textContent = current;
            square.classList.remove('X', 'O');
            square.classList.add(current);
            square.dataset.turn = current === 'X' ? 'O' : 'X';
        });

        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });
    });
});