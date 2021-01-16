const express = require("express")
const app = express();// xay nha
const port = process.env.PORT || 5000; // khai bao cong vao
app.listen(port,function (){ // hoan thanh xay nha
    console.log("Server is running...");
});
app.use(express.static("public")); // cac file css, img...
// tao routing(thue nhan vien)
app.get("/",function (req,res){
   res.sendFile(__dirname+"/public/layoutss6.html");
});
//them 1 routing
app.get("/bongda",function (req,res){
    var d = {
        message:"success",
        data:[
            {
                id:1,
                name:"haha"
            },
            {
                id:2,
                name:"hihi"
            }
        ]
    }
    res.send(d);
});
app.get("/quanao",function (req,res){
   res.sendFile(__dirname+"/public/btlab4.html");
});