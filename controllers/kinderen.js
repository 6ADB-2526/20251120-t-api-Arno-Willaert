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
// maak gebruik van de {} --> zo kan je de kinderen.kindjes korter schrijven
const kinderen = require("../databank/data");

//connecteer de datagegevens aan de controller
const infoAll = (req, res) => {
  res.json(kinderen.kindjes);
};

const getOne = (req, res) => {
  // hier mis ik nog de geschenken met naam en zo
  res.json(kinderen.kindjes.filter((kind) => kind.id == req.params.ID));
};

const addOne = (req, res) => {
  // in de andere controller schreef ik al een functie 'newID'
  // Dit kon je hier makkelijk hergebruiken.
  const id = getMaxId() + 1;
  const voornaam = req.body.voornaam;
  const achternaam = req.body.achternaam;
  const geschenkId = req.body.geschenkId;
  kinderen.kindjes.push({
    id: id,
    voornaam: voornaam,
    achternaam: achternaam,
    geschenkId: geschenkId,
  });
  res.json({ resultaat: "ok" });
};

const getMaxId = () => {
  let maxId = 0;
  kinderen.kindjes.forEach((kind) => {
    if (maxId < kind.id) maxId = kind.id;
  });
  return maxId;
};

const addGift = (req, res) => {
  // opgelet -- als je 2x dezelfde naam in de lijst staan hebt, kiest hij de eerste
  const voornaam = req.body.voornaam;
  const geschenkId = req.body.geschenkId;
  const kind = kinderen.kindjes.find((kind) => kind.voornaam == voornaam);
  kind.geschenkId = geschenkId;
  kinderen.kindjes.push(kind);
  res.json({ resultaat: "cadeau toegevoegt" });
};

const deleteOnePost = (req, res) => {
  // logica
  // Gelijkaarde aan addGift - niet zoeken op naam
  const voornaamToDelete = req.body.voornaamToDelete;
  const indexToDelete = kinderen.kindjes.indexOf(
    kinderen.kindjes.find((kind) => kind.id == voornaamToDelete)
  );
  kinderen.kindjes.splice(indexToDelete, voornaamToDelete);
  // res.json({resultaat: "ok", data: leerlingen})
  res.json({ resultaat: "ok" });
};

// exporteren van code

module.exports = {
  infoAll,
  getOne,
  addOne,
  addGift,
  deleteOnePost,
};
