var r1 = require("readline-sync");

let inventory = [ // Array of Object
  {
    name: "apple",
    category: "Fruit",
    price: 20,
  },
  {
    name: "shirt",
    category: "clothing",
    price: 500,
  },
  {
    name: "Book",
    category: "Stationery",
    price: 150,
  },
  {
    name : "laptop",
    category:"eletronic",
    price:100000
  },
  {
    name : "Iphone",
    category:"eletronic",
    price :100000
  }
];

/* 

List of Work:

- show inventory items
- add product
- remove product
- filter product by category
- filter product by price limitation
- 

-> timle input le exit nathichinjhel sama tiyo application chae chali rakhnu paryo


*/

// Add product:

function addProduct(){
    let name = r1.question("Enter the name of product:");
    let category = r1.question("Enter the category of product:");
    let price = r1.question("Enter the price of product:");
    inventory.push({name,category,price});
    console.log("Product Added Successfully");
    console.log("=".repeat(50));
}

// View Inventory
function viewInventory(){
  console.log("current inventory");
  console.log(`Name ${" ".repeat(10)} Category ${" ".repeat(10)} Price`);
  inventory.forEach((myObj)=>{
  console.log(`${myObj.name} ${" ".repeat(10)} ${myObj.category} ${" ".repeat(10)} ${myObj.price}`);
  })
}


while(true){
    console.log(`${"=".repeat(50)} Inventory Management Project ${"=".repeat(50)}`);
    console.log("\n Items:");
    console.log("1. Add Product");
    console.log("2. Show invetory items");
    console.log("3. Remove item from inventory")
    console.log("4. Filter By Category");
    console.log("5. Filter by price limitation");
    console.log("0. Exit");


    const choice = r1.question("Choose an option:");
    switch(choice){
        case "1": {
            addProduct();
            break;
        }
        case "2":
          viewInventory();
          break;
        case "0":
            console.log("Existing...");
            process.exit(0);
        default:
            console.log("Invalid option,please try again");
    }
}