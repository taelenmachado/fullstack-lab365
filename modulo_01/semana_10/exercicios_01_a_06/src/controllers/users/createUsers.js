const User = require('../../models/users');
const bcrypt = require('bcrypt');

async function createUser (request, response) {
    try {

        const userInDatabase = await User.findOne({
            where: {
                username: request.body.username
            }
        })

        if (userInDatabase) {
            return response
                .status(403)
                .json({ message: 'Já existe um usuário com esse nome' })
        }

        const hash = await bcrypt.hash(request.body.password, 8)

        const newUser = {
            name: request.body.name,
            email: request.body.email,
            username: request.body.username,
            password: hash
        }

        const user = await User.create(newUser)

        response.status(201).json(user)

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = createUser