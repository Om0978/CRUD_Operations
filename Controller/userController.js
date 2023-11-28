const express =require ('express');
const User = require ('../model/userModel');
const userServices = require ("../Services/userServices");
exports.register = async (req,res) => {
    try{
        const inputData = req.body;
        const email = inputData.email;
            // console.log(email);
        const activeUser = await userServices.findByEmail(email);
        console.log('activeUser',activeUser);
        if(activeUser){
            res.status(500).json({message:"user already exists"})
        }
        else{

            const createData = await userServices.createUser(inputData)
        res.status(200).json({
            message:'Created Successfully',
            data : createData
    })
        }
        
    }
    catch(err){
        res.status(500).json({
            status:500,
            message:console.err.stack
        })
    }
    
}