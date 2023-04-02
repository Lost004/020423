"use strict";
var arr = [3,4,5,6]
var n = 2;
var newArr = arrayLastElementThree(arr,n);
console.log(newArr);
function arrayLastElementThree(arr,n){
    for (var i=0; i<n; i++){
        var sum = 0;
        for (var j= arr.length - 3; j< arr.length;j++){
            sum += arr[j];
        }
        arr.push(sum);
    }
    return arr;  
}
