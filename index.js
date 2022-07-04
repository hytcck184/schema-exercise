import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

import express from "express";
import cors from "cors";

import morgan from "morgan";
import mongoose from "mongoose";

import usersRouter from "./routes/users.js";

const app = express();
const connectionString = process.env.DB_URL + "/" + process.env.DB_NAME
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on("open", () => console.log("Database connection established"));
mongoose.connection.on("error", () => console.error);

app.use(cors());

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(morgan("tiny"));

app.use("/user", usersRouter);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server has started on port ${process.env.port || 3001}!`);
})