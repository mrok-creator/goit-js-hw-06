const ref = {
  form: document.querySelector('.login-form'),
};

ref.form.addEventListener('submit', onSubmitSaveData);

function onSubmitSaveData(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    const formData = new FormData(event.currentTarget);
    event.currentTarget.reset();

    formData.forEach((value, contentName) => {
      console.log(`Item: ${contentName}`);
      console.log(`Value:  ${value}`);
    });
  }
}
