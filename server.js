// Step 1: Create an Express instance Varaible and Mongoose Instance Variable
const express = require("express");
const mongoose = require("mongoose");
const errorMiddleWare = require("./middlewares/errorMiddleware")
const productRoute = require("./routes/productRoute")

//Step 2: Assign the express() to a Varaible app
const app = express();

//DB Instance
var db = null;


//To Understand the JSON by App
app.use(express.json());

//To Understand the urlencoded by App
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", true);

//Step 4: Creating Different Routes to Access Data Over Web
app.use('/api',productRoute);

app.get("/api", (req, res) => {
  res.send("<center><h1>Welcome To Our Shop App By Coding Rockers</h1></center>");
});

//Connecting MongoDB Atlas Connection String with Node JS App
mongoose
  .connect(
    "mongodb+srv://admin:Zaid123@cluster0codingrockers.peefac9.mongodb.net/nodecrudapi?retryWrites=true&w=majority"
  )
  .then(() => {
    //Before Listening To App Server,First Connect To Database
    console.log("Connected To MongoDB");
    db = mongoose.connection.db;
    //Step 3: Start Listening to App
    app.listen(3000, () => {
      // await db.createCollection("users")
      console.log("App Started on : http://127.0.0.1:3000");
    });
  })
  .catch((error) => {
    console.log("Error = "+error+"\n");
    console.log("Error Occured While Connecting To MongoDB");
  });
