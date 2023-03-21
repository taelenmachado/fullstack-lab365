const { request, response } = require("express");
const express = require('express');
const router = express.Router()

router.delete('/remove', (request, response) => {
    response.send('Usuário removido!')
})

router.delete('/', (request, response) => {
    const id = request.query.id;
    const semId = {"mensagem": "Está faltando dados para concluir a operação"};
    const comId = {"mensagem": "Deletado com sucesso"};

    if(id == null) {
        response.status(406).send(semId);
    }
    response.status(200).send(comId);
    
})


module.exports = router
