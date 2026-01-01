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
    let category = r1.question("Enter the category of product");
    let price = r1.question("Enter the price of product:");
    // inventory.push({
    //     name:name,
    //     category:category,
    //     price:price
    // })
    inventory.push({name,category,price});
    console.log("Product Added Successfully");
    console.log("=".repeat(50));
}




const condition = true;
while(condition){
    console.log(`${"=".repeat(50)} Inventory Management Project ${"=".repeat(50)}`);
    console.log("\n Items:");
    console.log("1.Add Product");


    const choice = r1.question("Choose an option:");
    switch(choice){
        case "1": {
            addProduct();
            break;
        }
        case 0:
            console.log("Existing...");
            process.exit(0);
        default:
            console.log("Invalid option,please try again");
    }
}