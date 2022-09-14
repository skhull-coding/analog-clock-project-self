let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

var x = currentSecond * 6;
var y = currentMinute * 6 + ((6/60)*currentSecond);
var z = currentHour * 30 + ((30/60)*currentMinute + (((30/60)/60)*currentSecond));

function setIt(){   
    let dateN = new Date();
    let currentHourN = dateN.getHours();
    let currentMinuteN = dateN.getMinutes();
    let currentSecondN = dateN.getSeconds();
    
    x = currentSecondN * 6;
    y = currentMinuteN * 6 + ((6/60)*currentSecondN);
    z = currentHourN * 30 + ((30/60)*currentMinuteN + (((30/60)/60)*currentSecondN));
    document.querySelector("#secondHand").style.transform = "rotate(" + x + "deg)";
    document.querySelector("#minuteHand").style.transform = "rotate(" + y + "deg)";
    document.querySelector("#hourHand").style.transform = "rotate(" + z + "deg)";
}

setInterval(function () {
    x += 6/100;
    y += (6/100/60);
    z += (6/100/60/12);
    document.querySelector("#secondHand").style.transform = "rotate(" + x + "deg)";
    document.querySelector("#minuteHand").style.transform = "rotate(" + y + "deg)";
    document.querySelector("#hourHand").style.transform = "rotate(" + z + "deg)";}, 10);

window.addEventListener('focus', setIt);    
window.addEventListener('blur', setIt);