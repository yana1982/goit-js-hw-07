function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', function() {
  const spam = document.querySelector('.color');
  const button = document.querySelector('.change-color');

  button.addEventListener('click', function() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spam.textContent = randomColor;
});
});
