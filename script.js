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
        document.getElementById("result").innerText;
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

function returnEmpty(){
    return Number(num.remplace(/,/g,''));
}

var operator = document.getElementById("operator");
for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click',function(){

    })
}
var number = document.getElementById("number");
for(var i = 0; i < operator.length; i++){
    number[i].addEventListener('click',function(){
        
    })
}
