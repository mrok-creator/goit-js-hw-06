const ref = {
  input: document.querySelector('#name-input'),
  spanRes: document.querySelector('#name-output'),
};

const onInputChangeSpanRes = event => {
  if (!event.currentTarget.value)
    return (ref.spanRes.textContent = 'Anonymous');
  ref.spanRes.textContent = event.currentTarget.value;
};

ref.input.addEventListener('input', onInputChangeSpanRes);
