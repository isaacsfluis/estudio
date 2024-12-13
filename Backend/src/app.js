import express from "express";
import morgan from "morgan";

//routs
import start from "./routes/start.route.js"; // llamar diferente a la imporacion
import articles from "./routes/article.route.js"

export const app = express();

app.use(express.json());
app.use(morgan("dev"));
//app.use(cookieParser());

app.use("/", start);
app.use("/api/article", articles);
