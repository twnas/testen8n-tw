// index.js
const express = require('express');
const rota1 = require('./rotas/rota1');
const rota2 = require('./rotas/rota2');
const { verificaAutorizacao } = require('./middlewares/autorizacao');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usando roteadores com autorização
app.use('/api/rota1', verificaAutorizacao, rota1);
app.use('/api/rota2', verificaAutorizacao, rota2);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
