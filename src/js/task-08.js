
const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  
  formData.forEach((value, name) => {
    console.log('name', name);
    console.log('value', value);
  });
}







// const formElements = event.currentTarget.elements;

//   console.dir(formElements);

//   const mail =  formElements.email.value;
//   const password = formElements.password.value;

//   console.log(mail, password);

//   const formData = {
//     mail,
//     password,
//   };

//   console.log(formData);