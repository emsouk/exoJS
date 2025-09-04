// console.log('hezfg');
// let leh1 = document.querySelector('h1');

// let status = false; 

// leh1.addEventListener('click', function() {
//    if (status == false) {
//        leh1.innerText = '🥸';
//        status = true; 
//    } else {
//        leh1.innerText = 'Coucou';
//         status = false; 
//    }
// });

// // Lessons Event Clavier
// const inputTextElement = document.getElementById('input-text');
// console.log(inputTextElement);
// inputTextElement.addEventListener('keyup', (event) => {
//     console.log(event);
//     console.log('event.key', event.key);
// });

let submitButton = document.querySelector('.submit');
let madiv = document.getElementById('text');
console.log(madiv);
let inputTextElement = document.getElementById('input-text');


    // L'élément existe, vous pouvez ajouter des écouteurs d'événements ou d'autres logiques ici
   inputTextElement.addEventListener('keyup', (event) => {
      if (inputTextElement.value.length < 5) {
          submitButton.disabled = false;
      } else {
          submitButton.disabled = true;
      }
   });

madiv.addEventListener('keyup', (event) => {
   madiv.innerText = inputTextElement.value;
   madiv.style.color = 'red';
});