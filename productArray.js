/*
    Original:
    Write a function `sumArray(arr)` that takes in an array of numbers and
    returns the total sum of all the numbers.

    New:
    Write a function `productArray(arr)` that takes in an array of numbers and
    returns the product of all the numbers. The product of an array  is the number
    you get when you multiply all the numbers together.
*/
function productArray(arr) {
    var prodElements = 1;
    for (let i = 0; i < arr.length; i++) {
        prodElements *= arr[i];
    }
    return prodElements;
}

console.log(productArray([5,8,7,3]));
