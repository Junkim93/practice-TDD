import express from "express";
import logger from "morgan";
import path from "path";

const app = express();

app.use(logger("dev"));

app.use("/", express.static(path.join(__dirname, "src")));

const PORT = 4000;
const handleListening = () => {
  console.log(`LISTENING ON: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
