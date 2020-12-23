const express = require('express')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello world!'))

app.get('/secret', isAuthorized, (req, res) => {
    res.json({ "message" : "THIS IS SUPER SECRET, DO NOT SHARE!" })
})

app.get('/readme', (req, res) => {
    res.json({"message": "Hello World"});
})

app.get('/jwt', (req, res) => {
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: 'HS256'});
    res.send(token);
})

function isAuthorized(req, res, next) {
    if(typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync('./private.pem', 'utf8');

        jwt.verify(token, privateKey, {algorithm: "HS256"}, (err, decoded) => {
            if (err) {
                res.status(500).json({ error: "Not Authorized"});
                throw new Error("Not Authorized");
            }

            console.log('Decoded: ', decoded);

            return next();
        })
    } else {
        res.status(500).json({error: "Not Authorized"});
        throw new Error("Not Authorized");
    }
}

app.listen(port, () => console.log(`Started App on port ${port}`))