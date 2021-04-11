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
app.get('/', (req, res) => res.render('index.ejs', {
  menuItems: [{
    imageUrl: "https://www.thespruceeats.com/thmb/9QUNxZ9-RO4uLx48uTfLnUK7IWI=/2000x1332/filters:fill(auto,1)/thai-red-curry-with-chicken-recipe-3217262-hero-01-1099358354ca43b89d2c7cc3409a079b.jpg",
    name: "Thai Chicken Curry",
    priceString: "Rs. 290",
    price: 290,
    object: {
      url: "/obj/thai.gltf",
      scale: [0.25, 0.25, 0.25]
    }
  },
  {
    imageUrl: "https://i.gifer.com/fetch/w300-preview/65/650fb3205a85a1dc2175da4b6b2dd024.gif",
    name: "American Hotdog",
    priceString: "Rs. 180",
    price: 180,
    object: {
      url: "/obj/hotdog.gltf",
      scale: [1, 1, 1]
    }
  },
  {
    imageUrl: "https://media.bizj.us/view/img/10100451/burger*1024xx2020-1142-0-256.jpg",
    name: "Mexican Cheeseburger",
    priceString: "Rs. 1080",
    price: 180,
    object: {
      url: "/obj/neoburger.gltf",
      scale: [0.5, 0.5, 0.5]
    }
  },
  ]
}))

const port = 5678
https.createServer({
  key: privateKey,
  cert: certificate
}, app).listen(port);