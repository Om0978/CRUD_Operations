const userdata=require("../model/userModel");


// Create Data
exports.createdata=async(req,res)=>{
    try{
        const dataa=req.body;
        const response=await userdata.create(dataa);

        res.send(response);
    }
    catch(err){
        console.log("error");
    }
}

// Get Data
exports.getdata=async(req,res)=>{
    try{
        const data = await userdata.findOne({id:req.body.id});
        res.send("data"+data)
    }
    catch(erro){
        console.log("Error "+erro.message);
    }
}



// Delete Data
exports.deletedata=async(req,res)=>{
    try{
        const user=await userdata.findOneAndDelete({id:req.body.id});
        res.send(user)
    }
    catch(error){
        console.log("Error"+error.message);
    }
}


// Update Data
exports.updatedata = async(req,res)=>{
    try{
        const user=await userdata.findOneAndUpdate({id:req.body.id},{name:req.body.name,age:req.body.age,email:req.body.email},{new:true});
        res.send(user);
    }
    catch(erro){
        console.log("Error "+erro.message);
    }
}
