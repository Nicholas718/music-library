const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const artists = [];

app.post("/artists", (req, res) => {
  const { name, genre } = req.body;

  if (!name || !genre) {
    return res
      .status(400)
      .json({ error: "Name and genre are required fields" });
  }

  const newArtist = {
    name,
    genre,
  };

  artists.push(newArtist);

  res.status(201).json(newArtist);
});

module.exports = app;
