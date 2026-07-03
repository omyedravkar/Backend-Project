import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        console.log("MONGODB_URI =", process.env.MONGODB_URI);
        console.log("PORT =", process.env.PORT);

        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongo DB connect : DB Host : ${connectInstance.connection.host}`);
    }

    catch (error) {
        console.log("MongoDB_connection error ", error);
        process.exit(1);
    }
}


export default connectDB;