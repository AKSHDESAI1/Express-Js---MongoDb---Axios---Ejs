const express = require("express");
const router = require("./routes/web.js")
const connectDb = require("./db/connectDb.js")


const app = express();
const PORT = 8000;
const mongodb_url = "mongodb://localhost:27017";

// Connect to MongoDb Database. 
connectDb(mongodb_url);

app.set("view engine", "ejs");

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT} Port.`);
})