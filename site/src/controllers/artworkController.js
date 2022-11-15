var artworkModel = require("../models/artworkModel");

var sessoes = [];

function postagem(req, res) {
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

function perfill(req, res) {
    var idArtista = req.params.idArtista;

        artworkModel.perfill(idArtista)
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

function carregar(req, res){

    artworkModel.carregar()
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

function trending(req, res){

    artworkModel.trending()
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

function desenhos(req, res) {
    var idDesenhoCanvas = req.params.idDesenhoCanvas;

    artworkModel.desenhos(idDesenhoCanvas)
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

function deletarPostagem(req, res) {
    var idPostagem = req.params.idPostagem;

    artworkModel.deletarPostagem(idPostagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarDesenho(req, res) {
    var idDesenho = req.params.idDesenho;

    artworkModel.deletarDesenho(idDesenho)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    postagem,
    perfil,
    carregar,
    trending,
    desenhos,
    perfill,
    deletarPostagem,
    deletarDesenho
}