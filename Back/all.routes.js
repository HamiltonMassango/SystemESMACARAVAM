const express = require('express');
const router = express.Router();
const user = require('./controllers/user');
// Pagina Pricipal 

router.get("/", user.getIndex);
router.get("/inscrever", user.getInscricao);
router.get("/contato", user.getContato);

module.exports = router;