import express from "express";
import connectDB from './config/db.js'
import dotenv from "dotenv";
import DefaultData from "./constants/default.js";
import router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)

connectDB();
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

// DefaultData();
