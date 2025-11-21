// zorgt ervoor dat je de nodige data hebt
const express = require("express");
const cors = require("cors");
const geschenkenRoute = require("./routes/geschenken");
const kinderenRoute = require("./routes/kinderen")

const app = express();

app.use(express.json());
app.use(cors());

// toont aan welke routes je moet ingeven 
app.use("/geschenken", geschenkenRoute);
app.use("/kinderen", kinderenRoute);

// zorgt ervoor dat de server gaat lopen op lijn 3000
app.listen(3000, () => {
  console.log("server running on port 3000");
});
