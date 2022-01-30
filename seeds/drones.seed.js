// Iteration #1
// In the seeds/drones.seeds.js file:
// Create an array of 3 objects, each with
//  name, propellers and maxSpeed as our initial drones.
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

// Establish a connection to the database. 
// You can use the same code in db/index.js.
require("dotenv").config();
require("../db/index")
const Drone = require("../models/Drone.model");

// Once the database connection is established, 
// call the Drone model's .create() method with the array as an argument.

Drone.deleteMany()
.then(() => {
console.log("DELETEEEE"),
Drone.create(drones),
// If the .create() method successfully creates the drones collection, 
// output (using console.log()) how many drones have been created. 
console.log("DRONES ADDEDDDDDDD")
})
// In case, the seeding of the database fails, catch the error and output it.
.catch((e) => console.log(e))


