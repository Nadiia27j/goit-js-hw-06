
const refs = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  valueEl:  document.querySelector('#value'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
};



refs.btnDecrement.addEventListener('click', onBtnDecrementClick);
refs.btnIncrement.addEventListener('click', onBtnIncrementClick);

let counterValue = 0;


function onBtnDecrementClick() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}


function onBtnIncrementClick() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}



// const btnDecrement = document.querySelector('[data-action="decrement"]');
// const valueEl =  document.querySelector('#value');
// const btnIncrement = document.querySelector('[data-action="increment"]');

// btnDecrement.addEventListener('click', onBtnDecrementClick);
// btnIncrement.addEventListener('click', onBtnIncrementClick);

// let counterValue = 0;


// function onBtnDecrementClick() {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// }


// function onBtnIncrementClick() {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// }