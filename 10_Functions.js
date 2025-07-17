function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("I");
}

//sayMyName();

function addTwoNumbers(number1, number2) {
    //    let result = number1 +number2;
    //    return result; //After return no console will work

    return number1 + number2;
    console.log("Result: ", result);


}

const result = addTwoNumbers(3, 4);
//console.log("Result: ", result);

// function loginuserMessage(username){
//     if(username === undefined){
//         console.log("Please Enter UserName!!!");
//         return;
//     }
//     return `${username} just logged in`
// }

function loginuserMessage(username = "sam") { //If username is asiigned by some value then it will never enter if loop
    if (!username) {
        console.log("Please Enter UserName!!!");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("Shivani"));
// console.log(loginuserMessage());

// function calculateCartPrice(...num1)//REST OPERATOR
// {
//     return num1;
// }
// console.log(calculateCartPrice(200,400,500,700,600));

function calculateCartPrice(val1, val2, ...num1)//REST OPERATOR
{
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 700, 600));//200 goes to value 1, 400 goes to val2 and rest are displayed


const user = {
    username: "John",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));






