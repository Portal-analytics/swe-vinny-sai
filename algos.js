var prompt = require('prompt');

prompt.start();

let arr = [3,2,5,4]
prompt.get(['array'], function (err, result) {
    console.log(mergeSort(arr));
});

function collatz(n){
    let steps = 0;
    while(n!=1){
        if(n % 2 == 0){
            n = n/2;
            steps ++;
        }
        else{
            n = (3*n) + 1;
            steps++
        }
    }
    return steps;
}

function mergeSort(array)
{
    if(array.length == 1)
    {
        return array;
    }

    mid = Math.ceil(array.length/2)
    left = array.slice(0,mid);
   
    right = array.slice(mid,array.length);
    console.log(right);

    let sortedLeft = mergeSort(left)
    let sortedRight = mergeSort(right)
    console.log(sortedRight)

    let sortedArray = merge(sortedLeft,sortedRight)
    return sortedArray;
}

function merge(array1 , array2){
    let mergedArray = [];
    for(let i=0; i < array1.length;i++){
        if(array1[i] < array2[i]){
            mergedArray[i] = array1[i];
            mergedArray[i+1] = array2[i];
        }
        else{
            mergedArray[i] = array2[i];
            mergedArray[i+1] = array1[i];
        }
    }
  
    return mergedArray;

}
