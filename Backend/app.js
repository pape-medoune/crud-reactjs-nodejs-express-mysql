//  CREATION DE MON API REST AVEC MYSQL

const express = require("express");
const sql = require("mysql");
const app = express();
const PORT = 5400;
const bodyParser = require("body-parser");
const cors = require('cors');



const connection =  sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'exocrudnode',
});

app.use(cors());

app.use(bodyParser.json());

connection.connect((err)=>{
    if(err)
        console.log(err);

    console.log("La connection a la base de donnée s'est fait avec succés!!");
});

app.use(express.json());

app.post("/Ajout",(req,res)=>{
    const q = "INSERT INTO etudiant(prenom,nom,mail) VALUES (?,?,?)";

    const {prenom,nom,mail} = req.body;

    connection.query(q,[prenom,nom,mail],(err,_) =>{
        if(err)
        {
            console.log(err);
        }

        res.json();
    })
});

app.put("/update/:id",(req,res) =>{
    const q = "UPDATE etudiant SET prenom=? ,nom=? ,mail=? where id = ?";
    
    const {id} = req.params;
    const {prenom,nom,mail} = req.body;

    connection.query(q,[prenom,nom,mail,id],(err,resultat)=>{
        if(err)
            console.log(err);

        res.send("Update fait avec succés!");
    })

});

app.get("/display",(req,res)=>{
    const q = "SELECT * FROM etudiant";

    connection.query(q,(err,resultat)=>{
        if(err)
            console.log(err);
        
        res.json(resultat);
    })
});


app.delete("/deleted/:id",(req,res)=>{
    const q = "DELETE FROM etudiant where id = ?";

    connection.query(q,(err,resultat)=>{
        if(err)
            console.log(err);
    
        res.send("La suppression s'est fait avec succés!");
    });
});

app.listen(PORT,console.log("BOnjour Mouhamedoune fall"));
