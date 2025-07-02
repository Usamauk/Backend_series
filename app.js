import express from 'express';
const app = express();
import cookie from 'cookie-parser'




app.get("/",  (req,res)=>{
    res.cookie("name", "usama")
    res.send("done")
})
app.get("/read",  (req,res)=>{
    console.log("request.cookie");
    
    res.send("read page")
})

app.listen(3000)

