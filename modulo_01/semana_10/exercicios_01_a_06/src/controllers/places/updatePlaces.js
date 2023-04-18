const Places = require('../../models/places')

async function updatePlaces (request, response) {
    
    try {
       
        const PlacesInDatabase = await Places.findByPk(request.params.id)

        if (!PlacesInDatabase) {
            return response
                .status(404)
                .json({ message: 'Local não encontrado' })
        }

        PlacesInDatabase.name = request.body.name
        PlacesInDatabase.contact = request.body.contact
        PlacesInDatabase.description = request.body.description
        PlacesInDatabase.opening_hours = request.body.opening_hours
        PlacesInDatabase.longitude = request.body.longitude
        PlacesInDatabase.latitude = request.body.latitude

        await PlacesInDatabase.save() //UPDATE

        response.json(PlacesInDatabase)

    } catch (error) {
        console.log(error)
        return response
                .status(500)
                .json({ message: 'Erro servidor' })
    }
}

module.exports = updatePlaces