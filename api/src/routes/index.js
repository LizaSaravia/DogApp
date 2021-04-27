const bodyParser = require('body-parser');
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use(bodyParser.json());  //lo traduce a json

const dog = require('./dog.js');
const dogs = require('./dogs.js');
const temperament = require('./temperament.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dog', dog);
router.use('/dogs', dogs);
router.use('/temperament', temperament);


module.exports = router;
