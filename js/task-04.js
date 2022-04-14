const ref = {
  btnDecrement: document.querySelector('#counter').firstElementChild,
  btnIncrement: document.querySelector('#counter').lastElementChild,
  counterValue: document.querySelector('#value'),
};
let counter = parseInt(ref.counterValue.textContent);
ref.btnDecrement.addEventListener('click', onBtnClickDecrease);
ref.btnIncrement.addEventListener('click', onBtnClickIncrease);

function onBtnClickDecrease() {
  counter -= 1;
  ref.counterValue.textContent = counter;
}

function onBtnClickIncrease() {
  counter += 1;
  ref.counterValue.textContent = counter;
}
