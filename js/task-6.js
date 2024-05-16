function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const setButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesFile = document.querySelector('#boxes');

setButton.addEventListener('click', () => {
  const amount = Number(input.value);
  setBoxes(amount);
  input.value = '';
});

destroyButton.addEventListener('click', destroyContainer);

function setBoxes(amount) {
  boxesFile.innerHTML = '';

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxesFile.appendChild(box);
  }
}

function destroyContainer() {
  while (boxesFile.firstChild) {
    boxesFile.removeChild(boxesFile.firstChild);
  }
}