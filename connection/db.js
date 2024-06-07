const mongoose = require('mongoose')

connectionString= process.env.connectionString

mongoose.connect(connectionString).then((res)=>{
    console.log('connected to mongodb database');
}).catch((err)=>{
    console.log(err);
})