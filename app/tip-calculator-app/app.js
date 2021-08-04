const inputs = document.querySelectorAll('.input');

const customInput = document.getElementById('customInput');

const tips = document.querySelectorAll('.tip');

const divs = document.querySelectorAll('.grid+div');

const numberOfPeople = document.getElementById('numberOfPeople');

inputs.forEach((input) =>
  input.addEventListener('focus', (e) => {
    e.currentTarget.parentElement.classList.toggle('border-strong-cyan');
  })
);

inputs.forEach((input) =>
  input.addEventListener('focusout', (e) => {
    e.currentTarget.parentElement.classList.toggle('border-strong-cyan');
  })
);

customInput.addEventListener('focus', () => {
  customInput.placeholder = '';
  customInput.classList.toggle('border-strong-cyan');
});

customInput.addEventListener('focusout', () => {
  customInput.placeholder = 'Custom';
  customInput.classList.toggle('border-strong-cyan');
});

tips.forEach((tip) =>
  tip.addEventListener('click', () => {
    tip.classList.toggle('tip-clicked');
  })
);

numberOfPeople.addEventListener('focusout', () => {
  numberOfPeople.textContent === '0'
    ? numberOfPeople.classList.toggle('error')
    : '';
});
