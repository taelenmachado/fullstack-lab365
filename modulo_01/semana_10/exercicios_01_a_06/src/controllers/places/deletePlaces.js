const Places = require('../../models/places')

async function deletePlaces (request, response) {

    const PlacesInDatabase = await Places.findByPk(request.params.id)

        if (!PlacesInDatabase) {
            return response
                .status(404)
                .json({ message: 'Local não encontrado' })
        }
    
    await Places.destroy({
        where: {
            id: request.params.id
        }
    })

    response.status(200).json({ message: 'local deletado com sucesso' });

}

module.exports = deletePlaces