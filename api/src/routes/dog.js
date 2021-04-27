require('dotenv').config();
const express = require ('express');
var router = express.Router();
const { Breed, Temperament } = require('../db')



const STATUS_USER_ERROR = 422;

router.post('/', async function (req, res) {
    const {name, gender, height, weight, life_span, nameT} = req.body;

    console.log(req.body)

    try{

        if(name) {

            res.redirect('http://localhost:3000/home')
            let newDog = await Breed.create({
                name,
                gender,
                height,
                weight,
                life_span
            
            })
            
            await newDog.addTemperament(nameT)

        } res.json(newDog);
    }   
    catch(error) {

        res.status(STATUS_USER_ERROR);
        res.json({error: "Did not receive enough data to create new breed"});

    }

});

router.get('/', async (req,res) => {
    await Breed.findAll({
        include: Temperament,
        attribute: ['nameT']

    })
    .then((event) => {
        res.json(event)
    })
       

})


module.exports = router;


