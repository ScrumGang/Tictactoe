const express = require("express");
const path = require("path");
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "../", "dist")));

// Catch all other requests
app.get("*", (req, res) => {
    res.status(404).send({ error: "Not found" });
});

module.exports = app;