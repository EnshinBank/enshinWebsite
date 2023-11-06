const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv")

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());

// app.get("/", (req, res) => { res.status(200).send("Hello, World!");})

app.use(express.static(path.join(__dirname, 'public')));



app.listen(port,()=>{console.log(`server is running in ${port}`)});