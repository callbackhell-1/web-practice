console.log("Hello world !"); //Hello world !

function add(a,b){
    return a+b;
}

console.log(add); //[Function: add]
console.log(add()); //NaN
console.log(add(2,3)); //5

console.log((process.argv));
/*
i/p: node .\index.js 2 3
o/p: 
[
  'C:\\Program Files\\nodejs\\node.exe',  ==> process execution path
  'C:\\Users\\Epitome\\Desktop\\web practice\\index.js', ==> path for the js file.
  '2',
  '3'
]
*/

var args = process.argv.slice(2);
console.log(args); // [ '2', '3' ]

console.log("Sum of nos. is : ",add(parseInt(args[0]),parseInt(args[1])));
/*
args[0] ='2'
parseInt(args[0] ==> '2','3' is in args array and in string form. so converted to integer.
Sum of nos. is :  5
*/


