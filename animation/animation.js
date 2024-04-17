const movableBlock = document.getElementById('movable-block');
const controlButton = document.getElementById('control-button');

let isMoving = false;
const startLeftPosition = 20;
const endLeftPosition = window.innerWidth - movableBlock.clientWidth - 20; 

controlButton.addEventListener('click', function () {
    isMoving = !isMoving;

    if (isMoving) {
        movableBlock.style.left = `${endLeftPosition}px`;
    } else {
        movableBlock.style.left = `${startLeftPosition}px`;
    }
});
