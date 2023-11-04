const { error } = require("console");
const fs = require("fs");

// fs.writeFile("message.txt", "hello from node js", (error)=>{
//     if(error) throw error;
//     console.log(" the file has been saved ");
// });

fs.readFile("./message.txt",'utf8', (err,data) =>{
    if(err) throw err;
    console.log(data);
});