const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());

app.use(cors());
const buildPath = path.join(__dirname + "/build");

app.use(express.static(buildPath));

app.listen(process.env.PORT || 5050, () => console.log("server started"));
