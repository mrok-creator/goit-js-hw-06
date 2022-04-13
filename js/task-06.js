const input = document.querySelector('#validation-input');
const validLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputCheckRes);

function onInputCheckRes() {
  if (+validLength === input.value.length) {
    input.setAttribute('class', 'valid');
  } else {
    input.setAttribute('class', 'invalid');
  }
}
