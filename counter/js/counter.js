// variables
const value = document.getElementById('value');
const resetBtn = document.getElementById('reset-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');


// events


 eventListeners();

function eventListeners() {
  document.addEventListener('DOMContentLoaded', prueba);
  resetBtn.addEventListener('click', resetCounter);

  decreaseBtn.addEventListener('click', decreaseCounter);

  increaseBtn.addEventListener('click', increaseCounter);

}


// functions
function resetCounter() {
  value.classList.remove('negative', 'positive');
  value.classList.add('neutral');
  value.innerHTML = 0
}

function decreaseCounter(e) {
  e.preventDefault();

  let val = parseInt(value.innerHTML);
  
  val -= 1;

  value.innerHTML = val;

  if(val < 0) {
    value.classList.remove('neutral');
    value.classList.add('negative');
  }
  else if ( val === 0 ) {
    value.classList.remove('positive');
    value.classList.add('neutral');
  }

}
function increaseCounter(e) {
  e.preventDefault();

  let val = parseInt(value.innerHTML);

  val += 1;

  value.innerHTML = val;
  
  if( val > 0 ) {
    value.classList.remove('neutral');
    value.classList.add('positive');
  }
  else if( val === 0) {
    value.classList.remove('negative');
    value.classList.add('neutral');
  }
}

function prueba() {
  console.log('esto se ha activado');
}
