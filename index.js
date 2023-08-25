const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')
const app = express();
const port = 3000;

const niveis = require('./controllers/nivelController');
const cuidador = require('./controllers/cuidadorController');

app.use(bodyParser.json());

app.use(cors())
app.get('/', (req, res) => res.send('Estou aqui'))
app.use('/niveis', niveis);
app.use('/cuidadores', cuidador);

app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))