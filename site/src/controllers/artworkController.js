var artworkModel = require("../models/artworkModel");

var sessoes = [];

function postagem(req, res) {
    /* var idImagem = req.body.idImagemServer; */
    var idPostagem = req.params.idPostagem;

    artworkModel.postagem(idPostagem)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                res.json(resultado);

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao puxar as informações! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
            }
        );
}

function perfil(req, res) {
    /* var idImagem = req.body.idImagemServer; */
    var idArtista = req.params.idArtista;

    artworkModel.perfil(idArtista)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                res.json(resultado);

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao puxar as informações! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    postagem,
    perfil
}