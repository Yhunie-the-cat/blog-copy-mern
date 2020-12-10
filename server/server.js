// https://www.youtube.com/watch?v=vjf774RKrLc
// https://www.youtube.com/watch?v=qj2oDkvc4dQ&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=5
// https://www.youtube.com/watch?v=7CqJlxBYj-M    //!This
// https://www.youtube.com/watch?v=ngc9gnGgUdA    //!This
// https://www.youtube.com/watch?v=l8WPWK9mS5M
// https://www.youtube.com/watch?v=fgTGADljAeg
// https://www.youtube.com/watch?v=5yTazHkDR4o&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=2

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("test");
  res.send("Homepage");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
