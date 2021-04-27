require('dotenv').config();
const express = require ('express');
var router = express.Router();
const { API_KEY } = process.env;
const  { conn } = require('../db')

const fetch = require('node-fetch');
const db = require('../db.js');



router.get('/', (req, res) => {
    var {
        name,
    
    } = req.query

    

    if(name){
        fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        .then ((data)=> data.json())
        .then ((result)=> res.send(result))
        .catch((err)=> res.status(401))


    } else {
            fetch(`https://api.thedogapi.com/v1/breeds/?api_key=${ API_KEY }`)

            .then ((data)=> data.json())
            .then ((result)=> res.send(result))
            .catch((err)=> res.status(401))
    
        }
    
});

router.get('/:idraza', (req, res) => {
    var {
        idraza
    } = req.params

    console.log(idraza)

    fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${idraza}`)    

        .then ((data)=> data.json())
        .then ((result)=> res.json(result[0].breeds[0]))             
        .catch((err)=> res.status(401))

})


module.exports = router;