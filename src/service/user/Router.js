import express from 'express'
import user from './Schema.js';


const UserRouter = express.Router();

UserRouter.post('/form_data',async (req,res)=>{
    const {passenger_name,From,To,journey_date,coach_type} = req.body

    const passenger = new user({
        passenger_name,From,To,journey_date,coach_type
    }) 
    await passenger.save();

    res.json({passenger})
})

export default UserRouter;