
// Sync
// console.log("hello something")

const { default: axios } = require("axios");

// Async

// const myPromise = new Promise((resolve,reject)=>{
//     const success = true;
//     if(success){
//         setTimeout(()=>{
//             resolve("Task completed successfully")
//         },2000)
//     }else{
//         reject("Task failed")
//     }
// });

// myPromise.then((value)=>{
//     console.log(`Through then method:${value}`)
// }).catch((rejectionMessage)=> console.log(`Through catch method:${rejectionMessage}`));

// a/b

// function Divide(a,b){
//     return new Promise((resolve,reject)=>{
//         if(b == 0) {
//             reject("Cannot divided by zero");
//         }else{
//             resolve(`Result is : ${a/b}`);
//         }
//     })
// }

// Divide(10,0).then(value=>console.log(value)).catch((err)=> console.log(err));
// console.log(Number(10/0))


// const res = fetch("https://jsonplaceholder.typicode.com/users"); // Async method
// res.then((value)=>console.log("Success: ")).catch((err)=>console.log("Error: "+err));


// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30)

// Promise.all([p1,p2,p3]).then(value=>console.log(value)).catch((err)=>console.log(err))


async function fetchData(){
    // const res = await axios("https://jsonplaceholder.typicode.com/todos");
    // console.log(res);
    console.log("Step-1");
    await setTimeout(()=>{
        console.log("Step-2");
    },5000);
    console.log("step-3");
}
fetchData();
