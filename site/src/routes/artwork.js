var express = require("express");
var router = express.Router();

var artworkController = require("../controllers/artworkController");

router.get("/selectPost", function (req, res) {
    artworkController.postagem(req, res);
});

router.get("/carregar", function (req, res) {
    artworkController.carregar(req, res)
});

router.get("/selectPost/:idPostagem", function (req, res) {
    artworkController.postagem(req, res);
});

router.get("/selectDesenho/:idDesenhoCanvas", function (req, res) {
    artworkController.desenhos(req, res);
});

router.get("/selectPerfil/:idArtista", function (req, res) {
    artworkController.perfil(req, res);
});

router.get("/selectPerfill/:idArtista", function (req, res) {
    artworkController.perfill(req, res);
});

router.get("/selectSeguindo/:idArtista", function (req, res) {
    artworkController.seguindo(req, res);
});
 
router.get("/trending", function (req, res) {
    artworkController.trending(req, res);
});

router.delete("/deletarPostagem/:idPostagem", function (req, res) {
    artworkController.deletarPostagem(req, res);
});

router.delete("/deletarDesenho/:idDesenho", function (req, res) {
    artworkController.deletarDesenho(req, res);
});

router.get("/seguindo/:idArtista", function (req, res) {
    artworkController.users(req, res);
})

router.get("/seusFollows/:idPerfil", function (req, res) {
    artworkController.seusFollows(req, res);
})

module.exports = router; 