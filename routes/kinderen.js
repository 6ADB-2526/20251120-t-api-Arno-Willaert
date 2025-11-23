// zorgt ervoor dat je de nodige date hebt
const express = require("express");
const crlKind = require("../controllers/kinderen");

// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan
// mocht gelijkaardig aan die van geschenk maar zeker ok
routes.get("/", crlKind.infoAll);
routes.get("/:ID", crlKind.getOne);
routes.put("/addOne", crlKind.addOne);
routes.put("/addGift", crlKind.addGift);
routes.post("/verwijderopnaam", crlKind.deleteOnePost);

// alles exporteren
module.exports = routes;
