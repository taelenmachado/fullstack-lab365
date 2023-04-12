const Places = require('../../models/places');

async function createPlaces(request, response) {

    try {
       
        const place = {

            name: request.body.name,
            telefone: request.body.telefone,
            opening_hours: request.body.opening_hours,
            description: request.body.description,
            latitude: request.body.latitude,
            longitude: request.body.longitude,

        }

        if (!place.name) {
            return response
                .status(400)
                .json({ message: 'Nome do local é obrigatório' })
        }

        //se o nome já existe
        const placeInDatabase = await Places.findOne(
            { where: { name: place.name } }
        ) 

        if (placeInDatabase) {
            return response
                .status(400)
                .json({ message: 'Já existe um lugar cadastrado com esse nome' })
        }

        const newPlaces = await Places.create(place)

        response.status(201).json(newPlaces)
   

    } catch (error) {
        response.status(500).json({ message: 'Deu erro aqui' })

    }

}

module.exports = createPlaces