// Object and its property --> King of Javascripts

// const person = { // key-value
//     firstName : "Saugat",
//     lastName : "Giri",
//     age:21,
//     eyeColor: "Black",
//     weight : 55,
//     fullName : function (){
//         return `${person.firstName} ${person.lastName}`
//     }
// }

// console.log(person.firstName); // Saugat
// console.log(person.fullName());


// const person = {};
// person.firstName = "Saugat",
// person.lastName = "Giri";
// console.log(person)



// const person = { // key-value
//     firstName : "Saugat",
//     lastName : "Giri",
//     age:21,
//     eyeColor: "Black",
//     weight : 55,
//     fullName : function (){
//         return `${this.firstName} ${person.lastName}` // this --> it take reference of object
//     }
// }

// Object Constructor
// function Car(name,model,color){ // Car
//     this.name = name; // this = RedCar
//     this.model = model;
//     this.color = color
// }

// const BlueCar = new Car("BlueCar","car1111","Blue");
// console.log(BlueCar);
// const RedCar = new Car("RedCar","car1212","Red");
// console.log(RedCar)


// fromEntries()

// const fruits = [
//     ["apple",100],
//     ["pearls",200],
//     ["banana",300]
// ];

// const myObj = Object.fromEntries(fruits);
// console.log(myObj);

const student = { //Objects
    name : "Saugat",
    rollNo: 33,
    faculty : "Electronics",
    percentage : 80
}

const students = [ //Collection of Student --> Array of Object
    {name:"Saugat", rollNo: 33, faculty: "Electronics", percentage: 80},
    {name:"Aarav", rollNo: 34, faculty: "Electronics", percentage: 78},
    {name:"Bina", rollNo: 35, faculty: "Computer", percentage: 45},
    {name:"Chirag", rollNo: 36, faculty: "Mechanical", percentage: 72},
    {name:"Diya", rollNo: 37, faculty: "Civil", percentage: 38},
    {name:"Elina", rollNo: 38, faculty: "Electrical", percentage: 81},
    {name:"Farhan", rollNo: 39, faculty: "Electronics", percentage: 76},
    {name:"Gita", rollNo: 40, faculty: "Computer", percentage: 20},
    {name:"Hari", rollNo: 41, faculty: "Mechanical", percentage: 29},
    {name:"Isha", rollNo: 42, faculty: "Civil", percentage: 83}
];
// JSON --> Array ko form Object dincha
console.log(students);
// Array Manipulation 

// percentage >= 40

// Array of Object --> Iterate
const passedStudent = students.filter((student)=> student.percentage > 40) // return true else return false
console.log(passedStudent);