const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const str = "Hello World!";

for (const greet of str) {
    console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map)

for (const [i, value] of map) {
    console.log(i, value);
}

const myObject = {
    js: 'Javascript',
    cpp: 'cpp',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
}