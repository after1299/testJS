// JavaScipt's primitive data type

//number
//toString()
let age = 10;
let ageStr = age.toString();
console.log(ageStr + 20);

//toFix()
const pi = 3.14159
const piFix = pi.toFixed(2);
console.log(piFix);


//string
//length
let name = "Hi, My name is Peter";
console.log(name.length);

//index()
console.log(name[2]);

//slice()
let Myname = "Peter";
console.log(Myname.slice(1, 4)); //slice(m, n) -> 取m不取n

//indexOf()
console.log(Myname.indexOf("e"));

//case()
console.log(Myname.toUpperCase());
console.log(Myname.toLowerCase());
console.log(name.toUpperCase().indexOf("R"));

//split
console.log(name.split(" "));