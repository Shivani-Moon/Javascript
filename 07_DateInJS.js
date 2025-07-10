//Date

let myDate = new Date(); //new Date() returns a date object with the current date and time.
console.log(myDate); //Wed Jul 09 2025 18:53:33 GMT+0530 (India Standard Time)
console.log(myDate.toString()); //Wed Jul 09 2025 18:53:33 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Wed Jul 09 2025
console.log(myDate.toISOString()); //2025-07-09T13:23:33.679Z
console.log(myDate.toLocaleDateString()); //7/9/2025
console.log(myDate.toLocaleString()); //7/9/2025, 6:53:33 PM
console.log(myDate.toTimeString()); //6:53:33 PM
console.log(myDate.toUTCString()); //Wed, 09 Jul 2025 13:23:33 GMT
console.log(myDate.toJSON()); //2025-07-09T13:23:33.679Z
console.log(myDate.toGMTString());//Wed, 09 Jul 2025 13:23:33 GMT
console.log(myDate.toTimeString()); //18:53:33 GMT+0530 (India Standard Time)

let myCraetedDate = new Date(2023, 0, 23); // months start from 0 till 11
console.log(myCraetedDate.toDateString());

let date = new Date("2023-01-25"); //(yy-mm-dd)
console.log(date.toLocaleString());

let currentDate = new Date("01-14-2023");
console.log(currentDate.getTime());
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMilliseconds());
console.log(currentDate.getMinutes());
console.log(currentDate.getMonth());
console.log(currentDate.getSeconds());
console.log(currentDate.getTimezoneOffset());
console.log(currentDate.getUTCDate());
console.log(currentDate.getUTCDay());
console.log(currentDate.toLocaleString());//(mm-dd-yy)

let myTimeStamp = (Math.floor( Date.now()/1000));
console.log(myTimeStamp);




