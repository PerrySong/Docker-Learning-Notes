const express = require("express");
const redis = require("redis");
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.set("visites", 0);

app.get("/", (req, res) => {
    process.exit(0);
        client.get('visites', (err, visites) => {
        res.send("Number of visits is " + visites);
        client.set("visits", parseInt(visites) + 1);
    })
})

app.listen(8081, () => {
    console.log("Listening on port 8081");
})