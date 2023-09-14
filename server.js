// Step 1: Create an Express instance Varaible
const express = require('express')
//Step 2: Assign the express() to a Varaible app
const app = express()

//Step 4: Creating Different Routes to Access Data Over Web
app.get('/',(req,res)=>{
    res.send("Hello From Node CRUD API...")
})

//Step 3: Start Listening to App
app.listen(3000,()=>{
    console.log("Node CRUD API running on Port 3000");
})