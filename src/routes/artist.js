const express = require("express");
const artistController = require("../controllers/artist");

const artistRouter = express.Router();

artistRouter.post("/artists", artistController.createArtist);
artistRouter.get("/artists", artistController.getAllArtists);
artistRouter.get("/artists/:id", artistController.getArtistById);

module.exports = artistRouter;
