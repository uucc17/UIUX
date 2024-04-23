const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
   origin: "http://127.0.0.1:5500",
   credentials : true
}));

app.get("/", (req, res) => {
   const jsonData = new Array();
   jsonData.push({"name":"Yoonji"});
   jsonData.push({"name":"Minji"});
   jsonData.push({"name":"Hyunji"});
   res.send(jsonData);
});

app.listen(3003);