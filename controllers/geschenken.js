/**
 * zorg ervoor dat je onderstaande functies werken
 *
 * 1. Zorg dat je een lijst van alle geschenken kan krijgen (enkel de id en de naam).
 * 2. Zorg dat je op basis van een verkregen ID de details van een geschenk kan teruggeven
 * 3. Zorg ervoor dat via postman nieuwe (andere zaken dan onderstaand) kan toevoegen aan de lijst van
 * geschenken.
 * 4. Zorg ervoor dat een geschenk enkel gewist kan worden als het in geen enkel lijstje staat.
 *
 * succes!!
 */

// connecteer de datagegevens aan de controller
const { sinterklaasGeschenken: geschenken } = require("../databank/data");

const lijstGeschenken = (req, res) => {
  geschenken.forEach(element => {
  })
  
};

const geschenkInfo = (req, res) => {
  // 2 x een res sturen kan niet! 
  res.json(geschenken.filter((geschenk) => geschenk.id == req.params.ID))
  res.json({ status: "gelukt" });
};

const geschenkToevoegen = (req, res) => {
  const newGeschenk = {
    // een id mee geven doe je best niet (gebruik hiervoor de juiste functie)
     id: req.body.id,  //15
    naam: req.body.naam,  //"KarelKleintjes-tshirt"
    categorie: req.body.categorie, //"textiel"
    prijs: req.body.prijs,    //20.5
  };
  geschenken.push(newGeschenk);
  res.json(newGeschenk);
};

const geschenkWissen = (req, res) => {
  const geschenkToDel = geschenken.find(
    (geschenk) => geschenk.id == req.params.ID
  );
  const indexToDel = geschenken.indexOf(geschenkToDel);

  geschenken.splice(indexToDel, 1);
  res.json({ resultaat: "gelukt" });
};

// kon je dus makkelijk gebruiken 
const newID = (lijstMetID) => {
  lijstMetID.forEach((item) => {
    maxID = 0;
    item.id > maxID ? (maxID = item.id) : (maxID = maxID);
  });
  return maxID + 1;
};

module.exports = {
  lijstGeschenken,
  geschenkInfo,
  geschenkToevoegen,
  geschenkWissen,
};
