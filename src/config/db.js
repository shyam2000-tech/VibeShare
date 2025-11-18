import mongoose from "mongoose"

export const connectDB = async (req,res) => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected✅")
    }catch(error) {
        console.log('DataBase Connecting Issue : ',error)
    }
}