/******************  librires and requires *******************/


const express = require("express")

const app = express()



/******************  server work *******************/
app.use(express.static('./public'))

const port = 3000;
const server = app.listen(port,()=>{
    console.log(`server run on http://localhost:${port}`)
})



/******************  ejs setup *******************/

app.set("view engine","ejs")
app.use(express.urlencoded({ extended: false }));



/******************database setup*******************/

const knex = require('knex')({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'Recritwinnerone2011',
    database : '3mWleed'
    }
    });

/******************  Routes and request *******************/


app.get("/",(req,res)=>{

    knex.select().from("CustomerImg").then((results)=>{
        console.log(results)
        res.render("home",{Img: results}) 
    })
    
})


app.get("/market",(req,res)=>{

    res.render("market") 
    
})
