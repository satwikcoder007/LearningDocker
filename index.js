import express from "express";
import dotenv from "dotenv";
import { dbConnect} from "./config/dbConnection.js";
import { User } from "./source/User.js";

dotenv.config();
const app = express();

const PORT =  process.env.PORT||4000;

console.log(PORT);


const addUser = async(req,res)=>{
    const user = {
        firstName:"Satwik",
        lastName:"Biswas"
    }
    try {
        const Data =await  User.create(user);
        console.log(Data);
        return res.status(200).json({data:Data});
    } catch (error) {
        console.log("Some error ocured");
    }
    
}
app.get("/", (req, res) => {
    res.status(200).json({ data: "updated hello from server" });
});

app.post("/test",addUser);

dbConnect();

app.listen(PORT, () => {
    console.log("Server started at port " + PORT);
});
