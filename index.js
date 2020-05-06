let arr1 = new Array(100).fill().map((value, index) => ++index).sort(() => Math.random() - 0.5);
let arr2 = arr1.slice().reverse();
let arr3 = new Array(100).fill().map((value, index) => arr1[index] - arr2[index]);
let arr3Mean = arr3.reduce((mean, value) => mean + value) / arr3.length;