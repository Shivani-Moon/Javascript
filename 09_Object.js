// object literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Mary",
    "full name": "Mary Day",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Mary@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "Mary@GOOGLE.COM";
console.log(JsUser.email);
Object.freeze(JsUser);//It freezes the object and not allow any changes in object

JsUser.email = "Mary@microsoft.com"
console.log(JsUser["email"]);

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingTwo());



//singleton

//const tinderUser = new Object();//-------SINGLETON OBJECT--------
const tinderUser ={} //------------NON SINGLETON OBJECT--------------

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sunita",
            lastname: "Williams"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}


//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hr@gmail.com"
    },
    {
        id: 3,
        email: "hra@gmail.com"
    },
    {
        id: 4,
        email: "admin@gmail.com"
    }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged'));

const course ={
    coursename: "Javascript",
    courseprice: "999"
}

//console.log(course.coursename);

const {coursename} = course;
console.log(coursename);





