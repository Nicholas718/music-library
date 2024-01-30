const express = require("express");
const artistController = require("../controllers/artist");

const artistRouter = express.Router();

artistRouter.post("/artists", artistController.createArtist);
artistRouter.get("/artists", artistController.getAllArtists);

module.exports = artistRouter;
