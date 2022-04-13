const ref = {
  input: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text'),
};

ref.input.addEventListener('input', onInputChangeFontSize);

function onInputChangeFontSize(event) {
  ref.spanText.style.fontSize = `${event.currentTarget.value}px`;
}
