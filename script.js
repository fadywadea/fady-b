var myStr  =             "welcome to JavaScript world!!";
var newStr = new String ("welcome to JavaScript world!!");
var Str    =     String ("welcome to JavaScript world!!");

//variable type
console.log (typeof myStr);
console.log (typeof newStr);
console.log (typeof Str);

//The number of characters in the variable
console.log(myStr.length);
console.log(newStr.length);
console.log(Str.length);

//Locate the letter against the number
console.log(myStr.charAt(0));
console.log(myStr.charAt(1));
console.log(myStr.charAt(28));
console.log(myStr.charAt(myStr.length-1));

//The character number in the sentence
console.log(myStr.indexOf("to"));
console.log(myStr.indexOf("w"));
console.log(myStr.lastIndexOf("w"));

//Determine the place of the letter in the sentence
console.log(myStr.substring(9,15));

//Put each number of them separately
console.log(myStr.split(""));

/*
pattern flag (i,m,g) thier number are 5
i = ignore 
m = multi line string 
g = global
*/
console.log(myStr.replace(/o/g,"f"));

//literal notation
var myArray = ["f","a","d","y",1,2,3,,["w","i","c","b",,,6,7,8]];

console.log(myArray[0]);
console.log(myArray[5]);
console.log(myArray);
console.log(myArray.length);
console.log(myArray[8]);
console.log(myArray[8][0]);

myArray[100] = "new value added";
console.log(myArray);
console.log(myArray.length);

var newArray = new Array ();

newArray[0]= "Hello";
newArray[1]= "fady";
newArray[2]= "wadea";
newArray[3]= "bikhet";

console.log(newArray);

var newArr = ["1","2","3","4","5","6","7"];

console.log(newArr.join(""));
console.log(newArr.pop());
console.log(newArr.pop());
newArr.push("Hello World");
console.log(newArr);

newArr.unshift("44444");
console.log(newArr);

console.log(newArr.reverse());
console.log(newArr.join(""));

newArr.pop();
newArr.shift();
newArr.push("0");
console.log(newArr);

///console.log(newArr.sort());
console.log(newArr.sort(comparsion));

function comparsion(a,b){
    return a-b;
}

//associative array
var associative = new Array();

var x = "first value";

associative[x] = 10000;
associative["first name"] = "fady";
associative["sec name"] = "wadea";
associative["third name"] = "bikhet";
associative["numbers"] = ["0,1,2,3,4,5,6,7,8,9"];

for(i in associative){
    console.log(i+":"+associative[i])
}