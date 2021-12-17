import express, { json } from "express";
import Database from "./database";
import cors from "cors";
import helmet from "helmet";

const Movie = express();

Movie.use(express.json());
Movie.use(express.urlencoded({extended: false}))
Movie.use(cors());
Movie.use(helmet());

Movie.get("/", (req, res) => {
  res.json({ message: "setup success!!" });
});

Movie.get("/movie", async (req, res) => {
  return res.json({ movies: Database.Movies });
});

Movie.post("/movie/new", async (req, res) => {
  try {
    const { newMovie } = req.body;
    console.log(newMovie);
    return res.json({ message: "movie is added successfully" });
  } catch (error) {
    return res.json({ error: error.message });
  }
});

Movie.listen(4000, () => console.log("Server is up and running"));

export default Movie;
