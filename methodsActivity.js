const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil","Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log("Combined Array:", combinedArr);

const fruits = ["Banana" , "Orrage" , "Apple" , "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits);

const array1 = [1,2,3];
array1.unshift(4,5);
console.log("Array after unishift", array1);

fruits.pop();
console.log("Fruits after pop:", fruits);

const array2 = [1,2,3];
array2.shift();
console.log("Array 2 after shift", array2);

fruits.sort();
console.log("Fruits after sort", fruits);

const slicedFruits = fruits.slice(1,3);
console.log("Sliced fruits:", slicedFruits);

const months = ["January", "Febuary", "March", "April"];
months.splice(2,1, "March", "May");
console.log("Months after splice:", months)