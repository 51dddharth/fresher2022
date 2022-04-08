//1.1
class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}}
const obj = new Rectangle(3, 5);
obj.height; // 3
obj.width; // 5
// The `instanceof` keyword is how you test whether an object was created
// from a certain class.
obj instanceof Rectangle; // true
({}) instanceof Rectangle; // false

 //1.2
class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}
// To define a method named `methodName`, you put `methodName() {}` in
// the class declaration.
area() {
return this.width * this.height;
}}
const obj = new Rectangle(3, 5);
obj.area(); // 15

//1.3
Answer With reference to previous que area will be 20 not 200!

//1.4
const person = {
name: ['Bob', 'Smith'],
age: 32,
bio() {
console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
},
introduceSelf() {
console.log(`Hi! I'm ${this.name[0]}.`);
}
};

//1.5
let person = {
firstName: 'John',
lastName: 'Doe',
middleName: 'C.',
currentAge: 28
};
let { firstName,  lastName, middleName = '', currentAge: age = 18 } = person;
console.log(middleName); // 'C.'
console.log(age); // 28

//1.6
var emptyObject = {}; // object with no properties or methods
var person = { firstName: "John" }; // object with single property
// object with single method
var message = { 
showMessage: function (val) { 
alert(val); 
} }; 
// object with properties & method
var person = { 
firstName: "James", 
lastName: "Bond", 
age: 15, 
getFullName: function () { 
return this.firstName + ' ' + this.lastName 
}}; 

//1.7
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
document.getElementById("demo").innerHTML = obj.firstName;           
document.getElementById("demo").innerHTML = obj.firstName;


//2.1
function person(){
this.fname=fname;
this.lname=lname;
this.age=age;
this.skills=skills;
this.dateofbirth=dateofbirth;
this.address=address;
this.married=married;
this.profession=profession;
}
person1=new
person("nikhil","goud",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")
person2=new
person("harish","chinna",21,"HTML","08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jr analyst")
print=function()
{
console.log(person1);
console.log(person2);
}();

//2.2
class person{
constructor(fname,lname,age,skills,dateofbirth,address,married,profession){
this.fname=fname;
this.lname=lname;
this.age=age;
this.skills=skills;
this.dateofbirth=dateofbirth;
this.address=address;
this.married=married;
this.profession=profession;
}}
amithab=new
person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")
abhisheik=new person("abhisheik",21,"HTML","08/06/1997","false","jr analyst")
var abhisheik=Object.create(amithab);
print=function()
{
console.log(amithab);
console.log(abhisheik.lname);
console.log(abhisheik.address);
}();

//2.3
class person{
constructor(fname,lname,age,skills,dateofbirth,address,married,profession){
this.fname=fname;
this.lname=lname;
this.age=age;
this.skills=skills;
this.dateofbirth=dateofbirth;
this.address=address;
this.married=married;
this.profession=profession;
}}
amithab=new
person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")
abhisheik=new 
person("abhisheik",21,"HTML","08/06/1997","false","jr analyst")
Aaradhya=new
person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")
var Aaradhya=Object.create(amithab);
print=function()
{
console.log(amithab);
console.log(Aaradhya.lname);
console.log(Aaradhya.address);
}();

//2.4
var account = function (name, balance){
account.name = name;
account.balance = balance;
account.deposit = function (depositAmount) {
newBalance = account.balance - depositAmount;
console.log("Your balance is now " + newBalance);
if (newBalance <= 0) {
console.log("You have insufficient funds!!!");
}};
account.withdraw = function (withdrawAmount){
newBalance = account.balance - withdrawAmount;
console.log("Your balance is now " + newBalance);
if (newBalance <= 0) {
console.log("You have insufficient funds!!!");
}};
account.transfer = function (transferAmount){
//got stuck here
}
console.log("Name: " + name + "; Balance: " + balance);
}
var AustinAccount = new account ("JIM", 50000);
var KateAccount = new account ("CREED", 10000);
var GingerAccount = new account ("DWIGHT", 70000000);
var OreoAccount = new account ("OSCAR", 40000);