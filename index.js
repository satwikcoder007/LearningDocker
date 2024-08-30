import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT =  process.env.PORT||4000;

console.log(PORT);
app.get("/", (req, res) => {
    res.status(200).json({ data: "hello from server" });
});

app.listen(PORT, () => {
    console.log("Server started at port " + PORT);
});
