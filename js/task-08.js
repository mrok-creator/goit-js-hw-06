const ref = {
  form: document.querySelector('.login-form'),
};
const obj = {};

ref.form.addEventListener('submit', onSubmitSaveData);

function onSubmitSaveData(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('Please fill in all the fields!');
  } else {
    obj.email = [email.value.trim()];
    obj.password = [password.value.trim()];

    event.currentTarget.reset();
    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, contentName) => {
    //   console.log(`Item: ${contentName}`);
    //   console.log(`Value:  ${value}`);});
  }
  console.log(obj);
}
