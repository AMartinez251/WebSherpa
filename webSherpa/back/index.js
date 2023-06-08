const express = require('express');
const cors = require('cors');
const https = require('https')
const path = require('path');
const fs = require('fs');

const routes = require("./routes");

const dev = process.env.NODE_DEV !== 'production' //true false
const serverPort = process.env.PORT || 4000;
const clientPort = 3000;


const app = express();
app.use(require('morgan')('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
   cors({
       origin: ["https://websherpa.xyz"], 
       credentials: false,
   })
);

routes(app);

const options = {
    cert : fs.readFileSync('/etc/letsencrypt/live/websherpa.xyz-0001/fullchain.pem'),
    key : fs.readFileSync('/etc/letsencrypt/live/websherpa.xyz-0001/privkey.pem')
};


https.createServer(options, app).listen(serverPort, err => {
    if (err) throw err;
        console.log('Server running on port', serverPort)
});
