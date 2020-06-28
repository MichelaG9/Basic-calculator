var num = document.getElementById("result").innerText = 0;

function getHistory(){
    return document.getElementById("history").innerText;
}
function printHistory(num){
    document.getElementById("history").innerText=num;
}

function getOutput(){
    return document.getElementById("result").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("result").innerText = num;
    }
    else{
    document.getElementById("result").innerText=formatNumber(num);
    }
}
function formatNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

var opequal = document.querySelector("#equal");
var operatorperc = document.querySelector("#percentage").innerText;
var buttbackspace = document.querySelector("#backspace");
var buttclear = document.querySelector("#clear");


var temp = 0;
var numbers = document.querySelectorAll('.number');
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


var operators = document.querySelectorAll('.operator');
for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', function(){
        if(temp == '0'){
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

var result;
opequal.addEventListener('click', function (){
    temp = temp + ' ' + num;
    result = eval(temp);
    temp = temp + ' =';
    printHistory(temp);
    printOutput(result);
    num = result;
})

buttbackspace.addEventListener('click', function(){
    num = num.toString().splice((num.length - 1), 1);
    printOutput(num);
})

