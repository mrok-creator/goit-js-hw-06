const ref = {
  btnDecrement: document.querySelector('#counter').firstElementChild,
  btnIncrement: document.querySelector('#counter').lastElementChild,
  counterValue: document.querySelector('#value'),
};

ref.btnDecrement.addEventListener('click', onBtnClickDecrease);
ref.btnIncrement.addEventListener('click', onBtnClickIncrease);

function onBtnClickDecrease() {
  ref.counterValue.textContent -= 1;
}

function onBtnClickIncrease() {
  ref.counterValue.textContent = Number(ref.counterValue.textContent) + 1;
}
