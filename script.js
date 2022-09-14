let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

let x = currentSecond * 6;
let y = currentMinute * 6 + ((6/60)*currentSecond);
var z = currentHour * 30 + ((30/60)*currentMinute + (((30/60)/60)*currentSecond));

setInterval(function () {
    x += 6/100;
    y += (6/100/60);
    z += (6/100/60/12);
    document.querySelector("#secondHand").style.transform = "rotate(" + x + "deg)";
    document.querySelector("#minuteHand").style.transform = "rotate(" + y + "deg)";
    document.querySelector("#hourHand").style.transform = "rotate(" + z + "deg)";}, 10);

