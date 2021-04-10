const express = require('express');
const fs = require('fs');
const https = require('https')

var privateKey = fs.readFileSync('localhost-key.pem');
var certificate = fs.readFileSync('localhost.pem');

const app = express()
express.static.mime.define({ 'text/plain': ['gltf'] });
app.use(express.static(__dirname + "/public"))
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile)
app.use('/obj', express.static('3d-models'))
app.use('/markers', express.static('markers'))
app.get('/', (req, res) => res.render('index.html'))
app.get('/default', (req, res) => res.render('default.html'))
app.get('/default2', (req, res) => res.render('default2.html'))

const port = 5678
https.createServer({
  key: privateKey,
  cert: certificate
}, app).listen(port);