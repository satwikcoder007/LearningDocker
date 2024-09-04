import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const dbConnect = async()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MONGO_DB Connected !!!! DB:HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error in MONGO_DB Connection: ",error);
        process.exit(1);
    }
}

export {dbConnect};