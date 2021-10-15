const body = document.querySelector('body');
body.setAttribute('style', 'display: flex; flex-direction: column; align-items: center;')
const h1 = document.querySelector('h1');

const container = document.createElement('div');
container.classList.add('container');
container.setAttribute(
    'style', 'display: grid; grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr); border: 3px solid black; border-radius: 5px; width: 400px; height: 400px; padding: 0px;'
    )
body.appendChild(container);

function makeDot(outBox) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('style', 'border: 1px solid black;');
    dot.addEventListener('mouseenter', () => dot.setAttribute('style', 'background-color: pink; border: 1px solid black;'));
    outBox.appendChild(dot);
}

function makeGrid(row, outBox) {
    let numDots = row **2;
    for (let i = 1; i <= numDots; i++) {
        makeDot(outBox);
    }
};

makeGrid(16, container);

const dots = document.querySelectorAll('.dot');

function enterNumber() {
    let gridMaker = prompt('Please enter the number of rows and columns for your new sketch pad', 16);
    if (gridMaker <= 0 || gridMaker > 100) {
        let flag = true;
        while (flag === true) {
            let again = prompt('Please enter a damn number between 1 and 100', 16);
            if (again > 0 && again <= 100) {
                flag = false;
                return again;
            }
        }
    }
    return gridMaker;
}

function resizing(num) {
    for (let i = 0; i < dots.length; i++) {
        dots[i].remove();
    };
    container.remove();
    const bigBox = document.createElement('div');
    bigBox.setAttribute(
        'style', `display: grid; grid-template-rows: repeat(${num}, 1fr); grid-template-columns: repeat(${num}, 1fr); border: 3px solid black; border-radius: 5px; width: 400px; height: 400px; padding: 0px;`
        )
    body.insertBefore(bigBox, btn);
    makeGrid(num, bigBox);
}

function buttonTrigger() {
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.cssText = 'background-color: white; border: 1px solid black;'
    }
}

const btn = document.createElement('button');
btn.textContent = 'Clear!';
btn.setAttribute('style', 'margin-top: 30px; font-size: 20px')
btn.addEventListener('click', function() {
    buttonTrigger();
});
body.appendChild(btn);

const remake = document.createElement('button');
remake.textContent = 'Resize';
remake.setAttribute('style', 'margin-top: 30px; font-size: 20px')
remake.addEventListener('click', function() {
    let newNum = enterNumber();
    resizing(newNum);
});
body.appendChild(remake);

