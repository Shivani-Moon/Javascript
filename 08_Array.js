//Array

const myArr = [0,1,2,3,4,5, true, "John"]
const myHeros = ["Shaktimaan", "JuniorG"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[6]);

//Array Methods 

myArr.push(6);//add element at last
myArr.push(7);
myArr.pop();//Remove element from last

myArr.unshift(8);//add element at starting
myArr.shift();
console.log(myArr);
console.log(myArr.length);//Returns the length of an array starting from 1
console.log(myArr.toString());//0,1,2,3,4,5,true,John,6
console.log(myArr.toLocaleString());//0,1,2,3,4,5,true,John,6
console.log(myArr.at(7));//Returns the element at that index number
console.log(myArr.concat(myArr2));//The concat() method creates a new array by merging (concatenating) existing arrays
console.log(myArr.copyWithin(2,0));
console.log(myArr.join());
console.log(myArr.flat());
console.log(myArr.slice());
console.log(myArr.splice());//The slice() method slices out a piece of an array into a new array

console.log(myArr.toSpliced(0,1));//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.