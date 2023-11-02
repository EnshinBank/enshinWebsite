const express = require("express");
const cors = require("cors");
require("dotenv")

const app = express();

const port = process.env.port || 5000;
app.use(cors());

app.get("/", (req, res) => { res.status(200).send("Hello, World!");})





app.listen(port,()=>{console.log(`server is running in ${port}`)});