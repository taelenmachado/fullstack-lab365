const jwt = require('jsonwebtoken')

function validateToken(request, response, next) {
    //Validar se tem token no header da requisição
    
    const token = request.headers.authorization


    //verificar se o token pelo menos está presente
    if (!token || token === 'Bearer') {
        return response.status(403).json({ message: 'Token não presente' })
    }

    const tokenJwt = token.slice(7)

    jwt.verify(tokenJwt, 'MINHA_CHAVE_SECRETA', (error, conteudoDoToken) => {
        if (error) {

            if (error.name === "TokenExpiredError") {
                return response.status(403).json({ message: 'Token Expirado' })
            } else if (error.name === "JsonWebTokenError") {
                return response.status(403).json({ message: 'Token inválido' })
            }

        } else {
            request.body.userId = conteudoDoToken.id
            return next();
        }
    })

}

module.exports = validateToken