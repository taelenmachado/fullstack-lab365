const { request, response } = require("express");
const express = require('express');
const router = express.Router()

router.post('/add', (request, response, next) => {
    if (request.body.cargo !== "líder") {
        response.status(406).json({message: "Cargo inválido"});
    }

    next();
}, function (request, response) {
    const idade = request.body.idade
    const respostaMenorIdade = { "mensagem": "Usuário não possui idade suficiente" };
    const respostaVazia = { "mensagem": "Está faltando dados para concluir a operação" };
    const respostaSucesso = { "mensagem": "Criado com sucesso" };

    if (idade <= 21) {
        response.send(respostaMenorIdade);
        return;
    }
    if (Object.values(request.body).length == 0) {
        response.status(406).send(respostaVazia);
        return;
    }
    response.status(200).send(respostaSucesso)
    console.log(request.body)
})

module.exports = router