let boxes=document.querySelectorAll('.box');
let resetButton=document.querySelector('.reset-button');
let winText=document.querySelector('.status');
let count=0;

let turnO=true;

const winPartterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if(turnO && box.innerText === '') {
            box.innerText='O';
            turnO=false;
            count++;
        }else if(!turnO && box.innerText === '') {
            box.innerText='X';
            turnO=true;
            count++;
        }else {
            alert('Box already filled');
        }
        cheakNoWinner();
        cheakWinner();
    });
});

const cheakNoWinner = () => {
    if(count === 9) {
        winText.innerText = 'No winner! It\'s a draw!';
        alert('No winner! It\'s a draw!');
        boxes.forEach(box => box.disabled = true); // Disable further clicks
    }
}

const cheakWinner = () => {
    winPartterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            winText.innerText = `${boxes[a].innerText} is the winner!`;
            alert(`${boxes[a].innerText} is the winner!`);
            boxes.forEach(box => box.disabled = true); // Disable further clicks
        }
    });
}

resetButton.addEventListener('click',() => {
    resetGame();
});

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = '';
        winText.innerText = '';
        box.disabled = false; // Enable boxes for new game
    });
    turnO = true;
    count=0;
}
