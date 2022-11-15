var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/pegarIcon/:idUsuario", function (req, res) {
    usuarioController.pegarIcon(req, res);
});

router.post("/pegarIconn", function (req, res) {
    usuarioController.pegarIcon(req, res);
});

router.put("/atualizarPerfil/:idUsuario", function (req, res) {
    usuarioController.atualizarPerfil(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;  