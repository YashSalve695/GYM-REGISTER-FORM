const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "gym",
});

app.post("/register", (res, res) => {
    const CUSTOMER_ID = req.body.CUSTOMER_ID;
    const CUSTOMER_NAME = req.body.CUSTOMER_NAME;
    const CUSTOMER_AGE = req.body.CUSTOMER_AGE;
    const JOINING_DATE = req.body.JOINING_DATE;
    const BATCH = req.body.BATCH;

    db.query(
        "INSERT INTO CUSTOMER (CUSTOMER_ID, CUSTOMER_NAME, CUSTOMER_AGE, JOINING_DATE, BATCH) VALUES (?,?,?,?,?)"
        ,[CUSTOMER_ID, CUSTOMER_NAME, CUSTOMER_AGE, JOINING_DATE, BATCH], 
        (err, result) => {
            console.log(err)
        }
    );
});

app.listen(3001, () => {
    console.log("server running");
});
