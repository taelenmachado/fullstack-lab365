const yup = require('yup');

const validation = yup.object().shape({
    name: yup
    .string("O nome deve ser uma string")
    .required("Nome é obrigatório"),
    password: yup
    .string()
    .min(8, "A senha deve conter no minimo 8 caracteres")
    .required("Senha é obrigatória")
})

function validateNewUser (request, response, next) {
    console.log("dado original", request.body)

    try {
        validation.validateSync(request.body, {abortEarly:false})
        //validation.validateSync(request.body)
        next()
    } catch (error) {
        response.status(400).json({message: error.errors[0]})
        //response.status(400).json({message: error.message})//Quando não usar {abortEarly:false}
    }

    

    
}

module.exports = validateNewUser