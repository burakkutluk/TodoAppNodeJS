import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import todoRoute from "./routes/todoRoute.js";

dotenv.config();

conn();

const app = express();
const port = process.env.PORT;

app.use(express.static("public"));
app.use(express.json({limit:'30mb', extended: "true"}));
app.use(express.urlencoded({limit:'30mb', extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
})

//route
app.use("/api", todoRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})