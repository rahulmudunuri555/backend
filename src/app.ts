import express from "express";
import dbInit from "./db/init";

import patientRoute from "../src/routes/routes";

const port = 3006

const app = express();

app.use(express.json());
dbInit()
app.use('/',patientRoute)
app.get('/', (req,res) =>{
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });