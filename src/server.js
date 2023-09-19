import express from "express";
import initWebRoutes from "./routes/web";
import configViewEngine from "./configs/viewEngine";
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app = express();

configViewEngine(app);

initWebRoutes(app);

app.listen(PORT, () => console.log('>>> JWT Backend is running on the port = ', PORT))