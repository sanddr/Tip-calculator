let bill = document.getElementById("bill");
let guests = document.getElementById("guests");
let service = document.getElementById("service");
let tip;

function calculateTip(){
   tip = bill.value * service.value / guests.value;
   document.getElementById("show-tip").innerHTML = "The tip per person is $" + tip.toFixed(2);
}