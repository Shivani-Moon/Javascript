//Array

// const myArr = [0,1,2,3,4,5, true, "John"]
// const myHeros = ["Shaktimaan", "JuniorG"]
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[6]);

// //Array Methods 

// myArr.push(6);//add element at last
// myArr.push(7);
// myArr.pop();//Remove element from last

// myArr.unshift(8);//add element at starting
// myArr.shift();
// console.log(myArr);
// console.log(myArr.length);//Returns the length of an array starting from 1
// console.log(myArr.toString());//0,1,2,3,4,5,true,John,6
// console.log(myArr.toLocaleString());//0,1,2,3,4,5,true,John,6
// console.log(myArr.at(7));//Returns the element at that index number
// console.log(myArr.concat(myArr2));//The concat() method creates a new array by merging (concatenating) existing arrays
// console.log(myArr.copyWithin(2,0));
// console.log(myArr.join());
// console.log(myArr.flat());
// console.log(myArr.slice());
// console.log(myArr.splice());//The slice() method slices out a piece of an array into a new array

// console.log(myArr.toSpliced(0,1));//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.


const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...dc_heros]  //SPREAD OPERATOR
console.log(all_new_Heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const array = another_array.flat(Infinity)
console.log(array);

console.log(Array.isArray("Hello"))
console.log(Array.from("Hello"))
console.log(Array.from({name:"Mary"})) //*******

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));