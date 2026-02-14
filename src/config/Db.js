import mongoose from 'mongoose';

async function connectDB(url){
    try {
        await mongoose.connect(url,{dbName:'url_shortner'})
        console.log("Database Connection successful !")
        
    } catch (error) {
        console.log("Database Connection failed !");
        process.exit(1)
    }
} 
export default connectDB;