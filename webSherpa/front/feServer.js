const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();

app.use(express.static('./build'));

const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/websherpa.xyz-0001/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/websherpa.xyz-0001/privkey.pem')
};


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});


https.createServer(options, app).listen(443, err => {
	if (err) throw err;
	console.log('listening on port 443')
});
