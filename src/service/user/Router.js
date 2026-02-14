import express from 'express'
import user from './Schema.js';


const UserRouter = express.Router();

UserRouter.post('/form_data',async (req,res)=>{
    const {email,enrollmentNumber,mobile,name} = req.body

    const newUser = new user({
        email,enrollmentNumber,mobile,name
    }) 
    await newUser.save();

    res.send("user created !")
})

export default UserRouter;