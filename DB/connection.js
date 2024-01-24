const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("Monogodb Atless successfully connected with moms Kitchen");
}).catch((err)=>{
    console.log(`Mongodb connection failed!!! Error : ${err}`);
})