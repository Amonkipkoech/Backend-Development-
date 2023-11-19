import Express  from "express";
const app = Express();
const Tel = 70818443;
const port = 3000;
 app.get("/", (req,res)=>{
    res.send("<h1>Hello World nodemon has restarted our server</h1>");
   // console.log(req.rawHeaders);<h1>Hello Amon</h1>
 })
 
 app.get("/contact", (req,res)=>{
    res.send(`thanks for contacting AMONTECH Solutions, Our phone number is : ${port}`);
 })

 app.get("/about", (req,res)=>{
    res.send("<h1>Hello customer you will get our where abouts herer</h1>");
   // console.log(req.rawHeaders);<h1>Hello Amon</h1>
 })
app.listen(port, ()=> {
    console.log(`Server is listening to port ${port}`);
})