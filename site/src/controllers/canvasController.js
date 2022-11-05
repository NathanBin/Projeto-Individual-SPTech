var canvasModel = require("../models/canvasModel");

var sessoes = [];

function canvasBase64(req, res) {
    var base64 = req.body.canvasServer;
    var idDesenho = req.body.idServer;

    canvasModel.canvasBase64(base64, idDesenho)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                res.json(resultado);

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao guardar o canvas! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
            }
        );
}

function pegarUltimoB64(req, res) {

    var b64 = req.params.base64;

    canvasModel.pegarUltimoB64(b64).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o ultimo desenho.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarUltimoIDB64(req, res) {

    var id = req.params.idDesenho;

    canvasModel.pegarUltimoIDB64(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o ultimo desenho.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function attTitulo(req, res) {

    var titulo = req.body.tituloServer;
    var b64 = req.body.b64Server;

    canvasModel.attTitulo(titulo, b64)
    .then(
        function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`);

            /* if (resultado.length == 1) { */
                console.log(resultado);
                res.json(resultado[0]);
            /* } */
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao atualizar o titulo do canvas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    canvasBase64,
    pegarUltimoB64,
    pegarUltimoIDB64,
    attTitulo
}