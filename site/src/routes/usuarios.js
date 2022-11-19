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

router.post("/seguirUser", function (req, res) {
    usuarioController.seguirUser(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/avaliacao", function (req, res) {
    usuarioController.avaliacao(req, res);
});

router.delete("/deletarAvaliacao/:idUsuario", function (req, res) {
    usuarioController.deletarAvaliacao(req, res);
});

module.exports = router;  