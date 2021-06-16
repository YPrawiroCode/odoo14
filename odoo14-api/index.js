const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "odoo14",
    host:"localhost",
    database: "odoo14",
    password: "admin123",
    port: 5432
})

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Universe')
})

app.get("/api/rescompany", (req,res) => {
    pool.query(
        "SELECT id, name, partner_id FROM res_company",
        [],
        (error, result) => {
            if (error) {
                throw error;      
             }

        res.status(200).json(result.rows);
        });
});


app.listen(3003, () => {
    console.log(`Server is running in port 3003.`);
});