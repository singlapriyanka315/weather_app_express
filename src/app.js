const express= require('express');
const app= express();
const path = require('path');
const port = process.env.PORT || 8000 ;
const hbs= require('hbs');

//public static path
const partials_path= path.join(__dirname,"../templates/partials");
const static_path= path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../templates/views");


app.set("view engine", "hbs");
app.set('views',templates_path)
hbs.registerPartials(partials_path);
app.use(express.static(static_path))

//routing 
app.get("/",(req,res)=>{
    res.render("index");
})


app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404",{
        err:`The page you are looking for appears to have been moved, deleted,or does not exist.`
    });
})

app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
}
)