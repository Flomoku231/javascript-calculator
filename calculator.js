// A Simple Calculator
function simpleCalculator(){
    let screen = document.querySelector('.Screen');
    let buttons = document.querySelectorAll('.btn');
    let percentButton = document.querySelector('#Percentage');
    let clearButton = document.querySelector('.Orange__button');
    let equalButton = document.querySelector('.Cyan__button');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    percentButton.addEventListener('click', ()=>{
        if(screen.value == ''){
            screen.value = '';
        }
        else{
            let answer = (eval(screen.value) / 100).toFixed(2);
            screen.value= answer;
        }
    })
    equalButton.addEventListener('click', function(e){
        if(screen.value == ''){
            screen.value = '';
        }
        else{
            let answer = eval(screen.value);
            screen.value= answer;   
        }
    });
    clearButton.addEventListener('click', function(e){
        screen.value = '';
    })


}
simpleCalculator();