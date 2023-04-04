const { response } = require('express');
const express = require('express');

const connection = require('./db.js');
const Tasks = require('./models/tasks');

const app = express()

app.use(express.json()) //obrigatório

const tarefas = []

connection.authenticate()
connection.sync()
console.log('Connection has been established successfully.');

app.get('/', (request, response) => {

    console.log('Entrei aqui')
    response.json({ message: 'Bem vindo' })
})

//Cadastrar uma nova tarefa
app.post('/tarefas', async (request, response) => {

    const tarefa = {
        name: request.body.name,
        description: request.body.description
    }

    if (!tarefa.name || !tarefa.description) {
        return response
            .status(400)
            .json({ message: 'Nome/Descrição é obrigatório' })
    }

    //fazer o tratamento se o nome já existe


    const taskInDatabase = await Tasks.findOne(
        { where: { name: tarefa.name } }
    ) // SELEC FROM taks where name = ''

    if (taskInDatabase) {
        return response
            .status(400)
            .json({ message: 'Já existe uma tarefa com esse nome' })
    }

    const newTask = await Tasks.create(tarefa)


    response.status(201).json(newTask)


})

app.get('/tarefas', async (request, response) => {

    try {
        const tasks = await Tasks.findAll()
        response.json(tasks)
    } catch (error) {
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
})



app.listen(3334, () => console.log('Aplicação online'))