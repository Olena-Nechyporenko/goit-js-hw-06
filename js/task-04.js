const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", onClickDecr);
incrementBtn.addEventListener("click", onClickIncr);

function onClickDecr (evt) {
        counterValue -= 1;
        counter.textContent = counterValue;
    }
function onClickIncr (evt) {
       counterValue += 1;
       counter.textContent = counterValue;
}




// ІНШИЙ ВАРІАНТ РОЗВ'ЯЗКУ

// decrementBtn.addEventListener("click", onClick);
// incrementBtn.addEventListener("click", onClick);

// function onClick(evt) {
//     const button = evt.currentTarget;
//    if (button.dataset.action === "decrement") {
//     counterValue -= 1;
//     return counter.textContent = counterValue;
//    }
//    if (button.dataset.action === "increment") {
//     counterValue += 1;
//     return counter.textContent = counterValue;
//    }
  
// }
