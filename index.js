const express=require("express");
const { connection } = require("./configs/db");
const { BookingModel } = require("./models/Bookings.model");
const { FlightModel } = require("./models/Flights.model");
const { UserModel } = require("./models/Users.model");

require('dotenv').config();

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome To Air Ticket Booking App");
})

app.post("/register",async (req,res)=>{
    let payload=req.body;
    // console.log(payload)
    try{
        const user=new UserModel(payload);
        await user.save();
        res.send("Registered Successfully");
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

app.post("/login",async (req,res)=>{
    let {email,password}=req.body;
    // console.log(payload)
    try{
        const user=await UserModel.find({email,password});
       if(user.length>0){
           res.send("Login Successfull");
       }else{
        res.send("Email or Password is invalid");
       }
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

app.get("/flights",async (req,res)=>{
    try{
        const flight=await FlightModel.find();
        if(flight.length!=0){
            res.send(flight);
        }else{
            res.send("No Flights Found");
        }
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

app.get("/flights/:id",async (req,res)=>{
    const ID=req.params.id;
    try{
        const flight=await FlightModel.findById({_id:ID});
        console.log(flight)
        if(flight!=null){
            res.send(flight);
        }else{
            res.send("No Flights Found");
        }
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

app.post("/flights",async (req,res)=>{
    let payload=req.body;
    // console.log(payload)
    try{
        const flight=new FlightModel(payload);
        await flight.save();
        res.send("Added Flight Successfully");
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

app.patch("/flights/:id",async (req,res)=>{
    let payload=req.body;
    const ID=req.params.id;
    // console.log(payload)
    try{
        await FlightModel.findByIdAndUpdate({_id:ID},payload);
        res.send(`Updated Flight Successfully with id: ${ID}`);
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

app.delete("/flights/:id",async (req,res)=>{
    const ID=req.params.id;
    try{
        await FlightModel.findByIdAndDelete({_id:ID});
        res.send(`Deleted Flight Successfully with id: ${ID}`);
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

app.post("/booking",async (req,res)=>{
    let payload=req.body;
    // console.log(payload)
    try{
        const flight=new BookingModel(payload);
        await flight.save();
        res.send("Booking Successfull");
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

app.get("/dashboard",async (req,res)=>{
    try{
        const booking=await BookingModel.find();
        if(booking.length!=0){
            booking.map(async (el,i)=>{
                let payload={};
                const {name,email}=await UserModel.findById({_id:el.user});
                payload["User Details"]=({name,email});
                const flight=await FlightModel.findById({_id:el.flight});
                payload["Flight Details"]=(flight);
                console.log(payload)
            })
            res.send("Data Send in Console");
        }else{
            res.send("No Bookings Found");
        }
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

app.listen(process.env.port,async ()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})