// String Manipulation and Array Manipulation

// const number = 50;
// // number is special number;
// console.log(`${number} is special number`);

// const Introduction = "Hey its me Saugat Saugat Saugat";
// // console.log(Introduction.trimEnd()); //
// // console.log(Introduction.length);
// // console.log(Introduction.charAt(2));
// // console.log(Introduction.charCodeAt())
// console.log(Introduction.slice(-7)) // 

// console.log(1 + "1");
// // console.log("Saugat"+"Giri");
// console.log("Saugat ".concat("Giri"));
// console.log("Hey".padEnd(5,"0")); 

// console.log(Introduction.replaceAll("Saugat","Prashant"));
// console.log("=".repeat(50));

// console.log(Introduction.split(" ")); // eyo chae akdmai important ho hae

// Sentence --> 
// const token = "Bearer adklfhoierhafu.akdgfowehioajkdf.123kjdlh";

// function retriveToken(value){
//     const something = value.replace("Bearer ","");
//     //  value.split(" ")[1];
//     return something;
// }
// // console.log(retriveToken(token));

// const Introduction = "Hey its me Saugat Saugat Saugat";
// console.log(Array.from(Introduction.matchAll("Saugat")));

// regexExpression

// const email = "saugat@gmail.com";
// const regexValid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email proper format
// // console.log(email.match(regexValid));
// // console.log(regexValid.test(email));

// function CheckEmail(email){
//     if(regexValid.test(email)){
//         console.log(`${email}: Email ko format thik cha`);
//     }else{
//         console.log(`${email}: Email ko format thik chaina feri try gara`)
//     }
// };

// // CheckEmail();
// CheckEmail("mahesh@gmail.com");
// CheckEmail("gaurav.com");
// CheckEmail("somethinggmail")

const something = "Bearer adhskfoadf.ioerh";
// console.log(something.startsWith("Bearer"));

// const value = something.startsWith("Bearer") ? something.split(" ")[1] : something;
console.log(something.split(" ")[1]);
// console.log(value);

// Array;
// --> Collection of same data types 
const name = ["hari","shayam","gopal"];
console.log(name.toString());
// console.log(name.join(" "))

//  pop push shift unshift
// name.push("Saugat")
// name.unshift("Saugat");

// name.pop();
name.shift();
console.log(name);

//Important kura haru garchum

// callback -> function mai function pathau nuh

// function print(value){
//     console.log(value);
// }

const value = [1,2,3,4,5,6,7,8,9].forEach((val)=>{ // iteration 
    return val**2
});
console.log(value)
// [1,2,3,4,5,6,7,8,9].map((value)=>{
//     return value ** 2;
// })




