//Iteration #1

// Use Mongoose schema and make sure that the Drone model has all the properties listed above. 
// Hint: Don't forget to export the Drone model.

// The Drone model should have:

// name - String (name of the drone model, like General Atomics MQ-9 Reaper)
// propellers - Number (amount of propellers, like 4)
// maxSpeed - Number (meters per second for the drone's maximum speed, like 18)


const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const xxx = model("Drone", droneSchema);
module.exports = xxx; 