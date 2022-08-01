const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
var cors = require('cors');
const dotenv = require("dotenv");


const server = http.createServer(app);


// const publicPath = path.join(__dirname, '..', 'public');
app.use('/', express.static(path.join(__dirname, '../build')));
// app.use('/', express.static(path.join(__dirname, '../public')));

app.use(cors());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));
app.use(express.json());
 
//app.use(express.static(path.join(__dirname, '../build')));
 
app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, '../',  'build', 'index.html')
  )
);

app.listen(port, () => {
   console.log('Server is up! Frontend');
});

 