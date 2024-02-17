const express = require("express");
const routes = require("./routes");
const bodyParser = require('body-parser')
const corsMiddleware = require("./middleware/corsMiddleware");

const app = express();

app.use(express.json());
app.use(corsMiddleware);
// app.use(bodyParser);
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
