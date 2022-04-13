const ref = {
  colorTitle: document.querySelector('.color'),
  changeBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
};

ref.changeBtn.addEventListener('click', onClickColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickColorChange() {
  ref.colorTitle.textContent = getRandomHexColor();
  ref.body.style.backgroundColor = ref.colorTitle.textContent;
}
