



let inputEl = document.querySelector('input');
let numbers = document.querySelectorAll(".number");
let calculate = document.querySelector('#calculate');
let clrBtn = document.querySelector('.clear');
let oprBtn = document.querySelectorAll('.oprater');


// console.log(numbers);

numbers.forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(button.textContent);
    });
});

oprBtn.forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(button.textContent);
    });
});

clrBtn.addEventListener('click',()=>{
    inputEl.value=" ";
});

calculate.addEventListener('click', calculateResult);



function appendToDisplay(value){
      inputEl.value +=value; 
}

function calculateResult(){
    try {
        let result = eval(inputEl.value)
        console.log(result);
        inputEl.value = result;
    } catch (error) {
        inputEl.value = "error";

    }
}
