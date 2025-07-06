import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import http from "http";
import path from "path"
dotenv.config()

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

server.listen(port, () => {
  console.log("server is running on PORT:" + port);
});