require('dotenv').config()

const express = require('express');

const Places = require('./src/models/places');
const Users = require('./src/models/users');

const createPlaces = require('./src/controllers/places/createPlaces')
const findPlaces = require('./src/controllers/places/findPlaces')
const deletePlaces = require('./src/controllers/places/deletePlaces')
const updatePlaces = require('./src/controllers/places/updatePlaces')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUsers = require('./src/controllers/users/createUsers')
const createLogin = require('./src/controllers/users/createLogin')

const connection = require('./src/database');
const validateToken = require('./src/middlewares/validate-token');

const app = express()

app.use(express.json())

connection.authenticate()
connection.sync({ alter: true })
console.log('Connection has been established successfully.');

app.post('/places', validateToken, createPlaces)
app.get('/places', validateToken, findPlaces)
app.delete('/places/:id', validateToken, deletePlaces)
app.put('/places/:id',validateToken, updatePlaces)

app.post('/users', validateToken, createUsers)
app.post('/sessions', createLogin)


app.listen(3333, () => console.log('Aplicação online'))