// rotas/rota1.js
const express = require('express');
const router = express.Router();

// Definindo uma rota do roteador 1
router.get('/', (req, res) => {
    res.json({ message: 'Acesso à Rota 1' });
});

// Outros métodos podem ser definidos aqui

module.exports = router;