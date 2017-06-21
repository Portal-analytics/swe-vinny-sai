var prompt = require('prompt');

prompt.start();

prompt.get(['Min'], function (err, result) {
    console.log(alarmClock(result.Min));
});


function fib(n) {

    if (n == 0) {
        return 0
    }
    else if (n == 1) {
        return 1
    }
    else {
        return fib(n - 1) + fib(n - 2)
    }
}

function coinFlip(n) {
    let heads = 0
    let tails = 0
    console.log("function starts")
    for (let j = 0; j < n; j++) {
        var i = Math.floor((Math.random() * 10 + 1));
        if (i % 2 == 0) {
            heads = heads + 1;
        }
        else {
            tails += 1;
        }
    }
    return ("heads " + heads + "  tails " + tails)
}

function tileCost(n) {

    let width = 10
    let height = 10

    return (width * height) * n;
}

function change(cost, given) {
    let totalCents = (given - cost) * 100;
    let quarters = 0;
    let dimes = 0;
    let nickles = 0;
    let pennies = 0;

    quarters = Math.floor(totalCents / 25);
    let leftovers = totalCents % 25;
    dimes = Math.floor(leftovers / 10);
    leftovers = leftovers % 10;
    nickles = Math.floor(leftovers / 5);
    pennies = Math.round(leftovers);
    return "Quarters: " + quarters + " Dimes: " + dimes + " Nickles: " + nickles + " Pennies " + pennies;

}

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

function tempConverter(type, convertType, value) {
    if (type == "farenheight") {
        let celsius = Math.round((value - 32) * (5 / 9))
        return celsius;
    }
    else {
        let farenheight = Math.round((value * (9 / 5) + 32))
        return farenheight;
    }
}

function alarmClock(min) {
    //does not work
    //stack overflow, will fix tom
    let totalSec = min * 60;
    let now = new Date().getSeconds();
    let target = now + totalSec;
    while ((now <= target)) {
        console.log(totalSec);
        now = new Date().getSeconds()
        totalSec = totalSec - 1;
    }
}


