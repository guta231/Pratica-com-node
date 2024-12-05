const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();


app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({message: "Hello from express"});
});

app.get('/nome', (req, res) => {
    res.json({nome: "Gustavo"});
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Guta231',
    database: 'banco'
})

db.connect((err) =>{
    if (err){
        console.log("erro ao conectar ao banco de dados");
    }else{
        console.log("banco de dados sincronizado");
    }
});

app.get('/usuarios', (req, res) => {
    db.query("SELECT * FROM usuarios", (err, results) => {
        if (err){
            res.json({error: "Erro ao buscar usuarios"});
        }else{
            res.json(results);
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta: " + PORT);
});