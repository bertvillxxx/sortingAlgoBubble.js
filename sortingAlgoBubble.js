const prompt = require('prompt-sync')();
let numbers = [];

for (let i = 0; i < 10; i++) {
    let num = prompt("Enter a number:");
    numbers.push(num);
}


function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                console.log("Swapped ${arr[i + 1]} and ${arr[i]}. Array: ${arr}");
            }
        }
    } while (swapped);
    return arr;
}

const sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);