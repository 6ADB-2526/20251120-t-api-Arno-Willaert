// zorgt ervoor dat je de nodige date hebt
const express = require("express")
const crlKind = require("../controllers/kinderen")

// maak router object aan
const routes = express.Router()

// maak de verschillende routs aan
routes.get("/getAll", crlKind.infoAll)
routes.get("/getOne/:ID", crlKind.getOne)

// alles exporteren
module.exports = routes