function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  input: document.querySelector('input[type="number"]'),
  crateBtn: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  builderField: document.querySelector('#boxes'),
};

ref.crateBtn.addEventListener('click', onClickDivCreate);
ref.btnDestroy.addEventListener('click', onClickClearAll);

function onClickDivCreate(event) {
  let starterParam = 30;
  let resMarkup = '';

  for (let i = 1; i <= ref.input.value; i += 1) {
    resMarkup += `<div style="width: ${starterParam}px; height: ${starterParam}px; background-color: ${getRandomHexColor()}">
    </div>`;
    starterParam += 10;
  }
  ref.builderField.innerHTML = '';
  ref.builderField.insertAdjacentHTML('afterbegin', resMarkup);
}
function onClickClearAll(event) {
  ref.builderField.innerHTML = '';
  ref.input.value = '';
}
