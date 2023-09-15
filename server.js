// Step 1: Create an Express instance Varaible and Mongoose Instance Variable

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config()
console.log(process.env) 
const errorMiddleWare = require("./middlewares/errorMiddleware")
const productRoute = require("./routes/productRoute")

const mongodburl = process.env.MONGODB_URL;
const port = process.env.PORT

//Step 2: Assign the express() to a Varaible app
const app = express();

//DB Instance
var db = null;

//CORS FOR ONLY SOMEDOMAINS
// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

//CORS POLICY
app.use(cors())

//To Understand the JSON by App
app.use(express.json());

//To Understand the urlencoded by App
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", true);

//Step 4: Creating Different Routes to Access Data Over Web
app.use('/api',productRoute);

app.get("/api" ,(req, res) => {
  res.send("<center><h1>Welcome To Our Shop App By Coding Rockers</h1></center>");
});

app.use(errorMiddleWare)

//Connecting MongoDB Atlas Connection String with Node JS App
mongoose
  .connect(
    mongodburl
  )
  .then(() => {
    //Before Listening To App Server,First Connect To Database
    console.log("Connected To MongoDB");
    db = mongoose.connection.db;
    //Step 3: Start Listening to App
    app.listen(3000, () => {
      // await db.createCollection("users")
      console.log("App Started on : http://127.0.0.1:"+port+"/api");
    });
  })
  .catch((error) => {
    console.log("Error = "+error+"\n");
    console.log("Error Occured While Connecting To MongoDB");
  });
