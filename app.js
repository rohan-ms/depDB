import express from "express";
import Router from "./routes/routes.js";
import morgan from "morgan";

// import path from "path"
// import { fileURLToPath } from "url"
const app = express();

app.use(express.json());
app.use(morgan("tiny"));
// console.log(path)
// const filepath=fileURLToPath(import.meta.url)
// const pathnew=path.join(filepath,'')
app.use(express.urlencoded({ extended: true }));

app.use("/", Router);

console.log("testing");

app.listen(5000, () => {
  console.log("started on port 5000");
});
