const user = {
    username: "John",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} Welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

//console.log(this)

// function one(){
//     let username = "Mary"
//     console.log(this.username);//this cannot be used in function it can only be used in objects
// }
// one();


const two = () => {
    let username = "mary"
    console.log(this);
}

//two()

//***************************************************************************/

//syntax of arrow function
//Explicit return
const addTwo = (num1, num2) => {    //If curly braces are used then it is mandatory to use return keyword

    return num1 + num2
}
console.log(addTwo(3,4));

//Implicit return

const addnum = (num1, num2) => (num1 + num2)   //If round braces ares used then no need to write return keyword

console.log(addnum(5,5));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Immediately Invoked Function Expressions(IIFE)

(function fun(){ //named IIFE
    console.log('DB CONNECTED');
})();

(function aurcode(){
    console.log('DB CONNECTED TWO');
})();

((name) => {   //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Mary')
