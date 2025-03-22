var express = require("express")
var app = express()
var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})
{
"name": "sit725-2021-t2-prac3",
"version": "1.0.0",
"description": "sit 725 week 3 prac",
"main": "server.js",
"scripts": {
"start": "node server.js"
},
"repository": {
"type": "git",
"url":"https://github.com/awasthi44/SIT725"
},
"keywords": [
"Nodejs",
"Express",
"Materialize",
"HTML",
"JS",
"CSS"
],
"author": "Navit Choudhary",
"license": "MIT",
"bugs": {
"url": "https://github.com/ChoudharyNavit22/sit725-2021-t2-prac3/issues"
},
"homepage": "https://github.com/ChoudharyNavit22/sit725-2021-t2-prac3#readme",
"dependencies": {
"express": "^4.17.1"
}
}
