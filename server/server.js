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
