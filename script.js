var num = document.getElementById("result").innerText = 0;
var numbers = document.querySelectorAll('.number');
var operators = document.querySelectorAll('.operator');
var operdecimal = document.querySelector("#decimal");
var opequal = document.querySelector(".equal");
var buttbackspace = document.querySelector("#backspace");
var buttclear = document.querySelector("#clear");
var oppercentage = document.querySelector("#percentage");
var percent = 0;
var result;
var temp = 0;

//Print History and Output
function printHistory(num){
    document.getElementById("history").innerText=num;
}

function printOutput(num){
    document.getElementById("result").innerText= formatNumber(num);
}

function formatNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en", {maximumFractionDigits:10});
    return value;
}

//Numbers
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', function (){
        if(temp.toString().includes('=')){
            num = numbers[i].innerText;
            temp = '0';
            printHistory(' '); //reset the history after an operation
        }
        else if(num == '0'){
            num = numbers[i].innerText;
        }
        else{
            num = num + numbers[i].innerText;
        }
        printOutput(num);
    })
}

//Operators
for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', function(){
        if(temp.toString().includes('=')){
            temp = result + ' ' + operators[i].innerText;
            printHistory(temp);
        }
        else if(temp == '0'){
            temp = num + ' ' + operators[i].innerText;
        }
        else{
            temp = temp + ' ' + num + ' ' + operators[i].innerText;
        }
        printHistory(temp);
        num = 0;
        printOutput(num);
    })
}

//Decimals
operdecimal.addEventListener('click', function(){
    if(!num.includes('.')){
        num = num + '.';
    }
    printOutput(num);
})

//Percentage
oppercentage.addEventListener('click', function(){
    var tempOperator = temp.split('').pop();
    var befPerc = temp.toString().slice(0, temp.length - 2);
    if(tempOperator == '+' || tempOperator == '-'){
    percent = (parseFloat(num) / 100) * parseFloat(eval(befPerc));
    result = befPerc + ' ' + tempOperator + ' ' + percent;
    }
    else if(tempOperator == '*' || tempOperator == '/'){
        percent = parseFloat(num) / 100;
        result = temp + ' ' + percent;
    }
    printHistory(result);
    printOutput(percent);
    num = percent;
})

//Result
opequal.addEventListener('click', function (){
    temp = temp + ' ' + num;
    result = eval(temp);
    temp = temp + ' =';
    printHistory(temp);
    printOutput(result);
    num = result;
})

//Backspace and clear buttons
buttbackspace.addEventListener('click', function(){
    if(num == 0) return;
    else if(num.length == '1')
        num = 0;
    else
        num = num.slice(0, num.length - 1);

    printOutput(num);
})

buttclear.addEventListener('click', function(){
    temp = 0;
    num = 0;

    printHistory(' ');
    printOutput(num);
})

//Keyboard commands (only numbers)
window.addEventListener('keydown', function(e){
    if(!document.querySelector("button[data-key ='"+ e.keyCode +"']")) return;
    else if(temp.toString().includes('=')){
        num = document.querySelector("button[data-key ='"+ e.keyCode +"']").innerText;
        temp = '0';
        printHistory(' '); //reset the history after an operation
    }
    else if(num == '0'){
        num = document.querySelector("button[data-key ='"+ e.keyCode +"']").innerText;
    }
    else{
        num = num + document.querySelector("button[data-key ='"+ e.keyCode +"']").innerText;
    }
    printOutput(num);
});

window.addEventListener('keydown', function(e){
    if(e.keyCode == 8){
        if(num == 0) return;
        else if(num.length == '1')
        num = 0;
        else
        num = num.slice(0, num.length - 1);
    }
    printOutput(num);
})