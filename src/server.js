import express from 'express'
import dotenv from 'dotenv';
// import connectDB from './config/Db.js';
import path, { resolve } from 'path';
import { fileURLToPath } from "url";
dotenv.config()

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")))
const url = process.env.MONGODB_URL;


// connectDB(url)
// new Promise((resolve,reject)=>resolve())
// .then(()=>app.listen(5000,()=>console.log("Server running on port 5000"))).catch((err)=>console.log("Server stop !"))

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


app.get('/',(req,res)=>{
    res.render('index.ejs');
})
