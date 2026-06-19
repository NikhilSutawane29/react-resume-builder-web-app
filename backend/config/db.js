
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nikhilsutawane2:resume1229@cluster0.evbi355.mongodb.net/RESUME')
    .then(() => {
        console.log("MongoDB connected successfully");
    }) 
}
