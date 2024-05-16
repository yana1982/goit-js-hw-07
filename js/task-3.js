document.addEventListener('input', () => {
  const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');
  nameInput.addEventListener('input', () => {
    const nameInputTrim = nameInput.value.trim();
    if (nameInputTrim === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = nameInputTrim;
    }
  });
});
