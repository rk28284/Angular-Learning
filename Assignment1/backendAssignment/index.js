const express = require("express");
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Backend Assignment");
});

app.use("/user", userRouter);

// Start the server
app.listen(port,async()=>{
    try{
        await connection;
        console.log("Successfully connected to the database");
    }catch(error){
        console.error("Database connection failed:", error);
    }
    console.log(`Server is running on port ${port}`);
});