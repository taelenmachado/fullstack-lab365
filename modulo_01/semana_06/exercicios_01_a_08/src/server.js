const { request, response, Router } = require('express');
const express = require('express');
const app = express();
app.use(express.json());

app.use(require('./add_user'))
app.use(require('./rem_user'))


app.get('/:id', (request, response) => {
    let dados = request.params.id;
    response.send(`Rota de API criada pelo(a): ${dados}`);
})

app.get('/', (request, response) => {
    response.send('Hello World');
})

app.post('/json/upload', (request, response) => {
    console.log(request.body);
    response.send(request.body);
})


app.listen(3333);