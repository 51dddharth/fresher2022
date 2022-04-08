//1.1
function square(x) {
return x*x;
}
function double(x) {
return 2*x;
}
function composedValue(square, double,5) {
return (square(double(5)));
}
console.log(composedValue);

//1.2
function square(x){
return x*x;
}
function double(x){
return 2*x;
}
function composed(func1,func2,f)
{
return(func1(func2(f)));
}
console.log(composed(double,square,5));

//1.3
function isEven(num){
if(num%2==0){
return true;
}
else
return false;
}
let arr=[1,3,5,4,2];
function find(arr,func){
for(var i=0;i,arr.length;i++){
if(func(arr[i])==true)
return arr[i];
}}
console.log(find(arr,isEven));

//1.4
let arr=[1,2,3,4,5];
function square(x){
return x*x;
}
function map(arr,func){
for(var i=0;i<arr.length;i++){
arr[i]=func(arr[i]);
}
return arr;
}
console.log(map(arr,square));


//2.1
function isEven(num){
if(num%2==0){
return true;
}
else
return false;
}
let arr=[1,3,5,4,2];
function find(arr,func){
for(var i=0;i,arr.length;i++){
if(func(arr[i])==true)
return arr[i];
else{
arr.shift();
return(find(arr,func));
}}}
console.log(find(arr,isEven));

//2.2
function square(num){
return num*num;
}
var resList=[]
function map(list,fun){
if(list.length==0){
return;
}
resList.push(fun(list.slice(0,1)))
list= list.slice(1,(list.length));
return map(list,fun);
}
 map([1,2,3,4,5],square);
console.log(resList);

//2.3
var myFunction=function(a,b){return a*b;}
console.log(" "+myFunction);