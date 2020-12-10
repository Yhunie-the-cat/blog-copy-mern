// https://www.youtube.com/watch?v=vjf774RKrLc
// https://www.youtube.com/watch?v=qj2oDkvc4dQ&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=5
// https://www.youtube.com/watch?v=7CqJlxBYj-M    //!This
// https://www.youtube.com/watch?v=ngc9gnGgUdA    //!This
// https://www.youtube.com/watch?v=l8WPWK9mS5M
// https://www.youtube.com/watch?v=fgTGADljAeg
// https://www.youtube.com/watch?v=5yTazHkDR4o&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=2

//mongodb+srv://<username>:<password>@blog.gdy6j.mongodb.net/<dbname>?retryWrites=true&w=majority

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postRoute from "./routes/posts.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//  Middleware
app.use(cors());
app.use(express.json());
app.use("/posts", postRoute);
//--

const uri = process.env.ATLAS_URI;

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

//  Start server
/*app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);*/
