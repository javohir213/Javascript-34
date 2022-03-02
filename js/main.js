var Juft = [];
var Toq = [];

var elForm = document.querySelector("#form");
var elInput = document.querySelector("#form__input");
var elBtn = document.querySelector("#form__btn");
var elSpan = document.querySelector("#resept");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isNaN(elInput.value)) {
    elSpan.textContent = "So'z kiritish mumkin emas";
    elInput.value = "";
  }else if (elInput.value <= 0 || isNaN(elInput.value)) {
      elSpan.textContent = "0 dan katta son kiriting";
      elInput.value = "";
  
  }
  
  else if (elInput.value.length == 0) {
    elSpan.textContent = "Qiymat kiriting";
    elInput.value = "";
  } else if (elInput.value % 2 == 0) {
    elSpan.textContent = "Juft son: " + elInput.value;
    even.push(elInput.value);
    console.log(Juft);
    elInput.value = "";
  } else {
    elSpan.textContent = "Toq son: " + elInput.value;
    odd.push(elInput.value);
    console.log(Toq);
    elInput.value = "";
  }
});
