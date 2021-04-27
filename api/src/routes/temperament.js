require('dotenv').config();
const express = require ('express');
var router = express.Router();
const { API_KEY } = process.env;
const  { conn } = require('../db')
const { Breed, Temperament } = require('../db')
const fetch = require('node-fetch');
const db = require('../db.js');


let tempto = [];
fetch(`https://api.thedogapi.com/v1/breeds/?api_key=${ API_KEY }`)
    .then ((data)=> data.json())
    .then (result =>{
        result?.forEach(category => {
            let temptos = category.temperament?.split(', ');
            temptos?.forEach(temperamento => {
                if(!tempto.find(tmp => tmp.name === temperamento)) {
                    tempto.push({name: temperamento});
                    // console.log(temptos)
                }
            });
        });

    })
    .then(() => {
        tempto.forEach(temperamento => {
            Temperament.findOrCreate({
                where:{
                    nameT: temperamento.name
                }
            })
        });
    })
    .then(() =>{
        breeds[0].addTemperament(req.body.temperament)
    })
    .catch((err)=> res.status(401))


    router.get('/', async function(req, res) {
        let result = await Temperament.findAll();
        // console.log(result)
        res.json(result);
    })



module.exports = router;