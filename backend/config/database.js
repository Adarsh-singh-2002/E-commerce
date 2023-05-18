const mongoose = require("mongoose");



const connectDatabase = ( ) =>{

    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useunifiedTopology:true}).then((data)=>{
        console.log(`monogodb connected with server : ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDatabase
