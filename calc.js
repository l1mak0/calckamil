"use strict";
const numbers = document.querySelector(".numbers"),
    result = document.querySelector(".result"),
    allClear = document.querySelector(".btn-ac"),
    clear = document.querySelector(".btn-delete"),
    buttons = document.querySelectorAll(".btn-calc"),
    equal = document.querySelector(".btn-equal"),
    moreBtn = document.querySelector(".btn-more"),
    themeBtn = document.querySelector(".btn-color"),
    theme = document.querySelector("#theme"),
    moreBtns = document.querySelector(".moreButtons");

buttons.forEach((button) => {
   button.addEventListener("click", (event) => {
        numbers.classList.add("active");
        result.classList.remove("active");
        let value = event.target.dataset.num;
        numbers.innerText += value;
        result.innerText = "= " + eval(numbers.innerText.replaceAll('×', ('*')).replaceAll('÷', ('/').replaceAll('^', '**')));
   });
});

equal.addEventListener("click", () => {
   if (numbers.innerText === ''){
       result.innerText = 0;
   } else {
       numbers.classList.remove("active");
       result.classList.add("active");
}
});

allClear.addEventListener("click", remove);

function remove() {
    numbers.innerText = '';
    result.innerText = 0;
    numbers.classList.remove("active");
    result.classList.add("active");
}

clear.addEventListener("click", () =>{
    if (!result.classList.contains("active")){
        if (numbers.innerText.length !== 1){
            numbers.innerText = numbers.innerText.slice(0, -1);
            result.innerText = result.innerText.slice(0, -1);
        } else {
            remove();
        }
    }
});

moreBtn.addEventListener("click", () => {
    if (moreBtns.classList.contains("moreActive")){
        moreBtns.classList.remove("moreActive")
    } else {
        moreBtns.classList.add("moreActive")
    }
});

themeBtn.addEventListener("click", () => {
   if (theme.getAttribute("href") === "./light.css"){
       theme.href = "./dark.css";
       themeBtn.innerText = "🔥"
   }else {
       theme.href = "./light.css"
       themeBtn.innerText = "🌑"
   }
});