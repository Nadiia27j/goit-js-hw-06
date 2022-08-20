
const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
   window.alert('Всі поля мають бути заповнені');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();

}















// var 2

// const form = document.querySelector('.login-form');
// console.log(form);

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit (event) {
//   event.preventDefault();

//   if (email.value === "" || password.value === "") {
//     window.alert('Всі поля мають бути заповнені');
 
//   }else{
//     const formElements = event.currentTarget.elements;

//     const mail =  formElements.email.value;
//     const password = formElements.password.value;
  
//     const formData = {
//       mail,
//       password,
//     };
//   }

//   console.log(formData);
  
// }







