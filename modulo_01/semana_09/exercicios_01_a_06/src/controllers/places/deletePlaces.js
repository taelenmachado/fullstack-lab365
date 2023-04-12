const Places = require('../../models/places')

async function deletePlaces (request, response) {
    console.log(request.params.id)

    await Places.destroy({
        where: {
            id: request.params.id
        }
    })

    response.status(200).json({ message: 'local deletado com sucesso' });

}

module.exports = deletePlaces