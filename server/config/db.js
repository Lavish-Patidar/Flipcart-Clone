import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    const URL = process.env.MONGO_URL;

    try {
        await mongoose.connect(URL);
        console.log('DataBase connected');


    } catch (error) {
        console.log("Error in connecting to database", error.message);

    }
};

export default connectDB;