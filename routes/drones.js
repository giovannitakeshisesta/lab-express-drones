const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

// require the Drone model here
router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((xxx) => {
    console.log("DISPLAY DRONES",xxx)
      res.render('drones/list', { xxx })
  })
  .catch((e) => next(e)); 
})


// Iteration #3: Add a new drone
// GET 
router.get('/drones/create', (req, res, next) => {
  //render the drones/create-form.hbs view.
  res.render('drones/create-form')
});


// POST
router.post('/drones/create', (req, res, next) => {
// using req.body get all the info user submitted through the form. 
// Use this info to create a new drone in the database in the drones collection. 
  Drone.create(req.body)
    .then((yyy) => {
      console.log("NEW DRONE CREATED",yyy)
// Make sure you redirect to /drones if the new drone is successfully created.       
      res.redirect('/drones')
    })
    .catch((e) => next(e));
});


// UPDATE GET
router.get('/drones/:id/edit', (req, res, next) => {

  Drone.findById(req.params.id)
  .then((xxx) => {
    console.log("SHOWING DRONE",{xxx})
    res.render("drones/update-form",xxx)
  })
  .catch((e) => next(e)); 
  
});

// UPDATE POST
router.post('/drones/:id/edit', (req, res, next) => {
  console.log(req.params.id,req.body)

  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then((yyy) => {
      console.log("DRONE UPDATED",yyy)
      res.redirect('/drones')
    })
    .catch((e) => next(e));
});


// DELETE POST
router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then((yyy) => {
    console.log("DRONE DELETED",yyy)
    res.redirect('/drones')
  })
  .catch((e) => next(e));
});

module.exports = router;
