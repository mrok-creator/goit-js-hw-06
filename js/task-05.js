const ref = {
  input: document.querySelector('#name-input'),
  spanRes: document.querySelector('#name-output'),
};

const onInputChangeSpanRes = event => {
  ref.spanRes.textContent = event.currentTarget.value;
};

ref.input.addEventListener('input', onInputChangeSpanRes);
