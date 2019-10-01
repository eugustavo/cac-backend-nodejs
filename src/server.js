const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://codecoffe:codecoffe@codecoffe-v8byb.mongodb.net/cac?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


//req.query =  Acessar query params (para filtros)
//req.params = Acessar route params (para edição e delete)
//req.body = Acessar o corpo da requisição (criação e edição)

app.use(express.json());
app.use(routes);


app.listen(3333);