const Users = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createLogin (request, response) {

    try {
        if (!request.body.username || !request.body.password) {
            return response.status(400).json({message: 'username/password obrigatório'})
        }

        const userInDatabase = await Users.findOne({
            where: {
                username: request.body.username            
            }
        })

        if (!userInDatabase) {
            return response.status(404).json({ message: 'Dados incorretos' })
        }

        const passwordIsValid = await bcrypt.compare(request.body.password, userInDatabase.password)

        if (!passwordIsValid) {
            return response.status(404).json({ message: 'Senha incorreta'})
        }

        const token = jwt.sign(
            {
                id: userInDatabase.id
            },
            process.env.CHAVE_DO_TOKEN,//Colocar algo único, exclusivo
            {
                expiresIn: '1h'  /*  algorithm: 'ES256' */
            }
        )

        response.json({ name: userInDatabase.name, token: token})

    } catch (error) {
        console.log(error)
        response.json({ message: 'Ocorreu um erro ao realizar a autenticação' })
    }

}
module.exports = createLogin