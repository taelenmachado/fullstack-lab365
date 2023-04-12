require('dotenv').config()

const express = require('express');

const Places = require('./src/models/places');

const createPlaces = require('./src/controllers/places/createPlaces')
const findPlaces = require('./src/controllers/places/findPlaces')
const deletePlaces = require('./src/controllers/places/deletePlaces')
const updatePlaces = require('./src/controllers/places/updatePlaces')

const connection = require('./src/database');

const app = express()

app.use(express.json())

connection.authenticate()
connection.sync({ alter: true })
console.log('Connection has been established successfully.');

app.post('/places', createPlaces)
app.get('/places', findPlaces)
app.delete('/places/:id', deletePlaces)
app.put('/places/:id', updatePlaces)

app.listen(3333, () => console.log('Aplicação online'))