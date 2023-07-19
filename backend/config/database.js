const mongoose = require("mongoose");



const connectDatabase = ( ) =>{

    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useunifiedTopology:true,useCreateIndex:true}).then((data)=>{
        console.log(`monogodb connected with server : ${data.connection.host}`);
    });
};

module.exports = connectDatabase