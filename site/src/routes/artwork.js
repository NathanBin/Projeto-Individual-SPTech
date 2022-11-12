var express = require("express");
var router = express.Router();

var artworkController = require("../controllers/artworkController");

router.get("/selectPost", function (req, res) {
    artworkController.postagem(req, res);
});

router.get("/selectPost/:idPostagem", function (req, res) {
    artworkController.postagem(req, res);
});

router.get("/selectPerfil/:idArtista", function (req, res) {
    artworkController.perfil(req, res);
});
 
module.exports = router;