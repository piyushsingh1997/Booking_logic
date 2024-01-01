
//.getElementsById is a method and innerText is a property. Method is an action we can take and innertext is a property we can modify
// function decrement(){
//     count = count - 1;
//     document.getElementById('count').innerText = count;
// }

// function multiply(){
//     count = count * 2;
//     document.getElementById('count').innerText = count;
// }

let count = 0;
let message = 'You have new notifications';
let customer = 'Piyush';
let messageToUser = message + ',' + customer + "!";            // concatination of strings
// messageToUser =  messageToUser + '👋';

function increment()

{  count +=  1;
    document.getElementById('count').textContent = count;
}

// You have to make whenever you click save it should go back to zero
function save(){
    let realCount = count + " - ";
    document.getElementById('save').textContent += realCount;
    document.getElementById('count').textContent = 0;
    count = 0;
}

