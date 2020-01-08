let appModule=require("./app"); 
let handlers=require("./requestHandlers"); 
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(8000, appModule.appInit);