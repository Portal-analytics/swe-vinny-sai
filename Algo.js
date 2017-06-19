var prompt = require('prompt');

prompt.start();

prompt.get([Number], function (err, result) {

    console.log(coinFlip(result.Number));
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
