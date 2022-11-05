var express = require("express");
var router = express.Router();

var canvasController = require("../controllers/canvasController");

router.post("/guardarCanvas", function (req, res) {
    canvasController.canvasBase64(req, res);
});

router.get("/pegarCanvas", function (req, res) {
    canvasController.pegarUltimoB64(req, res);
});

router.get("/pegarIdCanvas", function (req, res) {
    canvasController.pegarUltimoIDB64(req, res);
});

router.put("/atualizarTitulo", function (req, res) {
    canvasController.attTitulo(req, res);
});

module.exports = router;