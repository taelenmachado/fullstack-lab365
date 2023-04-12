const Places = require('../../models/places')

async function findPlaces (request, response) {

    try {
        const place = await Places.findAll()
        response.json(place)
    } catch (error) {
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = findPlaces