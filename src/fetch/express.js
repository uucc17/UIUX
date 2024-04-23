const express = require('express');
const app = express();

app.get("/", (req, res) => {
   const jsonData = new Array();
   jsonData.push({"name":"Yoonji"});
   jsonData.push({"name":"Minji"});
   jsonData.push({"name":"Hyunji"});
   res.send(jsonData);
});

app.listen(3003);