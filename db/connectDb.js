const mongoose = require("mongoose");

const connectDb = async (mongodb_url) => {
    try {
        const dbOptios = {
            dbName: "Crud_Mongo_Axios"
        }
        await mongoose.connect(mongodb_url, dbOptios);
        console.log("Successfully Connected");
    } catch (error) {
        console.log("Internal Server Error", error.message);
    }
}

module.exports = connectDb;