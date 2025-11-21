/**
 * zorg ervoor dat je onderstaande zaken kan verwezelijken met deze API:
 *
 * 1. Van alle kinderen alle info verkrijgen.
 * 2. Van 1 kind alle info + de id en naam van de geschenkjes
 * 3. Kinderen toevoegen aan te lijst
 * 4. Geschenken kan toevoegen aan het lijstje van een kind
 * 5. Geschenken kan wissen van de lijst van een kind
 *
 * succes!!
 */

// zorgt ervoor dat je de lijst van de kinderen hebt
const kinderen = require("../databank/data")

//connecteer de datagegevens aan de controller
const infoAll = (req, res) => {
    res.json(kinderen)
}

const getOne = (req, res) => {
    res.json(kinderen.filter((kind) => kind.id == req.params.ID))
}

const addOne = (req, res) => {

}

// exporteren van code

module.exports = {
    infoAll,
    getOne
}