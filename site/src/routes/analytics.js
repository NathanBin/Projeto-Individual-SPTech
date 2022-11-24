var express = require("express");
var router = express.Router();

var analyticsController = require("../controllers/analyticsController");

router.get("/curtidos", function (req, res) {
    analyticsController.curtidos(req, res);
});

router.get("/visualizados", function (req, res) {
    analyticsController.visualizados(req, res);
});

router.get("/recentes", function (req, res) {
    analyticsController.recentes(req, res);
});

module.exports = router;  