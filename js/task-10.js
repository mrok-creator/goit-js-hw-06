function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  input: document.querySelector('input[type="number"]'),
  crateBtn: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  builderField: document.querySelector('#boxes'),
};

ref.crateBtn.addEventListener('click', innit);
ref.btnDestroy.addEventListener('click', () => onClickInsertMarkup());

function onClickDivCreate() {
  let starterParam = 30;
  let resMarkup = '';

  for (let i = 1; i <= ref.input.value; i += 1) {
    resMarkup += `<div style="width: ${starterParam}px; height: ${starterParam}px; background-color: ${getRandomHexColor()}">
    </div>`;
    starterParam += 10;
  }
  return resMarkup;
}

function onClickInsertMarkup(markup = '') {
  ref.input.value = '';
  ref.builderField.innerHTML = markup;
}

function innit() {
  const item = onClickDivCreate();
  onClickInsertMarkup(item);
}
